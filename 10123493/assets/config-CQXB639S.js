var e = Object.create, t = Object.defineProperty, n = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, i = Object.getPrototypeOf, a = Object.prototype.hasOwnProperty, o = (e, t) => () => (t || e((t = {
    exports: {}
}).exports, t),
t.exports), s = (e, n) => {
    let r = {};
    for (var i in e)
        t(r, i, {
            get: e[i],
            enumerable: !0
        });
    return n || t(r, Symbol.toStringTag, {
        value: `Module`
    }),
    r
}
, c = (e, i, o, s) => {
    if (i && typeof i == `object` || typeof i == `function`)
        for (var c = r(i), l = 0, u = c.length, d; l < u; l++)
            d = c[l],
            !a.call(e, d) && d !== o && t(e, d, {
                get: (e => i[e]).bind(null, d),
                enumerable: !(s = n(i, d)) || s.enumerable
            });
    return e
}
, l = (n, r, a) => (a = n == null ? {} : e(i(n)),
c(r || !n || !n.__esModule ? t(a, `default`, {
    value: n,
    enumerable: !0
}) : a, n)), u = `modulepreload`, d = function(e) {
    return `/preview/fefca3eb-bf0f-469a-afed-4ceaf4e065a1/10123493/` + e
}, f = {}, p = function(e, t, n) {
    let r = Promise.resolve();
    if (t && t.length > 0) {
        let e = document.getElementsByTagName(`link`)
          , i = document.querySelector(`meta[property=csp-nonce]`)
          , a = i?.nonce || i?.getAttribute(`nonce`);
        function o(e) {
            return Promise.all(e.map(e => Promise.resolve(e).then(e => ({
                status: `fulfilled`,
                value: e
            }), e => ({
                status: `rejected`,
                reason: e
            }))))
        }
        r = o(t.map(t => {
            if (t = d(t, n),
            t in f)
                return;
            f[t] = !0;
            let r = t.endsWith(`.css`)
              , i = r ? `[rel="stylesheet"]` : ``;
            if (n)
                for (let n = e.length - 1; n >= 0; n--) {
                    let i = e[n];
                    if (i.href === t && (!r || i.rel === `stylesheet`))
                        return
                }
            else if (document.querySelector(`link[href="${t}"]${i}`))
                return;
            let o = document.createElement(`link`);
            if (o.rel = r ? `stylesheet` : u,
            r || (o.as = `script`),
            o.crossOrigin = ``,
            o.href = t,
            a && o.setAttribute(`nonce`, a),
            document.head.appendChild(o),
            r)
                return new Promise( (e, n) => {
                    o.addEventListener(`load`, e),
                    o.addEventListener(`error`, () => n(Error(`Unable to preload CSS for ${t}`)))
                }
                )
        }
        ))
    }
    function i(e) {
        let t = new Event(`vite:preloadError`,{
            cancelable: !0
        });
        if (t.payload = e,
        window.dispatchEvent(t),
        !t.defaultPrevented)
            throw e
    }
    return r.then(t => {
        for (let e of t || [])
            e.status === `rejected` && i(e.reason);
        return e().catch(i)
    }
    )
}, m = o((e => {
    var t = Symbol.for(`react.transitional.element`)
      , n = Symbol.for(`react.portal`)
      , r = Symbol.for(`react.fragment`)
      , i = Symbol.for(`react.strict_mode`)
      , a = Symbol.for(`react.profiler`)
      , o = Symbol.for(`react.consumer`)
      , s = Symbol.for(`react.context`)
      , c = Symbol.for(`react.forward_ref`)
      , l = Symbol.for(`react.suspense`)
      , u = Symbol.for(`react.memo`)
      , d = Symbol.for(`react.lazy`)
      , f = Symbol.for(`react.activity`)
      , p = Symbol.iterator;
    function m(e) {
        return typeof e != `object` || !e ? null : (e = p && e[p] || e[`@@iterator`],
        typeof e == `function` ? e : null)
    }
    var h = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , g = Object.assign
      , _ = {};
    function v(e, t, n) {
        this.props = e,
        this.context = t,
        this.refs = _,
        this.updater = n || h
    }
    v.prototype.isReactComponent = {},
    v.prototype.setState = function(e, t) {
        if (typeof e != `object` && typeof e != `function` && e != null)
            throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);
        this.updater.enqueueSetState(this, e, t, `setState`)
    }
    ,
    v.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, `forceUpdate`)
    }
    ;
    function y() {}
    y.prototype = v.prototype;
    function b(e, t, n) {
        this.props = e,
        this.context = t,
        this.refs = _,
        this.updater = n || h
    }
    var x = b.prototype = new y;
    x.constructor = b,
    g(x, v.prototype),
    x.isPureReactComponent = !0;
    var S = Array.isArray;
    function C() {}
    var w = {
        H: null,
        A: null,
        T: null,
        S: null
    }
      , T = Object.prototype.hasOwnProperty;
    function E(e, n, r) {
        var i = r.ref;
        return {
            $$typeof: t,
            type: e,
            key: n,
            ref: i === void 0 ? null : i,
            props: r
        }
    }
    function ee(e, t) {
        return E(e.type, t, e.props)
    }
    function te(e) {
        return typeof e == `object` && !!e && e.$$typeof === t
    }
    function ne(e) {
        var t = {
            "=": `=0`,
            ":": `=2`
        };
        return `$` + e.replace(/[=:]/g, function(e) {
            return t[e]
        })
    }
    var D = /\/+/g;
    function O(e, t) {
        return typeof e == `object` && e && e.key != null ? ne(`` + e.key) : t.toString(36)
    }
    function re(e) {
        switch (e.status) {
        case `fulfilled`:
            return e.value;
        case `rejected`:
            throw e.reason;
        default:
            switch (typeof e.status == `string` ? e.then(C, C) : (e.status = `pending`,
            e.then(function(t) {
                e.status === `pending` && (e.status = `fulfilled`,
                e.value = t)
            }, function(t) {
                e.status === `pending` && (e.status = `rejected`,
                e.reason = t)
            })),
            e.status) {
            case `fulfilled`:
                return e.value;
            case `rejected`:
                throw e.reason
            }
        }
        throw e
    }
    function k(e, r, i, a, o) {
        var s = typeof e;
        (s === `undefined` || s === `boolean`) && (e = null);
        var c = !1;
        if (e === null)
            c = !0;
        else
            switch (s) {
            case `bigint`:
            case `string`:
            case `number`:
                c = !0;
                break;
            case `object`:
                switch (e.$$typeof) {
                case t:
                case n:
                    c = !0;
                    break;
                case d:
                    return c = e._init,
                    k(c(e._payload), r, i, a, o)
                }
            }
        if (c)
            return o = o(e),
            c = a === `` ? `.` + O(e, 0) : a,
            S(o) ? (i = ``,
            c != null && (i = c.replace(D, `$&/`) + `/`),
            k(o, r, i, ``, function(e) {
                return e
            })) : o != null && (te(o) && (o = ee(o, i + (o.key == null || e && e.key === o.key ? `` : (`` + o.key).replace(D, `$&/`) + `/`) + c)),
            r.push(o)),
            1;
        c = 0;
        var l = a === `` ? `.` : a + `:`;
        if (S(e))
            for (var u = 0; u < e.length; u++)
                a = e[u],
                s = l + O(a, u),
                c += k(a, r, i, s, o);
        else if (u = m(e),
        typeof u == `function`)
            for (e = u.call(e),
            u = 0; !(a = e.next()).done; )
                a = a.value,
                s = l + O(a, u++),
                c += k(a, r, i, s, o);
        else if (s === `object`) {
            if (typeof e.then == `function`)
                return k(re(e), r, i, a, o);
            throw r = String(e),
            Error(`Objects are not valid as a React child (found: ` + (r === `[object Object]` ? `object with keys {` + Object.keys(e).join(`, `) + `}` : r) + `). If you meant to render a collection of children, use an array instead.`)
        }
        return c
    }
    function A(e, t, n) {
        if (e == null)
            return e;
        var r = []
          , i = 0;
        return k(e, r, ``, ``, function(e) {
            return t.call(n, e, i++)
        }),
        r
    }
    function ie(e) {
        if (e._status === -1) {
            var t = e._result;
            t = t(),
            t.then(function(t) {
                (e._status === 0 || e._status === -1) && (e._status = 1,
                e._result = t)
            }, function(t) {
                (e._status === 0 || e._status === -1) && (e._status = 2,
                e._result = t)
            }),
            e._status === -1 && (e._status = 0,
            e._result = t)
        }
        if (e._status === 1)
            return e._result.default;
        throw e._result
    }
    var ae = typeof reportError == `function` ? reportError : function(e) {
        if (typeof window == `object` && typeof window.ErrorEvent == `function`) {
            var t = new window.ErrorEvent(`error`,{
                bubbles: !0,
                cancelable: !0,
                message: typeof e == `object` && e && typeof e.message == `string` ? String(e.message) : String(e),
                error: e
            });
            if (!window.dispatchEvent(t))
                return
        } else if (typeof process == `object` && typeof process.emit == `function`) {
            process.emit(`uncaughtException`, e);
            return
        }
        console.error(e)
    }
      , oe = {
        map: A,
        forEach: function(e, t, n) {
            A(e, function() {
                t.apply(this, arguments)
            }, n)
        },
        count: function(e) {
            var t = 0;
            return A(e, function() {
                t++
            }),
            t
        },
        toArray: function(e) {
            return A(e, function(e) {
                return e
            }) || []
        },
        only: function(e) {
            if (!te(e))
                throw Error(`React.Children.only expected to receive a single React element child.`);
            return e
        }
    };
    e.Activity = f,
    e.Children = oe,
    e.Component = v,
    e.Fragment = r,
    e.Profiler = a,
    e.PureComponent = b,
    e.StrictMode = i,
    e.Suspense = l,
    e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = w,
    e.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(e) {
            return w.H.useMemoCache(e)
        }
    },
    e.cache = function(e) {
        return function() {
            return e.apply(null, arguments)
        }
    }
    ,
    e.cacheSignal = function() {
        return null
    }
    ,
    e.cloneElement = function(e, t, n) {
        if (e == null)
            throw Error(`The argument must be a React element, but you passed ` + e + `.`);
        var r = g({}, e.props)
          , i = e.key;
        if (t != null)
            for (a in t.key !== void 0 && (i = `` + t.key),
            t)
                !T.call(t, a) || a === `key` || a === `__self` || a === `__source` || a === `ref` && t.ref === void 0 || (r[a] = t[a]);
        var a = arguments.length - 2;
        if (a === 1)
            r.children = n;
        else if (1 < a) {
            for (var o = Array(a), s = 0; s < a; s++)
                o[s] = arguments[s + 2];
            r.children = o
        }
        return E(e.type, i, r)
    }
    ,
    e.createContext = function(e) {
        return e = {
            $$typeof: s,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        },
        e.Provider = e,
        e.Consumer = {
            $$typeof: o,
            _context: e
        },
        e
    }
    ,
    e.createElement = function(e, t, n) {
        var r, i = {}, a = null;
        if (t != null)
            for (r in t.key !== void 0 && (a = `` + t.key),
            t)
                T.call(t, r) && r !== `key` && r !== `__self` && r !== `__source` && (i[r] = t[r]);
        var o = arguments.length - 2;
        if (o === 1)
            i.children = n;
        else if (1 < o) {
            for (var s = Array(o), c = 0; c < o; c++)
                s[c] = arguments[c + 2];
            i.children = s
        }
        if (e && e.defaultProps)
            for (r in o = e.defaultProps,
            o)
                i[r] === void 0 && (i[r] = o[r]);
        return E(e, a, i)
    }
    ,
    e.createRef = function() {
        return {
            current: null
        }
    }
    ,
    e.forwardRef = function(e) {
        return {
            $$typeof: c,
            render: e
        }
    }
    ,
    e.isValidElement = te,
    e.lazy = function(e) {
        return {
            $$typeof: d,
            _payload: {
                _status: -1,
                _result: e
            },
            _init: ie
        }
    }
    ,
    e.memo = function(e, t) {
        return {
            $$typeof: u,
            type: e,
            compare: t === void 0 ? null : t
        }
    }
    ,
    e.startTransition = function(e) {
        var t = w.T
          , n = {};
        w.T = n;
        try {
            var r = e()
              , i = w.S;
            i !== null && i(n, r),
            typeof r == `object` && r && typeof r.then == `function` && r.then(C, ae)
        } catch (e) {
            ae(e)
        } finally {
            t !== null && n.types !== null && (t.types = n.types),
            w.T = t
        }
    }
    ,
    e.unstable_useCacheRefresh = function() {
        return w.H.useCacheRefresh()
    }
    ,
    e.use = function(e) {
        return w.H.use(e)
    }
    ,
    e.useActionState = function(e, t, n) {
        return w.H.useActionState(e, t, n)
    }
    ,
    e.useCallback = function(e, t) {
        return w.H.useCallback(e, t)
    }
    ,
    e.useContext = function(e) {
        return w.H.useContext(e)
    }
    ,
    e.useDebugValue = function() {}
    ,
    e.useDeferredValue = function(e, t) {
        return w.H.useDeferredValue(e, t)
    }
    ,
    e.useEffect = function(e, t) {
        return w.H.useEffect(e, t)
    }
    ,
    e.useEffectEvent = function(e) {
        return w.H.useEffectEvent(e)
    }
    ,
    e.useId = function() {
        return w.H.useId()
    }
    ,
    e.useImperativeHandle = function(e, t, n) {
        return w.H.useImperativeHandle(e, t, n)
    }
    ,
    e.useInsertionEffect = function(e, t) {
        return w.H.useInsertionEffect(e, t)
    }
    ,
    e.useLayoutEffect = function(e, t) {
        return w.H.useLayoutEffect(e, t)
    }
    ,
    e.useMemo = function(e, t) {
        return w.H.useMemo(e, t)
    }
    ,
    e.useOptimistic = function(e, t) {
        return w.H.useOptimistic(e, t)
    }
    ,
    e.useReducer = function(e, t, n) {
        return w.H.useReducer(e, t, n)
    }
    ,
    e.useRef = function(e) {
        return w.H.useRef(e)
    }
    ,
    e.useState = function(e) {
        return w.H.useState(e)
    }
    ,
    e.useSyncExternalStore = function(e, t, n) {
        return w.H.useSyncExternalStore(e, t, n)
    }
    ,
    e.useTransition = function() {
        return w.H.useTransition()
    }
    ,
    e.version = `19.2.6`
}
)), h = o(( (e, t) => {
    t.exports = m()
}
)), g = o((e => {
    var t = Symbol.for(`react.transitional.element`)
      , n = Symbol.for(`react.fragment`);
    function r(e, n, r) {
        var i = null;
        if (r !== void 0 && (i = `` + r),
        n.key !== void 0 && (i = `` + n.key),
        `key`in n)
            for (var a in r = {},
            n)
                a !== `key` && (r[a] = n[a]);
        else
            r = n;
        return n = r.ref,
        {
            $$typeof: t,
            type: e,
            key: i,
            ref: n === void 0 ? null : n,
            props: r
        }
    }
    e.Fragment = n,
    e.jsx = r,
    e.jsxs = r
}
)), _ = o(( (e, t) => {
    t.exports = g()
}
)), v = l(h()), y = (e, t, n, r) => {
    let i = [n, {
        code: t,
        ...r || {}
    }];
    if (e?.services?.logger?.forward)
        return e.services.logger.forward(i, `warn`, `react-i18next::`, !0);
    E(i[0]) && (i[0] = `react-i18next:: ${i[0]}`),
    e?.services?.logger?.warn ? e.services.logger.warn(...i) : console?.warn && console.warn(...i)
}
, b = {}, x = (e, t, n, r) => {
    E(n) && b[n] || (E(n) && (b[n] = new Date),
    y(e, t, n, r))
}
, S = (e, t) => () => {
    if (e.isInitialized)
        t();
    else {
        let n = () => {
            setTimeout( () => {
                e.off(`initialized`, n)
            }
            , 0),
            t()
        }
        ;
        e.on(`initialized`, n)
    }
}
, C = (e, t, n) => {
    e.loadNamespaces(t, S(e, n))
}
, w = (e, t, n, r) => {
    if (E(n) && (n = [n]),
    e.options.preload && e.options.preload.indexOf(t) > -1)
        return C(e, n, r);
    n.forEach(t => {
        e.options.ns.indexOf(t) < 0 && e.options.ns.push(t)
    }
    ),
    e.loadLanguages(t, S(e, r))
}
, T = (e, t, n={}) => !t.languages || !t.languages.length ? (x(t, `NO_LANGUAGES`, `i18n.languages were undefined or empty`, {
    languages: t.languages
}),
!0) : t.hasLoadedNamespace(e, {
    lng: n.lng,
    precheck: (t, r) => {
        if (n.bindI18n && n.bindI18n.indexOf(`languageChanging`) > -1 && t.services.backendConnector.backend && t.isLanguageChangingTo && !r(t.isLanguageChangingTo, e))
            return !1
    }
}), E = e => typeof e == `string`, ee = e => typeof e == `object` && !!e, te = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, ne = {
    "&amp;": `&`,
    "&#38;": `&`,
    "&lt;": `<`,
    "&#60;": `<`,
    "&gt;": `>`,
    "&#62;": `>`,
    "&apos;": `'`,
    "&#39;": `'`,
    "&quot;": `"`,
    "&#34;": `"`,
    "&nbsp;": ` `,
    "&#160;": ` `,
    "&copy;": `©`,
    "&#169;": `©`,
    "&reg;": `®`,
    "&#174;": `®`,
    "&hellip;": `…`,
    "&#8230;": `…`,
    "&#x2F;": `/`,
    "&#47;": `/`
}, D = e => ne[e], O = {
    bindI18n: `languageChanged`,
    bindI18nStore: ``,
    transEmptyNodeValue: ``,
    transSupportBasicHtmlNodes: !0,
    transWrapTextNodes: ``,
    transKeepBasicHtmlNodesFor: [`br`, `strong`, `i`, `p`],
    useSuspense: !0,
    unescape: e => e.replace(te, D)
}, re = (e={}) => {
    O = {
        ...O,
        ...e
    }
}
, k = () => O, A, ie = e => {
    A = e
}
, ae = () => A, oe = {
    type: `3rdParty`,
    init(e) {
        re(e.options.react),
        ie(e)
    }
}, se = (0,
v.createContext)(), ce = class {
    constructor() {
        this.usedNamespaces = {}
    }
    addUsedNamespaces(e) {
        e.forEach(e => {
            this.usedNamespaces[e] || (this.usedNamespaces[e] = !0)
        }
        )
    }
    getUsedNamespaces() {
        return Object.keys(this.usedNamespaces)
    }
}
, le = (e, t) => {
    let n = (0,
    v.useRef)();
    return (0,
    v.useEffect)( () => {
        n.current = t ? n.current : e
    }
    , [e, t]),
    n.current
}
, ue = (e, t, n, r) => e.getFixedT(t, n, r), de = (e, t, n, r) => (0,
v.useCallback)(ue(e, t, n, r), [e, t, n, r]), j = (e, t={}) => {
    let {i18n: n} = t
      , {i18n: r, defaultNS: i} = (0,
    v.useContext)(se) || {}
      , a = n || r || ae();
    if (a && !a.reportNamespaces && (a.reportNamespaces = new ce),
    !a) {
        x(a, `NO_I18NEXT_INSTANCE`, `useTranslation: You will need to pass in an i18next instance by using initReactI18next`);
        let e = (e, t) => E(t) ? t : ee(t) && E(t.defaultValue) ? t.defaultValue : Array.isArray(e) ? e[e.length - 1] : e
          , t = [e, {}, !1];
        return t.t = e,
        t.i18n = {},
        t.ready = !1,
        t
    }
    a.options.react?.wait && x(a, `DEPRECATED_OPTION`, `useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.`);
    let o = {
        ...k(),
        ...a.options.react,
        ...t
    }
      , {useSuspense: s, keyPrefix: c} = o
      , l = e || i || a.options?.defaultNS;
    l = E(l) ? [l] : l || [`translation`],
    a.reportNamespaces.addUsedNamespaces?.(l);
    let u = (a.isInitialized || a.initializedStoreOnce) && l.every(e => T(e, a, o))
      , d = de(a, t.lng || null, o.nsMode === `fallback` ? l : l[0], c)
      , f = () => d
      , p = () => ue(a, t.lng || null, o.nsMode === `fallback` ? l : l[0], c)
      , [m,h] = (0,
    v.useState)(f)
      , g = l.join();
    t.lng && (g = `${t.lng}${g}`);
    let _ = le(g)
      , y = (0,
    v.useRef)(!0);
    (0,
    v.useEffect)( () => {
        let {bindI18n: e, bindI18nStore: n} = o;
        y.current = !0,
        !u && !s && (t.lng ? w(a, t.lng, l, () => {
            y.current && h(p)
        }
        ) : C(a, l, () => {
            y.current && h(p)
        }
        )),
        u && _ && _ !== g && y.current && h(p);
        let r = () => {
            y.current && h(p)
        }
        ;
        return e && a?.on(e, r),
        n && a?.store.on(n, r),
        () => {
            y.current = !1,
            a && e && e?.split(` `).forEach(e => a.off(e, r)),
            n && a && n.split(` `).forEach(e => a.store.off(e, r))
        }
    }
    , [a, g]),
    (0,
    v.useEffect)( () => {
        y.current && u && h(f)
    }
    , [a, c, u]);
    let b = [m, a, u];
    if (b.t = m,
    b.i18n = a,
    b.ready = u,
    u || !u && !s)
        return b;
    throw new Promise(e => {
        t.lng ? w(a, t.lng, l, () => e()) : C(a, l, () => e())
    }
    )
}
, fe = `popstate`;
function pe(e) {
    return typeof e == `object` && !!e && `pathname`in e && `search`in e && `hash`in e && `state`in e && `key`in e
}
function me(e={}) {
    function t(e, t) {
        let n = t.state?.masked
          , {pathname: r, search: i, hash: a} = n || e.location;
        return _e(``, {
            pathname: r,
            search: i,
            hash: a
        }, t.state && t.state.usr || null, t.state && t.state.key || `default`, n ? {
            pathname: e.location.pathname,
            search: e.location.search,
            hash: e.location.hash
        } : void 0)
    }
    function n(e, t) {
        return typeof t == `string` ? t : P(t)
    }
    return ve(t, n, null, e)
}
function M(e, t) {
    if (e === !1 || e == null)
        throw Error(t)
}
function N(e, t) {
    if (!e) {
        typeof console < `u` && console.warn(t);
        try {
            throw Error(t)
        } catch {}
    }
}
function he() {
    return Math.random().toString(36).substring(2, 10)
}
function ge(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t,
        masked: e.mask ? {
            pathname: e.pathname,
            search: e.search,
            hash: e.hash
        } : void 0
    }
}
function _e(e, t, n=null, r, i) {
    return {
        pathname: typeof e == `string` ? e : e.pathname,
        search: ``,
        hash: ``,
        ...typeof t == `string` ? F(t) : t,
        state: n,
        key: t && t.key || r || he(),
        mask: i
    }
}
function P({pathname: e=`/`, search: t=``, hash: n=``}) {
    return t && t !== `?` && (e += t.charAt(0) === `?` ? t : `?` + t),
    n && n !== `#` && (e += n.charAt(0) === `#` ? n : `#` + n),
    e
}
function F(e) {
    let t = {};
    if (e) {
        let n = e.indexOf(`#`);
        n >= 0 && (t.hash = e.substring(n),
        e = e.substring(0, n));
        let r = e.indexOf(`?`);
        r >= 0 && (t.search = e.substring(r),
        e = e.substring(0, r)),
        e && (t.pathname = e)
    }
    return t
}
function ve(e, t, n, r={}) {
    let {window: i=document.defaultView, v5Compat: a=!1} = r
      , o = i.history
      , s = `POP`
      , c = null
      , l = u();
    l ?? (l = 0,
    o.replaceState({
        ...o.state,
        idx: l
    }, ``));
    function u() {
        return (o.state || {
            idx: null
        }).idx
    }
    function d() {
        s = `POP`;
        let e = u()
          , t = e == null ? null : e - l;
        l = e,
        c && c({
            action: s,
            location: h.location,
            delta: t
        })
    }
    function f(e, t) {
        s = `PUSH`;
        let r = pe(e) ? e : _e(h.location, e, t);
        n && n(r, e),
        l = u() + 1;
        let d = ge(r, l)
          , f = h.createHref(r.mask || r);
        try {
            o.pushState(d, ``, f)
        } catch (e) {
            if (e instanceof DOMException && e.name === `DataCloneError`)
                throw e;
            i.location.assign(f)
        }
        a && c && c({
            action: s,
            location: h.location,
            delta: 1
        })
    }
    function p(e, t) {
        s = `REPLACE`;
        let r = pe(e) ? e : _e(h.location, e, t);
        n && n(r, e),
        l = u();
        let i = ge(r, l)
          , d = h.createHref(r.mask || r);
        o.replaceState(i, ``, d),
        a && c && c({
            action: s,
            location: h.location,
            delta: 0
        })
    }
    function m(e) {
        return ye(e)
    }
    let h = {
        get action() {
            return s
        },
        get location() {
            return e(i, o)
        },
        listen(e) {
            if (c)
                throw Error(`A history only accepts one active listener`);
            return i.addEventListener(fe, d),
            c = e,
            () => {
                i.removeEventListener(fe, d),
                c = null
            }
        },
        createHref(e) {
            return t(i, e)
        },
        createURL: m,
        encodeLocation(e) {
            let t = m(e);
            return {
                pathname: t.pathname,
                search: t.search,
                hash: t.hash
            }
        },
        push: f,
        replace: p,
        go(e) {
            return o.go(e)
        }
    };
    return h
}
function ye(e, t=!1) {
    let n = `http://localhost`;
    typeof window < `u` && (n = window.location.origin === `null` ? window.location.href : window.location.origin),
    M(n, `No window.location.(origin|href) available to create URL`);
    let r = typeof e == `string` ? e : P(e);
    return r = r.replace(/ $/, `%20`),
    !t && r.startsWith(`//`) && (r = n + r),
    new URL(r,n)
}
function be(e, t, n=`/`) {
    return xe(e, t, n, !1)
}
function xe(e, t, n, r, i) {
    let a = I((typeof t == `string` ? F(t) : t).pathname || `/`, n);
    if (a == null)
        return null;
    let o = i ?? Ce(e)
      , s = null
      , c = ze(a);
    for (let e = 0; s == null && e < o.length; ++e)
        s = Ie(o[e], c, r);
    return s
}
function Se(e, t) {
    let {route: n, pathname: r, params: i} = e;
    return {
        id: n.id,
        pathname: r,
        params: i,
        data: t[n.id],
        loaderData: t[n.id],
        handle: n.handle
    }
}
function Ce(e) {
    let t = we(e);
    return Ee(t),
    t
}
function we(e, t=[], n=[], r=``, i=!1) {
    let a = (e, a, o=i, s) => {
        let c = {
            relativePath: s === void 0 ? e.path || `` : s,
            caseSensitive: e.caseSensitive === !0,
            childrenIndex: a,
            route: e
        };
        if (c.relativePath.startsWith(`/`)) {
            if (!c.relativePath.startsWith(r) && o)
                return;
            M(c.relativePath.startsWith(r), `Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),
            c.relativePath = c.relativePath.slice(r.length)
        }
        let l = L([r, c.relativePath])
          , u = n.concat(c);
        e.children && e.children.length > 0 && (M(e.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${l}".`),
        we(e.children, t, u, l, o)),
        !(e.path == null && !e.index) && t.push({
            path: l,
            score: Pe(l, e.index),
            routesMeta: u
        })
    }
    ;
    return e.forEach( (e, t) => {
        if (e.path === `` || !e.path?.includes(`?`))
            a(e, t);
        else
            for (let n of Te(e.path))
                a(e, t, !0, n)
    }
    ),
    t
}
function Te(e) {
    let t = e.split(`/`);
    if (t.length === 0)
        return [];
    let[n,...r] = t
      , i = n.endsWith(`?`)
      , a = n.replace(/\?$/, ``);
    if (r.length === 0)
        return i ? [a, ``] : [a];
    let o = Te(r.join(`/`))
      , s = [];
    return s.push(...o.map(e => e === `` ? a : [a, e].join(`/`))),
    i && s.push(...o),
    s.map(t => e.startsWith(`/`) && t === `` ? `/` : t)
}
function Ee(e) {
    e.sort( (e, t) => e.score === t.score ? Fe(e.routesMeta.map(e => e.childrenIndex), t.routesMeta.map(e => e.childrenIndex)) : t.score - e.score)
}
var De = /^:[\w-]+$/
  , Oe = 3
  , ke = 2
  , Ae = 1
  , je = 10
  , Me = -2
  , Ne = e => e === `*`;
function Pe(e, t) {
    let n = e.split(`/`)
      , r = n.length;
    return n.some(Ne) && (r += Me),
    t && (r += ke),
    n.filter(e => !Ne(e)).reduce( (e, t) => e + (De.test(t) ? Oe : t === `` ? Ae : je), r)
}
function Fe(e, t) {
    return e.length === t.length && e.slice(0, -1).every( (e, n) => e === t[n]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function Ie(e, t, n=!1) {
    let {routesMeta: r} = e
      , i = {}
      , a = `/`
      , o = [];
    for (let e = 0; e < r.length; ++e) {
        let s = r[e]
          , c = e === r.length - 1
          , l = a === `/` ? t : t.slice(a.length) || `/`
          , u = Le({
            path: s.relativePath,
            caseSensitive: s.caseSensitive,
            end: c
        }, l)
          , d = s.route;
        if (!u && c && n && !r[r.length - 1].route.index && (u = Le({
            path: s.relativePath,
            caseSensitive: s.caseSensitive,
            end: !1
        }, l)),
        !u)
            return null;
        Object.assign(i, u.params),
        o.push({
            params: i,
            pathname: L([a, u.pathname]),
            pathnameBase: Ye(L([a, u.pathnameBase])),
            route: d
        }),
        u.pathnameBase !== `/` && (a = L([a, u.pathnameBase]))
    }
    return o
}
function Le(e, t) {
    typeof e == `string` && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,r] = Re(e.path, e.caseSensitive, e.end)
      , i = t.match(n);
    if (!i)
        return null;
    let a = i[0]
      , o = a.replace(/(.)\/+$/, `$1`)
      , s = i.slice(1);
    return {
        params: r.reduce( (e, {paramName: t, isOptional: n}, r) => {
            if (t === `*`) {
                let e = s[r] || ``;
                o = a.slice(0, a.length - e.length).replace(/(.)\/+$/, `$1`)
            }
            let i = s[r];
            return n && !i ? e[t] = void 0 : e[t] = (i || ``).replace(/%2F/g, `/`),
            e
        }
        , {}),
        pathname: a,
        pathnameBase: o,
        pattern: e
    }
}
function Re(e, t=!1, n=!0) {
    N(e === `*` || !e.endsWith(`*`) || e.endsWith(`/*`), `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, `/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, `/*`)}".`);
    let r = []
      , i = `^` + e.replace(/\/*\*?$/, ``).replace(/^\/*/, `/`).replace(/[\\.*+^${}|()[\]]/g, `\\$&`).replace(/\/:([\w-]+)(\?)?/g, (e, t, n, i, a) => {
        if (r.push({
            paramName: t,
            isOptional: n != null
        }),
        n) {
            let t = a.charAt(i + e.length);
            return t && t !== `/` ? `/([^\\/]*)` : `(?:/([^\\/]*))?`
        }
        return `/([^\\/]+)`
    }
    ).replace(/\/([\w-]+)\?(\/|$)/g, `(/$1)?$2`);
    return e.endsWith(`*`) ? (r.push({
        paramName: `*`
    }),
    i += e === `*` || e === `/*` ? `(.*)$` : `(?:\\/(.+)|\\/*)$`) : n ? i += `\\/*$` : e !== `` && e !== `/` && (i += `(?:(?=\\/|$))`),
    [new RegExp(i,t ? void 0 : `i`), r]
}
function ze(e) {
    try {
        return e.split(`/`).map(e => decodeURIComponent(e).replace(/\//g, `%2F`)).join(`/`)
    } catch (t) {
        return N(!1, `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),
        e
    }
}
function I(e, t) {
    if (t === `/`)
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith(`/`) ? t.length - 1 : t.length
      , r = e.charAt(n);
    return r && r !== `/` ? null : e.slice(n) || `/`
}
var Be = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function Ve(e, t=`/`) {
    let {pathname: n, search: r=``, hash: i=``} = typeof e == `string` ? F(e) : e, a;
    return n ? (n = qe(n),
    a = n.startsWith(`/`) ? He(n.substring(1), `/`) : He(n, t)) : a = t,
    {
        pathname: a,
        search: Xe(r),
        hash: Ze(i)
    }
}
function He(e, t) {
    let n = Je(t).split(`/`);
    return e.split(`/`).forEach(e => {
        e === `..` ? n.length > 1 && n.pop() : e !== `.` && n.push(e)
    }
    ),
    n.length > 1 ? n.join(`/`) : `/`
}
function Ue(e, t, n, r) {
    return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`
}
function We(e) {
    return e.filter( (e, t) => t === 0 || e.route.path && e.route.path.length > 0)
}
function Ge(e) {
    let t = We(e);
    return t.map( (e, n) => n === t.length - 1 ? e.pathname : e.pathnameBase)
}
function Ke(e, t, n, r=!1) {
    let i;
    typeof e == `string` ? i = F(e) : (i = {
        ...e
    },
    M(!i.pathname || !i.pathname.includes(`?`), Ue(`?`, `pathname`, `search`, i)),
    M(!i.pathname || !i.pathname.includes(`#`), Ue(`#`, `pathname`, `hash`, i)),
    M(!i.search || !i.search.includes(`#`), Ue(`#`, `search`, `hash`, i)));
    let a = e === `` || i.pathname === ``, o = a ? `/` : i.pathname, s;
    if (o == null)
        s = n;
    else {
        let e = t.length - 1;
        if (!r && o.startsWith(`..`)) {
            let t = o.split(`/`);
            for (; t[0] === `..`; )
                t.shift(),
                --e;
            i.pathname = t.join(`/`)
        }
        s = e >= 0 ? t[e] : `/`
    }
    let c = Ve(i, s)
      , l = o && o !== `/` && o.endsWith(`/`)
      , u = (a || o === `.`) && n.endsWith(`/`);
    return !c.pathname.endsWith(`/`) && (l || u) && (c.pathname += `/`),
    c
}
var qe = e => e.replace(/\/\/+/g, `/`)
  , L = e => qe(e.join(`/`))
  , Je = e => e.replace(/\/+$/, ``)
  , Ye = e => Je(e).replace(/^\/*/, `/`)
  , Xe = e => !e || e === `?` ? `` : e.startsWith(`?`) ? e : `?` + e
  , Ze = e => !e || e === `#` ? `` : e.startsWith(`#`) ? e : `#` + e
  , Qe = class {
    constructor(e, t, n, r=!1) {
        this.status = e,
        this.statusText = t || ``,
        this.internal = r,
        n instanceof Error ? (this.data = n.toString(),
        this.error = n) : this.data = n
    }
}
;
function $e(e) {
    return e != null && typeof e.status == `number` && typeof e.statusText == `string` && typeof e.internal == `boolean` && `data`in e
}
function et(e) {
    return L(e.map(e => e.route.path).filter(Boolean)) || `/`
}
var tt = typeof window < `u` && window.document !== void 0 && window.document.createElement !== void 0;
function nt(e, t) {
    let n = e;
    if (typeof n != `string` || !Be.test(n))
        return {
            absoluteURL: void 0,
            isExternal: !1,
            to: n
        };
    let r = n
      , i = !1;
    if (tt)
        try {
            let e = new URL(window.location.href)
              , r = n.startsWith(`//`) ? new URL(e.protocol + n) : new URL(n)
              , a = I(r.pathname, t);
            r.origin === e.origin && a != null ? n = a + r.search + r.hash : i = !0
        } catch {
            N(!1, `<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)
        }
    return {
        absoluteURL: r,
        isExternal: i,
        to: n
    }
}
Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);
var rt = [`POST`, `PUT`, `PATCH`, `DELETE`];
new Set(rt);
var it = [`GET`, ...rt];
new Set(it);
var R = v.createContext(null);
R.displayName = `DataRouter`;
var z = v.createContext(null);
z.displayName = `DataRouterState`;
var at = v.createContext(!1);
function ot() {
    return v.useContext(at)
}
var st = v.createContext({
    isTransitioning: !1
});
st.displayName = `ViewTransition`;
var ct = v.createContext(new Map);
ct.displayName = `Fetchers`;
var lt = v.createContext(null);
lt.displayName = `Await`;
var B = v.createContext(null);
B.displayName = `Navigation`;
var V = v.createContext(null);
V.displayName = `Location`;
var H = v.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
});
H.displayName = `Route`;
var ut = v.createContext(null);
ut.displayName = `RouteError`;
var dt = `REACT_ROUTER_ERROR`
  , ft = `REDIRECT`
  , pt = `ROUTE_ERROR_RESPONSE`;
function mt(e) {
    if (e.startsWith(`${dt}:${ft}:{`))
        try {
            let t = JSON.parse(e.slice(28));
            if (typeof t == `object` && t && typeof t.status == `number` && typeof t.statusText == `string` && typeof t.location == `string` && typeof t.reloadDocument == `boolean` && typeof t.replace == `boolean`)
                return t
        } catch {}
}
function ht(e) {
    if (e.startsWith(`${dt}:${pt}:{`))
        try {
            let t = JSON.parse(e.slice(40));
            if (typeof t == `object` && t && typeof t.status == `number` && typeof t.statusText == `string`)
                return new Qe(t.status,t.statusText,t.data)
        } catch {}
}
function gt(e, {relative: t}={}) {
    M(U(), `useHref() may be used only in the context of a <Router> component.`);
    let {basename: n, navigator: r} = v.useContext(B)
      , {hash: i, pathname: a, search: o} = K(e, {
        relative: t
    })
      , s = a;
    return n !== `/` && (s = a === `/` ? n : L([n, a])),
    r.createHref({
        pathname: s,
        search: o,
        hash: i
    })
}
function U() {
    return v.useContext(V) != null
}
function W() {
    return M(U(), `useLocation() may be used only in the context of a <Router> component.`),
    v.useContext(V).location
}
var _t = `You should call navigate() in a React.useEffect(), not when your component is first rendered.`;
function vt(e) {
    v.useContext(B).static || v.useLayoutEffect(e)
}
function G() {
    let {isDataRoute: e} = v.useContext(H);
    return e ? zt() : yt()
}
function yt() {
    M(U(), `useNavigate() may be used only in the context of a <Router> component.`);
    let e = v.useContext(R)
      , {basename: t, navigator: n} = v.useContext(B)
      , {matches: r} = v.useContext(H)
      , {pathname: i} = W()
      , a = JSON.stringify(Ge(r))
      , o = v.useRef(!1);
    return vt( () => {
        o.current = !0
    }
    ),
    v.useCallback( (r, s={}) => {
        if (N(o.current, _t),
        !o.current)
            return;
        if (typeof r == `number`) {
            n.go(r);
            return
        }
        let c = Ke(r, JSON.parse(a), i, s.relative === `path`);
        e == null && t !== `/` && (c.pathname = c.pathname === `/` ? t : L([t, c.pathname])),
        (s.replace ? n.replace : n.push)(c, s.state, s)
    }
    , [t, n, a, i, e])
}
v.createContext(null);
function bt() {
    let {matches: e} = v.useContext(H);
    return e[e.length - 1]?.params ?? {}
}
function K(e, {relative: t}={}) {
    let {matches: n} = v.useContext(H)
      , {pathname: r} = W()
      , i = JSON.stringify(Ge(n));
    return v.useMemo( () => Ke(e, JSON.parse(i), r, t === `path`), [e, i, r, t])
}
function xt(e, t) {
    return St(e, t)
}
function St(e, t, n) {
    M(U(), `useRoutes() may be used only in the context of a <Router> component.`);
    let {navigator: r} = v.useContext(B)
      , {matches: i} = v.useContext(H)
      , a = i[i.length - 1]
      , o = a ? a.params : {}
      , s = a ? a.pathname : `/`
      , c = a ? a.pathnameBase : `/`
      , l = a && a.route;
    {
        let e = l && l.path || ``;
        Vt(s, !l || e.endsWith(`*`) || e.endsWith(`*?`), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e === `/` ? `*` : `${e}/*`}">.`)
    }
    let u = W(), d;
    if (t) {
        let e = typeof t == `string` ? F(t) : t;
        M(c === `/` || e.pathname?.startsWith(c), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),
        d = e
    } else
        d = u;
    let f = d.pathname || `/`
      , p = f;
    if (c !== `/`) {
        let e = c.replace(/^\//, ``).split(`/`);
        p = `/` + f.replace(/^\//, ``).split(`/`).slice(e.length).join(`/`)
    }
    let m = n && n.state.matches.length ? n.state.matches.map(e => Object.assign(e, {
        route: n.manifest[e.route.id] || e.route
    })) : be(e, {
        pathname: p
    });
    N(l || m != null, `No routes matched location "${d.pathname}${d.search}${d.hash}" `),
    N(m == null || m[m.length - 1].route.element !== void 0 || m[m.length - 1].route.Component !== void 0 || m[m.length - 1].route.lazy !== void 0, `Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
    let h = kt(m && m.map(e => Object.assign({}, e, {
        params: Object.assign({}, o, e.params),
        pathname: L([c, r.encodeLocation ? r.encodeLocation(e.pathname.replace(/%/g, `%25`).replace(/\?/g, `%3F`).replace(/#/g, `%23`)).pathname : e.pathname]),
        pathnameBase: e.pathnameBase === `/` ? c : L([c, r.encodeLocation ? r.encodeLocation(e.pathnameBase.replace(/%/g, `%25`).replace(/\?/g, `%3F`).replace(/#/g, `%23`)).pathname : e.pathnameBase])
    })), i, n);
    return t && h ? v.createElement(V.Provider, {
        value: {
            location: {
                pathname: `/`,
                search: ``,
                hash: ``,
                state: null,
                key: `default`,
                mask: void 0,
                ...d
            },
            navigationType: `POP`
        }
    }, h) : h
}
function Ct() {
    let e = Rt()
      , t = $e(e) ? `${e.status} ${e.statusText}` : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , r = `rgba(200,200,200, 0.5)`
      , i = {
        padding: `0.5rem`,
        backgroundColor: r
    }
      , a = {
        padding: `2px 4px`,
        backgroundColor: r
    }
      , o = null;
    return console.error(`Error handled by React Router default ErrorBoundary:`, e),
    o = v.createElement(v.Fragment, null, v.createElement(`p`, null, `💿 Hey developer 👋`), v.createElement(`p`, null, `You can provide a way better UX than this when your app throws errors by providing your own `, v.createElement(`code`, {
        style: a
    }, `ErrorBoundary`), ` or`, ` `, v.createElement(`code`, {
        style: a
    }, `errorElement`), ` prop on your route.`)),
    v.createElement(v.Fragment, null, v.createElement(`h2`, null, `Unexpected Application Error!`), v.createElement(`h3`, {
        style: {
            fontStyle: `italic`
        }
    }, t), n ? v.createElement(`pre`, {
        style: i
    }, n) : null, o)
}
var wt = v.createElement(Ct, null)
  , Tt = class extends v.Component {
    constructor(e) {
        super(e),
        this.state = {
            location: e.location,
            revalidation: e.revalidation,
            error: e.error
        }
    }
    static getDerivedStateFromError(e) {
        return {
            error: e
        }
    }
    static getDerivedStateFromProps(e, t) {
        return t.location !== e.location || t.revalidation !== `idle` && e.revalidation === `idle` ? {
            error: e.error,
            location: e.location,
            revalidation: e.revalidation
        } : {
            error: e.error === void 0 ? t.error : e.error,
            location: t.location,
            revalidation: e.revalidation || t.revalidation
        }
    }
    componentDidCatch(e, t) {
        this.props.onError ? this.props.onError(e, t) : console.error(`React Router caught the following error during render`, e)
    }
    render() {
        let e = this.state.error;
        if (this.context && typeof e == `object` && e && `digest`in e && typeof e.digest == `string`) {
            let t = ht(e.digest);
            t && (e = t)
        }
        let t = e === void 0 ? this.props.children : v.createElement(H.Provider, {
            value: this.props.routeContext
        }, v.createElement(ut.Provider, {
            value: e,
            children: this.props.component
        }));
        return this.context ? v.createElement(Dt, {
            error: e
        }, t) : t
    }
}
;
Tt.contextType = at;
var Et = new WeakMap;
function Dt({children: e, error: t}) {
    let {basename: n} = v.useContext(B);
    if (typeof t == `object` && t && `digest`in t && typeof t.digest == `string`) {
        let e = mt(t.digest);
        if (e) {
            let r = Et.get(t);
            if (r)
                throw r;
            let i = nt(e.location, n);
            if (tt && !Et.get(t))
                if (i.isExternal || e.reloadDocument)
                    window.location.href = i.absoluteURL || i.to;
                else {
                    let n = Promise.resolve().then( () => window.__reactRouterDataRouter.navigate(i.to, {
                        replace: e.replace
                    }));
                    throw Et.set(t, n),
                    n
                }
            return v.createElement(`meta`, {
                httpEquiv: `refresh`,
                content: `0;url=${i.absoluteURL || i.to}`
            })
        }
    }
    return e
}
function Ot({routeContext: e, match: t, children: n}) {
    let r = v.useContext(R);
    return r && r.static && r.staticContext && (t.route.errorElement || t.route.ErrorBoundary) && (r.staticContext._deepestRenderedBoundaryId = t.route.id),
    v.createElement(H.Provider, {
        value: e
    }, n)
}
function kt(e, t=[], n) {
    let r = n?.state;
    if (e == null) {
        if (!r)
            return null;
        if (r.errors)
            e = r.matches;
        else if (t.length === 0 && !r.initialized && r.matches.length > 0)
            e = r.matches;
        else
            return null
    }
    let i = e
      , a = r?.errors;
    if (a != null) {
        let e = i.findIndex(e => e.route.id && a?.[e.route.id] !== void 0);
        M(e >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),
        i = i.slice(0, Math.min(i.length, e + 1))
    }
    let o = !1
      , s = -1;
    if (n && r) {
        o = r.renderFallback;
        for (let e = 0; e < i.length; e++) {
            let t = i[e];
            if ((t.route.HydrateFallback || t.route.hydrateFallbackElement) && (s = e),
            t.route.id) {
                let {loaderData: e, errors: a} = r
                  , c = t.route.loader && !e.hasOwnProperty(t.route.id) && (!a || a[t.route.id] === void 0);
                if (t.route.lazy || c) {
                    n.isStatic && (o = !0),
                    i = s >= 0 ? i.slice(0, s + 1) : [i[0]];
                    break
                }
            }
        }
    }
    let c = n?.onError
      , l = r && c ? (e, t) => {
        c(e, {
            location: r.location,
            params: r.matches?.[0]?.params ?? {},
            pattern: et(r.matches),
            errorInfo: t
        })
    }
    : void 0;
    return i.reduceRight( (e, n, c) => {
        let u, d = !1, f = null, p = null;
        r && (u = a && n.route.id ? a[n.route.id] : void 0,
        f = n.route.errorElement || wt,
        o && (s < 0 && c === 0 ? (Vt(`route-fallback`, !1, "No `HydrateFallback` element provided to render during initial hydration"),
        d = !0,
        p = null) : s === c && (d = !0,
        p = n.route.hydrateFallbackElement || null)));
        let m = t.concat(i.slice(0, c + 1))
          , h = () => {
            let t;
            return t = u ? f : d ? p : n.route.Component ? v.createElement(n.route.Component, null) : n.route.element ? n.route.element : e,
            v.createElement(Ot, {
                match: n,
                routeContext: {
                    outlet: e,
                    matches: m,
                    isDataRoute: r != null
                },
                children: t
            })
        }
        ;
        return r && (n.route.ErrorBoundary || n.route.errorElement || c === 0) ? v.createElement(Tt, {
            location: r.location,
            revalidation: r.revalidation,
            component: f,
            error: u,
            children: h(),
            routeContext: {
                outlet: null,
                matches: m,
                isDataRoute: !0
            },
            onError: l
        }) : h()
    }
    , null)
}
function At(e) {
    return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function jt(e) {
    let t = v.useContext(R);
    return M(t, At(e)),
    t
}
function Mt(e) {
    let t = v.useContext(z);
    return M(t, At(e)),
    t
}
function Nt(e) {
    let t = v.useContext(H);
    return M(t, At(e)),
    t
}
function Pt(e) {
    let t = Nt(e)
      , n = t.matches[t.matches.length - 1];
    return M(n.route.id, `${e} can only be used on routes that contain a unique "id"`),
    n.route.id
}
function Ft() {
    return Pt(`useRouteId`)
}
function It() {
    let e = Mt(`useNavigation`);
    return v.useMemo( () => {
        let {matches: t, historyAction: n, ...r} = e.navigation;
        return r
    }
    , [e.navigation])
}
function Lt() {
    let {matches: e, loaderData: t} = Mt(`useMatches`);
    return v.useMemo( () => e.map(e => Se(e, t)), [e, t])
}
function Rt() {
    let e = v.useContext(ut)
      , t = Mt(`useRouteError`)
      , n = Pt(`useRouteError`);
    return e === void 0 ? t.errors?.[n] : e
}
function zt() {
    let {router: e} = jt(`useNavigate`)
      , t = Pt(`useNavigate`)
      , n = v.useRef(!1);
    return vt( () => {
        n.current = !0
    }
    ),
    v.useCallback(async (r, i={}) => {
        N(n.current, _t),
        n.current && (typeof r == `number` ? await e.navigate(r) : await e.navigate(r, {
            fromRouteId: t,
            ...i
        }))
    }
    , [e, t])
}
var Bt = {};
function Vt(e, t, n) {
    !t && !Bt[e] && (Bt[e] = !0,
    N(!1, n))
}
v.useOptimistic,
v.memo(Ht);
function Ht({routes: e, manifest: t, future: n, state: r, isStatic: i, onError: a}) {
    return St(e, void 0, {
        manifest: t,
        state: r,
        isStatic: i,
        onError: a,
        future: n
    })
}
function Ut({basename: e=`/`, children: t=null, location: n, navigationType: r=`POP`, navigator: i, static: a=!1, useTransitions: o}) {
    M(!U(), `You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);
    let s = e.replace(/^\/*/, `/`)
      , c = v.useMemo( () => ({
        basename: s,
        navigator: i,
        static: a,
        useTransitions: o,
        future: {}
    }), [s, i, a, o]);
    typeof n == `string` && (n = F(n));
    let {pathname: l=`/`, search: u=``, hash: d=``, state: f=null, key: p=`default`, mask: m} = n
      , h = v.useMemo( () => {
        let e = I(l, s);
        return e == null ? null : {
            location: {
                pathname: e,
                search: u,
                hash: d,
                state: f,
                key: p,
                mask: m
            },
            navigationType: r
        }
    }
    , [s, l, u, d, f, p, r, m]);
    return N(h != null, `<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),
    h == null ? null : v.createElement(B.Provider, {
        value: c
    }, v.createElement(V.Provider, {
        children: t,
        value: h
    }))
}
v.Component;
var Wt = `get`
  , Gt = `application/x-www-form-urlencoded`;
function Kt(e) {
    return typeof HTMLElement < `u` && e instanceof HTMLElement
}
function qt(e) {
    return Kt(e) && e.tagName.toLowerCase() === `button`
}
function Jt(e) {
    return Kt(e) && e.tagName.toLowerCase() === `form`
}
function Yt(e) {
    return Kt(e) && e.tagName.toLowerCase() === `input`
}
function Xt(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function Zt(e, t) {
    return e.button === 0 && (!t || t === `_self`) && !Xt(e)
}
var Qt = null;
function $t() {
    if (Qt === null)
        try {
            new FormData(document.createElement(`form`),0),
            Qt = !1
        } catch {
            Qt = !0
        }
    return Qt
}
var en = new Set([`application/x-www-form-urlencoded`, `multipart/form-data`, `text/plain`]);
function tn(e) {
    return e != null && !en.has(e) ? (N(!1, `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Gt}"`),
    null) : e
}
function nn(e, t) {
    let n, r, i, a, o;
    if (Jt(e)) {
        let o = e.getAttribute(`action`);
        r = o ? I(o, t) : null,
        n = e.getAttribute(`method`) || Wt,
        i = tn(e.getAttribute(`enctype`)) || Gt,
        a = new FormData(e)
    } else if (qt(e) || Yt(e) && (e.type === `submit` || e.type === `image`)) {
        let o = e.form;
        if (o == null)
            throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);
        let s = e.getAttribute(`formaction`) || o.getAttribute(`action`);
        if (r = s ? I(s, t) : null,
        n = e.getAttribute(`formmethod`) || o.getAttribute(`method`) || Wt,
        i = tn(e.getAttribute(`formenctype`)) || tn(o.getAttribute(`enctype`)) || Gt,
        a = new FormData(o,e),
        !$t()) {
            let {name: t, type: n, value: r} = e;
            if (n === `image`) {
                let e = t ? `${t}.` : ``;
                a.append(`${e}x`, `0`),
                a.append(`${e}y`, `0`)
            } else
                t && a.append(t, r)
        }
    } else if (Kt(e))
        throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);
    else
        n = Wt,
        r = null,
        i = Gt,
        o = e;
    return a && i === `text/plain` && (o = a,
    a = void 0),
    {
        action: r,
        method: n.toLowerCase(),
        encType: i,
        formData: a,
        body: o
    }
}
Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);
var rn = {
    "&": `\\u0026`,
    ">": `\\u003e`,
    "<": `\\u003c`,
    "\u2028": `\\u2028`,
    "\u2029": `\\u2029`
}
  , an = /[&><\u2028\u2029]/g;
function on(e) {
    return e.replace(an, e => rn[e])
}
function sn(e, t) {
    if (e === !1 || e == null)
        throw Error(t)
}
function cn(e, t, n, r) {
    let i = typeof e == `string` ? new URL(e,typeof window > `u` ? `server://singlefetch/` : window.location.origin) : e;
    return n ? i.pathname.endsWith(`/`) ? i.pathname = `${i.pathname}_.${r}` : i.pathname = `${i.pathname}.${r}` : i.pathname === `/` ? i.pathname = `_root.${r}` : t && I(i.pathname, t) === `/` ? i.pathname = `${Je(t)}/_root.${r}` : i.pathname = `${Je(i.pathname)}.${r}`,
    i
}
async function ln(e, t) {
    if (e.id in t)
        return t[e.id];
    try {
        let n = await p( () => import(e.module), []);
        return t[e.id] = n,
        n
    } catch (t) {
        return console.error(`Error loading route module \`${e.module}\`, reloading page...`),
        console.error(t),
        window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
        window.location.reload(),
        new Promise( () => {}
        )
    }
}
function un(e) {
    return e != null && typeof e.page == `string`
}
function dn(e) {
    return e == null ? !1 : e.href == null ? e.rel === `preload` && typeof e.imageSrcSet == `string` && typeof e.imageSizes == `string` : typeof e.rel == `string` && typeof e.href == `string`
}
async function fn(e, t, n) {
    return _n((await Promise.all(e.map(async e => {
        let r = t.routes[e.route.id];
        if (r) {
            let e = await ln(r, n);
            return e.links ? e.links() : []
        }
        return []
    }
    ))).flat(1).filter(dn).filter(e => e.rel === `stylesheet` || e.rel === `preload`).map(e => e.rel === `stylesheet` ? {
        ...e,
        rel: `prefetch`,
        as: `style`
    } : {
        ...e,
        rel: `prefetch`
    }))
}
function pn(e, t, n, r, i, a) {
    let o = (e, t) => n[t] ? e.route.id !== n[t].route.id : !0
      , s = (e, t) => n[t].pathname !== e.pathname || n[t].route.path?.endsWith(`*`) && n[t].params[`*`] !== e.params[`*`];
    return a === `assets` ? t.filter( (e, t) => o(e, t) || s(e, t)) : a === `data` ? t.filter( (t, a) => {
        let c = r.routes[t.route.id];
        if (!c || !c.hasLoader)
            return !1;
        if (o(t, a) || s(t, a))
            return !0;
        if (t.route.shouldRevalidate) {
            let r = t.route.shouldRevalidate({
                currentUrl: new URL(i.pathname + i.search + i.hash,window.origin),
                currentParams: n[0]?.params || {},
                nextUrl: new URL(e,window.origin),
                nextParams: t.params,
                defaultShouldRevalidate: !0
            });
            if (typeof r == `boolean`)
                return r
        }
        return !0
    }
    ) : []
}
function mn(e, t, {includeHydrateFallback: n}={}) {
    return hn(e.map(e => {
        let r = t.routes[e.route.id];
        if (!r)
            return [];
        let i = [r.module];
        return r.clientActionModule && (i = i.concat(r.clientActionModule)),
        r.clientLoaderModule && (i = i.concat(r.clientLoaderModule)),
        n && r.hydrateFallbackModule && (i = i.concat(r.hydrateFallbackModule)),
        r.imports && (i = i.concat(r.imports)),
        i
    }
    ).flat(1))
}
function hn(e) {
    return [...new Set(e)]
}
function gn(e) {
    let t = {}
      , n = Object.keys(e).sort();
    for (let r of n)
        t[r] = e[r];
    return t
}
function _n(e, t) {
    let n = new Set
      , r = new Set(t);
    return e.reduce( (e, i) => {
        if (t && !un(i) && i.as === `script` && i.href && r.has(i.href))
            return e;
        let a = JSON.stringify(gn(i));
        return n.has(a) || (n.add(a),
        e.push({
            key: a,
            link: i
        })),
        e
    }
    , [])
}
function vn() {
    let e = v.useContext(R);
    return sn(e, `You must render this element inside a <DataRouterContext.Provider> element`),
    e
}
function yn() {
    let e = v.useContext(z);
    return sn(e, `You must render this element inside a <DataRouterStateContext.Provider> element`),
    e
}
var bn = v.createContext(void 0);
bn.displayName = `FrameworkContext`;
function xn() {
    let e = v.useContext(bn);
    return sn(e, `You must render this element inside a <HydratedRouter> element`),
    e
}
function Sn(e, t) {
    let n = v.useContext(bn)
      , [r,i] = v.useState(!1)
      , [a,o] = v.useState(!1)
      , {onFocus: s, onBlur: c, onMouseEnter: l, onMouseLeave: u, onTouchStart: d} = t
      , f = v.useRef(null);
    v.useEffect( () => {
        if (e === `render` && o(!0),
        e === `viewport`) {
            let e = new IntersectionObserver(e => {
                e.forEach(e => {
                    o(e.isIntersecting)
                }
                )
            }
            ,{
                threshold: .5
            });
            return f.current && e.observe(f.current),
            () => {
                e.disconnect()
            }
        }
    }
    , [e]),
    v.useEffect( () => {
        if (r) {
            let e = setTimeout( () => {
                o(!0)
            }
            , 100);
            return () => {
                clearTimeout(e)
            }
        }
    }
    , [r]);
    let p = () => {
        i(!0)
    }
      , m = () => {
        i(!1),
        o(!1)
    }
    ;
    return n ? e === `intent` ? [a, f, {
        onFocus: q(s, p),
        onBlur: q(c, m),
        onMouseEnter: q(l, p),
        onMouseLeave: q(u, m),
        onTouchStart: q(d, p)
    }] : [a, f, {}] : [!1, f, {}]
}
function q(e, t) {
    return n => {
        e && e(n),
        n.defaultPrevented || t(n)
    }
}
function Cn({page: e, ...t}) {
    let n = ot()
      , {router: r} = vn()
      , i = v.useMemo( () => be(r.routes, e, r.basename), [r.routes, e, r.basename]);
    return i ? n ? v.createElement(Tn, {
        page: e,
        matches: i,
        ...t
    }) : v.createElement(En, {
        page: e,
        matches: i,
        ...t
    }) : null
}
function wn(e) {
    let {manifest: t, routeModules: n} = xn()
      , [r,i] = v.useState([]);
    return v.useEffect( () => {
        let r = !1;
        return fn(e, t, n).then(e => {
            r || i(e)
        }
        ),
        () => {
            r = !0
        }
    }
    , [e, t, n]),
    r
}
function Tn({page: e, matches: t, ...n}) {
    let r = W()
      , {future: i} = xn()
      , {basename: a} = vn()
      , o = v.useMemo( () => {
        if (e === r.pathname + r.search + r.hash)
            return [];
        let n = cn(e, a, i.unstable_trailingSlashAwareDataRequests, `rsc`)
          , o = !1
          , s = [];
        for (let e of t)
            typeof e.route.shouldRevalidate == `function` ? o = !0 : s.push(e.route.id);
        return o && s.length > 0 && n.searchParams.set(`_routes`, s.join(`,`)),
        [n.pathname + n.search]
    }
    , [a, i.unstable_trailingSlashAwareDataRequests, e, r, t]);
    return v.createElement(v.Fragment, null, o.map(e => v.createElement(`link`, {
        key: e,
        rel: `prefetch`,
        as: `fetch`,
        href: e,
        ...n
    })))
}
function En({page: e, matches: t, ...n}) {
    let r = W()
      , {future: i, manifest: a, routeModules: o} = xn()
      , {basename: s} = vn()
      , {loaderData: c, matches: l} = yn()
      , u = v.useMemo( () => pn(e, t, l, a, r, `data`), [e, t, l, a, r])
      , d = v.useMemo( () => pn(e, t, l, a, r, `assets`), [e, t, l, a, r])
      , f = v.useMemo( () => {
        if (e === r.pathname + r.search + r.hash)
            return [];
        let n = new Set
          , l = !1;
        if (t.forEach(e => {
            let t = a.routes[e.route.id];
            !t || !t.hasLoader || (!u.some(t => t.route.id === e.route.id) && e.route.id in c && o[e.route.id]?.shouldRevalidate || t.hasClientLoader ? l = !0 : n.add(e.route.id))
        }
        ),
        n.size === 0)
            return [];
        let d = cn(e, s, i.unstable_trailingSlashAwareDataRequests, `data`);
        return l && n.size > 0 && d.searchParams.set(`_routes`, t.filter(e => n.has(e.route.id)).map(e => e.route.id).join(`,`)),
        [d.pathname + d.search]
    }
    , [s, i.unstable_trailingSlashAwareDataRequests, c, r, a, u, t, e, o])
      , p = v.useMemo( () => mn(d, a), [d, a])
      , m = wn(d);
    return v.createElement(v.Fragment, null, f.map(e => v.createElement(`link`, {
        key: e,
        rel: `prefetch`,
        as: `fetch`,
        href: e,
        ...n
    })), p.map(e => v.createElement(`link`, {
        key: e,
        rel: `modulepreload`,
        href: e,
        ...n
    })), m.map( ({key: e, link: t}) => v.createElement(`link`, {
        key: e,
        nonce: n.nonce,
        ...t,
        crossOrigin: t.crossOrigin ?? n.crossOrigin
    })))
}
function Dn(...e) {
    return t => {
        e.forEach(e => {
            typeof e == `function` ? e(t) : e != null && (e.current = t)
        }
        )
    }
}
v.Component;
var On = typeof window < `u` && window.document !== void 0 && window.document.createElement !== void 0;
try {
    On && (window.__reactRouterVersion = `7.15.1`)
} catch {}
function kn({basename: e, children: t, useTransitions: n, window: r}) {
    let i = v.useRef();
    i.current ??= me({
        window: r,
        v5Compat: !0
    });
    let a = i.current
      , [o,s] = v.useState({
        action: a.action,
        location: a.location
    })
      , c = v.useCallback(e => {
        n === !1 ? s(e) : v.startTransition( () => s(e))
    }
    , [n]);
    return v.useLayoutEffect( () => a.listen(c), [a, c]),
    v.createElement(Ut, {
        basename: e,
        children: t,
        location: o.location,
        navigationType: o.action,
        navigator: a,
        useTransitions: n
    })
}
function An({basename: e, children: t, history: n, useTransitions: r}) {
    let[i,a] = v.useState({
        action: n.action,
        location: n.location
    })
      , o = v.useCallback(e => {
        r === !1 ? a(e) : v.startTransition( () => a(e))
    }
    , [r]);
    return v.useLayoutEffect( () => n.listen(o), [n, o]),
    v.createElement(Ut, {
        basename: e,
        children: t,
        location: i.location,
        navigationType: i.action,
        navigator: n,
        useTransitions: r
    })
}
An.displayName = `unstable_HistoryRouter`;
var jn = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , J = v.forwardRef(function({onClick: e, discover: t=`render`, prefetch: n=`none`, relative: r, reloadDocument: i, replace: a, mask: o, state: s, target: c, to: l, preventScrollReset: u, viewTransition: d, defaultShouldRevalidate: f, ...p}, m) {
    let {basename: h, navigator: g, useTransitions: _} = v.useContext(B)
      , y = typeof l == `string` && jn.test(l)
      , b = nt(l, h);
    l = b.to;
    let x = gt(l, {
        relative: r
    })
      , S = W()
      , C = null;
    if (o) {
        let e = Ke(o, [], S.mask ? S.mask.pathname : `/`, !0);
        h !== `/` && (e.pathname = e.pathname === `/` ? h : L([h, e.pathname])),
        C = g.createHref(e)
    }
    let[w,T,E] = Sn(n, p)
      , ee = Rn(l, {
        replace: a,
        mask: o,
        state: s,
        target: c,
        preventScrollReset: u,
        relative: r,
        viewTransition: d,
        defaultShouldRevalidate: f,
        useTransitions: _
    });
    function te(t) {
        e && e(t),
        t.defaultPrevented || ee(t)
    }
    let ne = !(b.isExternal || i)
      , D = v.createElement(`a`, {
        ...p,
        ...E,
        href: (ne ? C : void 0) || b.absoluteURL || x,
        onClick: ne ? te : e,
        ref: Dn(m, T),
        target: c,
        "data-discover": !y && t === `render` ? `true` : void 0
    });
    return w && !y ? v.createElement(v.Fragment, null, D, v.createElement(Cn, {
        page: x
    })) : D
});
J.displayName = `Link`;
var Mn = v.forwardRef(function({"aria-current": e=`page`, caseSensitive: t=!1, className: n=``, end: r=!1, style: i, to: a, viewTransition: o, children: s, ...c}, l) {
    let u = K(a, {
        relative: c.relative
    })
      , d = W()
      , f = v.useContext(z)
      , {navigator: p, basename: m} = v.useContext(B)
      , h = f != null && Jn(u) && o === !0
      , g = p.encodeLocation ? p.encodeLocation(u).pathname : u.pathname
      , _ = d.pathname
      , y = f && f.navigation && f.navigation.location ? f.navigation.location.pathname : null;
    t || (_ = _.toLowerCase(),
    y = y ? y.toLowerCase() : null,
    g = g.toLowerCase()),
    y && m && (y = I(y, m) || y);
    let b = g !== `/` && g.endsWith(`/`) ? g.length - 1 : g.length, x = _ === g || !r && _.startsWith(g) && _.charAt(b) === `/`, S = y != null && (y === g || !r && y.startsWith(g) && y.charAt(g.length) === `/`), C = {
        isActive: x,
        isPending: S,
        isTransitioning: h
    }, w = x ? e : void 0, T;
    T = typeof n == `function` ? n(C) : [n, x ? `active` : null, S ? `pending` : null, h ? `transitioning` : null].filter(Boolean).join(` `);
    let E = typeof i == `function` ? i(C) : i;
    return v.createElement(J, {
        ...c,
        "aria-current": w,
        className: T,
        ref: l,
        style: E,
        to: a,
        viewTransition: o
    }, typeof s == `function` ? s(C) : s)
});
Mn.displayName = `NavLink`;
var Nn = v.forwardRef( ({discover: e=`render`, fetcherKey: t, navigate: n, reloadDocument: r, replace: i, state: a, method: o=Wt, action: s, onSubmit: c, relative: l, preventScrollReset: u, viewTransition: d, defaultShouldRevalidate: f, ...p}, m) => {
    let {useTransitions: h} = v.useContext(B)
      , g = Vn()
      , _ = Hn(s, {
        relative: l
    })
      , y = o.toLowerCase() === `get` ? `get` : `post`
      , b = typeof s == `string` && jn.test(s);
    return v.createElement(`form`, {
        ref: m,
        method: y,
        action: _,
        onSubmit: r ? c : e => {
            if (c && c(e),
            e.defaultPrevented)
                return;
            e.preventDefault();
            let r = e.nativeEvent.submitter
              , s = r?.getAttribute(`formmethod`) || o
              , p = () => g(r || e.currentTarget, {
                fetcherKey: t,
                method: s,
                navigate: n,
                replace: i,
                state: a,
                relative: l,
                preventScrollReset: u,
                viewTransition: d,
                defaultShouldRevalidate: f
            });
            h && n !== !1 ? v.startTransition( () => p()) : p()
        }
        ,
        ...p,
        "data-discover": !b && e === `render` ? `true` : void 0
    })
}
);
Nn.displayName = `Form`;
function Pn({getKey: e, storageKey: t, ...n}) {
    let r = v.useContext(bn)
      , {basename: i} = v.useContext(B)
      , a = W()
      , o = Lt();
    Kn({
        getKey: e,
        storageKey: t
    });
    let s = v.useMemo( () => {
        if (!r || !e)
            return null;
        let t = Gn(a, o, i, e);
        return t === a.key ? null : t
    }
    , []);
    if (!r || r.isSpaMode)
        return null;
    let c = ( (e, t) => {
        if (!window.history.state || !window.history.state.key) {
            let e = Math.random().toString(32).slice(2);
            window.history.replaceState({
                key: e
            }, ``)
        }
        try {
            let n = JSON.parse(sessionStorage.getItem(e) || `{}`)[t || window.history.state.key];
            typeof n == `number` && window.scrollTo(0, n)
        } catch (t) {
            console.error(t),
            sessionStorage.removeItem(e)
        }
    }
    ).toString();
    return v.createElement(`script`, {
        ...n,
        suppressHydrationWarning: !0,
        dangerouslySetInnerHTML: {
            __html: `(${c})(${on(JSON.stringify(t || Un))}, ${on(JSON.stringify(s))})`
        }
    })
}
Pn.displayName = `ScrollRestoration`;
function Fn(e) {
    return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function In(e) {
    let t = v.useContext(R);
    return M(t, Fn(e)),
    t
}
function Ln(e) {
    let t = v.useContext(z);
    return M(t, Fn(e)),
    t
}
function Rn(e, {target: t, replace: n, mask: r, state: i, preventScrollReset: a, relative: o, viewTransition: s, defaultShouldRevalidate: c, useTransitions: l}={}) {
    let u = G()
      , d = W()
      , f = K(e, {
        relative: o
    });
    return v.useCallback(p => {
        if (Zt(p, t)) {
            p.preventDefault();
            let t = n === void 0 ? P(d) === P(f) : n
              , m = () => u(e, {
                replace: t,
                mask: r,
                state: i,
                preventScrollReset: a,
                relative: o,
                viewTransition: s,
                defaultShouldRevalidate: c
            });
            l ? v.startTransition( () => m()) : m()
        }
    }
    , [d, u, f, n, r, i, t, e, a, o, s, c, l])
}
var zn = 0
  , Bn = () => `__${String(++zn)}__`;
function Vn() {
    let {router: e} = In(`useSubmit`)
      , {basename: t} = v.useContext(B)
      , n = Ft()
      , r = e.fetch
      , i = e.navigate;
    return v.useCallback(async (e, a={}) => {
        let {action: o, method: s, encType: c, formData: l, body: u} = nn(e, t);
        a.navigate === !1 ? await r(a.fetcherKey || Bn(), n, a.action || o, {
            defaultShouldRevalidate: a.defaultShouldRevalidate,
            preventScrollReset: a.preventScrollReset,
            formData: l,
            body: u,
            formMethod: a.method || s,
            formEncType: a.encType || c,
            flushSync: a.flushSync
        }) : await i(a.action || o, {
            defaultShouldRevalidate: a.defaultShouldRevalidate,
            preventScrollReset: a.preventScrollReset,
            formData: l,
            body: u,
            formMethod: a.method || s,
            formEncType: a.encType || c,
            replace: a.replace,
            state: a.state,
            fromRouteId: n,
            flushSync: a.flushSync,
            viewTransition: a.viewTransition
        })
    }
    , [r, i, t, n])
}
function Hn(e, {relative: t}={}) {
    let {basename: n} = v.useContext(B)
      , r = v.useContext(H);
    M(r, `useFormAction must be used inside a RouteContext`);
    let[i] = r.matches.slice(-1)
      , a = {
        ...K(e || `.`, {
            relative: t
        })
    }
      , o = W();
    if (e == null) {
        a.search = o.search;
        let e = new URLSearchParams(a.search)
          , t = e.getAll(`index`);
        if (t.some(e => e === ``)) {
            e.delete(`index`),
            t.filter(e => e).forEach(t => e.append(`index`, t));
            let n = e.toString();
            a.search = n ? `?${n}` : ``
        }
    }
    return (!e || e === `.`) && i.route.index && (a.search = a.search ? a.search.replace(/^\?/, `?index&`) : `?index`),
    n !== `/` && (a.pathname = a.pathname === `/` ? n : L([n, a.pathname])),
    P(a)
}
var Un = `react-router-scroll-positions`
  , Wn = {};
function Gn(e, t, n, r) {
    let i = null;
    return r && (i = r(n === `/` ? e : {
        ...e,
        pathname: I(e.pathname, n) || e.pathname
    }, t)),
    i ??= e.key,
    i
}
function Kn({getKey: e, storageKey: t}={}) {
    let {router: n} = In(`useScrollRestoration`)
      , {restoreScrollPosition: r, preventScrollReset: i} = Ln(`useScrollRestoration`)
      , {basename: a} = v.useContext(B)
      , o = W()
      , s = Lt()
      , c = It();
    v.useEffect( () => (window.history.scrollRestoration = `manual`,
    () => {
        window.history.scrollRestoration = `auto`
    }
    ), []),
    qn(v.useCallback( () => {
        if (c.state === `idle`) {
            let t = Gn(o, s, a, e);
            Wn[t] = window.scrollY
        }
        try {
            sessionStorage.setItem(t || Un, JSON.stringify(Wn))
        } catch (e) {
            N(!1, `Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`)
        }
        window.history.scrollRestoration = `auto`
    }
    , [c.state, e, a, o, s, t])),
    typeof document < `u` && (v.useLayoutEffect( () => {
        try {
            let e = sessionStorage.getItem(t || Un);
            e && (Wn = JSON.parse(e))
        } catch {}
    }
    , [t]),
    v.useLayoutEffect( () => {
        let t = n?.enableScrollRestoration(Wn, () => window.scrollY, e ? (t, n) => Gn(t, n, a, e) : void 0);
        return () => t && t()
    }
    , [n, a, e]),
    v.useLayoutEffect( () => {
        if (r !== !1) {
            if (typeof r == `number`) {
                window.scrollTo(0, r);
                return
            }
            try {
                if (o.hash) {
                    let e = document.getElementById(decodeURIComponent(o.hash.slice(1)));
                    if (e) {
                        e.scrollIntoView();
                        return
                    }
                }
            } catch {
                N(!1, `"${o.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)
            }
            i !== !0 && window.scrollTo(0, 0)
        }
    }
    , [o, r, i]))
}
function qn(e, t) {
    let {capture: n} = t || {};
    v.useEffect( () => {
        let t = n == null ? void 0 : {
            capture: n
        };
        return window.addEventListener(`pagehide`, e, t),
        () => {
            window.removeEventListener(`pagehide`, e, t)
        }
    }
    , [e, n])
}
function Jn(e, {relative: t}={}) {
    let n = v.useContext(st);
    M(n != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
    let {basename: r} = In(`useViewTransitionState`)
      , i = K(e, {
        relative: t
    });
    if (!n.isTransitioning)
        return !1;
    let a = I(n.currentLocation.pathname, r) || n.currentLocation.pathname
      , o = I(n.nextLocation.pathname, r) || n.nextLocation.pathname;
    return Le(i.pathname, o) != null || Le(i.pathname, a) != null
}
var Yn = e => e.replace(/([a-z0-9])([A-Z])/g, `$1-$2`).toLowerCase()
  , Xn = e => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) => n ? n.toUpperCase() : t.toLowerCase())
  , Zn = e => {
    let t = Xn(e);
    return t.charAt(0).toUpperCase() + t.slice(1)
}
  , Qn = (...e) => e.filter( (e, t, n) => !!e && e.trim() !== `` && n.indexOf(e) === t).join(` `).trim()
  , $n = e => {
    for (let t in e)
        if (t.startsWith(`aria-`) || t === `role` || t === `title`)
            return !0
}
  , er = {
    xmlns: `http://www.w3.org/2000/svg`,
    width: 24,
    height: 24,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: 2,
    strokeLinecap: `round`,
    strokeLinejoin: `round`
}
  , tr = (0,
v.forwardRef)( ({color: e=`currentColor`, size: t=24, strokeWidth: n=2, absoluteStrokeWidth: r, className: i=``, children: a, iconNode: o, ...s}, c) => (0,
v.createElement)(`svg`, {
    ref: c,
    ...er,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: r ? Number(n) * 24 / Number(t) : n,
    className: Qn(`lucide`, i),
    ...!a && !$n(s) && {
        "aria-hidden": `true`
    },
    ...s
}, [...o.map( ([e,t]) => (0,
v.createElement)(e, t)), ...Array.isArray(a) ? a : [a]]))
  , Y = (e, t) => {
    let n = (0,
    v.forwardRef)( ({className: n, ...r}, i) => (0,
    v.createElement)(tr, {
        ref: i,
        iconNode: t,
        className: Qn(`lucide-${Yn(Zn(e))}`, `lucide-${e}`, n),
        ...r
    }));
    return n.displayName = Zn(e),
    n
}
  , nr = Y(`arrow-right`, [[`path`, {
    d: `M5 12h14`,
    key: `1ays0h`
}], [`path`, {
    d: `m12 5 7 7-7 7`,
    key: `xquz4c`
}]])
  , rr = Y(`check`, [[`path`, {
    d: `M20 6 9 17l-5-5`,
    key: `1gmf2c`
}]])
  , ir = Y(`chef-hat`, [[`path`, {
    d: `M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z`,
    key: `1qvrer`
}], [`path`, {
    d: `M6 17h12`,
    key: `1jwigz`
}]])
  , ar = Y(`chevron-down`, [[`path`, {
    d: `m6 9 6 6 6-6`,
    key: `qrunsl`
}]])
  , or = Y(`circle-alert`, [[`circle`, {
    cx: `12`,
    cy: `12`,
    r: `10`,
    key: `1mglay`
}], [`line`, {
    x1: `12`,
    x2: `12`,
    y1: `8`,
    y2: `12`,
    key: `1pkeuh`
}], [`line`, {
    x1: `12`,
    x2: `12.01`,
    y1: `16`,
    y2: `16`,
    key: `4dfq90`
}]])
  , sr = Y(`circle-check-big`, [[`path`, {
    d: `M21.801 10A10 10 0 1 1 17 3.335`,
    key: `yps3ct`
}], [`path`, {
    d: `m9 11 3 3L22 4`,
    key: `1pflzl`
}]])
  , cr = Y(`clipboard-list`, [[`rect`, {
    width: `8`,
    height: `4`,
    x: `8`,
    y: `2`,
    rx: `1`,
    ry: `1`,
    key: `tgr4d6`
}], [`path`, {
    d: `M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2`,
    key: `116196`
}], [`path`, {
    d: `M12 11h4`,
    key: `1jrz19`
}], [`path`, {
    d: `M12 16h4`,
    key: `n85exb`
}], [`path`, {
    d: `M8 11h.01`,
    key: `1dfujw`
}], [`path`, {
    d: `M8 16h.01`,
    key: `18s6g9`
}]])
  , lr = Y(`clock`, [[`path`, {
    d: `M12 6v6l4 2`,
    key: `mmk7yg`
}], [`circle`, {
    cx: `12`,
    cy: `12`,
    r: `10`,
    key: `1mglay`
}]])
  , ur = Y(`credit-card`, [[`rect`, {
    width: `20`,
    height: `14`,
    x: `2`,
    y: `5`,
    rx: `2`,
    key: `ynyp8z`
}], [`line`, {
    x1: `2`,
    x2: `22`,
    y1: `10`,
    y2: `10`,
    key: `1b3vmo`
}]])
  , dr = Y(`dollar-sign`, [[`line`, {
    x1: `12`,
    x2: `12`,
    y1: `2`,
    y2: `22`,
    key: `7eqyqh`
}], [`path`, {
    d: `M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6`,
    key: `1b0p4s`
}]])
  , fr = Y(`globe`, [[`circle`, {
    cx: `12`,
    cy: `12`,
    r: `10`,
    key: `1mglay`
}], [`path`, {
    d: `M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20`,
    key: `13o1zl`
}], [`path`, {
    d: `M2 12h20`,
    key: `9i4pu4`
}]])
  , pr = Y(`house`, [[`path`, {
    d: `M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8`,
    key: `5wwlr5`
}], [`path`, {
    d: `M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z`,
    key: `1d0kgt`
}]])
  , mr = Y(`layers`, [[`path`, {
    d: `M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z`,
    key: `zw3jo`
}], [`path`, {
    d: `M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12`,
    key: `1wduqc`
}], [`path`, {
    d: `M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17`,
    key: `kqbvx6`
}]])
  , hr = Y(`map-pin`, [[`path`, {
    d: `M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0`,
    key: `1r0f0z`
}], [`circle`, {
    cx: `12`,
    cy: `10`,
    r: `3`,
    key: `ilqhr7`
}]])
  , gr = Y(`message-square`, [[`path`, {
    d: `M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z`,
    key: `18887p`
}]])
  , _r = Y(`minus`, [[`path`, {
    d: `M5 12h14`,
    key: `1ays0h`
}]])
  , vr = Y(`package`, [[`path`, {
    d: `M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z`,
    key: `1a0edw`
}], [`path`, {
    d: `M12 22V12`,
    key: `d0xqtd`
}], [`polyline`, {
    points: `3.29 7 12 12 20.71 7`,
    key: `ousv84`
}], [`path`, {
    d: `m7.5 4.27 9 5.15`,
    key: `1c824w`
}]])
  , yr = Y(`pencil`, [[`path`, {
    d: `M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z`,
    key: `1a8usu`
}], [`path`, {
    d: `m15 5 4 4`,
    key: `1mk7zo`
}]])
  , br = Y(`phone`, [[`path`, {
    d: `M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384`,
    key: `9njp5v`
}]])
  , xr = Y(`plus`, [[`path`, {
    d: `M5 12h14`,
    key: `1ays0h`
}], [`path`, {
    d: `M12 5v14`,
    key: `s699le`
}]])
  , Sr = Y(`search`, [[`path`, {
    d: `m21 21-4.34-4.34`,
    key: `14j7rj`
}], [`circle`, {
    cx: `11`,
    cy: `11`,
    r: `8`,
    key: `4ej97u`
}]])
  , Cr = Y(`send`, [[`path`, {
    d: `M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z`,
    key: `1ffxy3`
}], [`path`, {
    d: `m21.854 2.147-10.94 10.939`,
    key: `12cjpa`
}]])
  , wr = Y(`shopping-bag`, [[`path`, {
    d: `M16 10a4 4 0 0 1-8 0`,
    key: `1ltviw`
}], [`path`, {
    d: `M3.103 6.034h17.794`,
    key: `awc11p`
}], [`path`, {
    d: `M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z`,
    key: `o988cm`
}]])
  , Tr = Y(`shopping-cart`, [[`circle`, {
    cx: `8`,
    cy: `21`,
    r: `1`,
    key: `jimo8o`
}], [`circle`, {
    cx: `19`,
    cy: `21`,
    r: `1`,
    key: `13723u`
}], [`path`, {
    d: `M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12`,
    key: `9zh506`
}]])
  , Er = Y(`trash-2`, [[`path`, {
    d: `M10 11v6`,
    key: `nco0om`
}], [`path`, {
    d: `M14 11v6`,
    key: `outv1u`
}], [`path`, {
    d: `M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`,
    key: `miytrc`
}], [`path`, {
    d: `M3 6h18`,
    key: `d0wm0j`
}], [`path`, {
    d: `M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`,
    key: `e791ji`
}]])
  , Dr = Y(`trending-up`, [[`path`, {
    d: `M16 7h6v6`,
    key: `box55l`
}], [`path`, {
    d: `m22 7-8.5 8.5-5-5L2 17`,
    key: `1t1m79`
}]])
  , Or = Y(`truck`, [[`path`, {
    d: `M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2`,
    key: `wrbu53`
}], [`path`, {
    d: `M15 18H9`,
    key: `1lyqi6`
}], [`path`, {
    d: `M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14`,
    key: `lysw3i`
}], [`circle`, {
    cx: `17`,
    cy: `18`,
    r: `2`,
    key: `332jqn`
}], [`circle`, {
    cx: `7`,
    cy: `18`,
    r: `2`,
    key: `19iecd`
}]])
  , kr = Y(`user`, [[`path`, {
    d: `M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2`,
    key: `975kel`
}], [`circle`, {
    cx: `12`,
    cy: `7`,
    r: `4`,
    key: `17ys0d`
}]])
  , Ar = Y(`users`, [[`path`, {
    d: `M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`,
    key: `1yyitq`
}], [`path`, {
    d: `M16 3.128a4 4 0 0 1 0 7.744`,
    key: `16gr8j`
}], [`path`, {
    d: `M22 21v-2a4 4 0 0 0-3-3.87`,
    key: `kshegd`
}], [`circle`, {
    cx: `9`,
    cy: `7`,
    r: `4`,
    key: `nufk8`
}]])
  , jr = Y(`x`, [[`path`, {
    d: `M18 6 6 18`,
    key: `1bl5f8`
}], [`path`, {
    d: `m6 6 12 12`,
    key: `d8bk6v`
}]])
  , X = l(_(), 1);
function Mr() {
    let {t: e, i18n: t} = j(`common`);
    return (0,
    X.jsx)(`div`, {
        className: `min-h-screen bg-[#0a0a0f] text-white flex items-center justify-center px-4`,
        dir: t.dir(),
        children: (0,
        X.jsxs)(`div`, {
            className: `text-center`,
            children: [(0,
            X.jsx)(`h1`, {
                className: `text-8xl md:text-9xl font-black text-[#9d7bff]/20 mb-4`,
                children: `404`
            }), (0,
            X.jsx)(`h2`, {
                className: `text-2xl md:text-3xl font-bold mb-3`,
                children: e(`notFound`)
            }), (0,
            X.jsx)(`p`, {
                className: `text-gray-400 mb-8`,
                children: e(`pageNotFoundDesc`)
            }), (0,
            X.jsxs)(J, {
                to: `/`,
                className: `inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#9d7bff] text-white font-bold hover:bg-[#b79fff] transition-colors shadow-[0_0_20px_rgba(157,123,255,0.3)]`,
                children: [(0,
                X.jsx)(pr, {
                    size: 18
                }), e(`goHome`)]
            })]
        })
    })
}
var Nr = [{
    code: `en`,
    label: `EN`,
    name: `English`
}, {
    code: `tr`,
    label: `TR`,
    name: `Türkçe`
}, {
    code: `ar`,
    label: `AR`,
    name: `العربية`
}];
function Pr() {
    let {t: e, i18n: t} = j()
      , [n,r] = (0,
    v.useState)(!1)
      , i = (0,
    v.useRef)(null);
    (0,
    v.useEffect)( () => {
        function e(e) {
            i.current && !i.current.contains(e.target) && r(!1)
        }
        return document.addEventListener(`mousedown`, e),
        () => document.removeEventListener(`mousedown`, e)
    }
    , []);
    let a = Nr.find(e => e.code === t.language) || Nr[0]
      , o = e => {
        t.changeLanguage(e),
        r(!1)
    }
    ;
    return (0,
    X.jsx)(`header`, {
        className: `fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/[0.06]`,
        children: (0,
        X.jsxs)(`div`, {
            className: `w-full px-4 md:px-8 lg:px-12 py-4 flex items-center justify-between`,
            children: [(0,
            X.jsxs)(J, {
                to: `/`,
                className: `flex items-center gap-3 group`,
                children: [(0,
                X.jsx)(`div`, {
                    className: `w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#9d7bff]/20 border border-[#9d7bff]/30 flex items-center justify-center shadow-[0_0_15px_rgba(157,123,255,0.2)] group-hover:shadow-[0_0_25px_rgba(157,123,255,0.35)] transition-all duration-300`,
                    children: (0,
                    X.jsx)(`div`, {
                        className: `w-5 h-5 md:w-6 md:h-6 flex items-center justify-center`,
                        children: (0,
                        X.jsx)(`i`, {
                            className: `ri-restaurant-2-line text-[#b79fff] text-lg md:text-xl`
                        })
                    })
                }), (0,
                X.jsxs)(`div`, {
                    className: `hidden sm:flex flex-col`,
                    children: [(0,
                    X.jsx)(`span`, {
                        className: `text-white font-bold text-base md:text-lg tracking-tight font-sans`,
                        children: e(`brandName`)
                    }), (0,
                    X.jsx)(`span`, {
                        className: `text-gray-500 text-[11px]`,
                        children: e(`brandTagline`)
                    })]
                })]
            }), (0,
            X.jsxs)(`div`, {
                className: `flex items-center gap-3`,
                children: [(0,
                X.jsxs)(`div`, {
                    className: `relative`,
                    ref: i,
                    children: [(0,
                    X.jsxs)(`button`, {
                        onClick: () => r(!n),
                        className: `flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/[0.04] border border-white/[0.08] hover:border-[#9d7bff]/30 hover:bg-white/[0.06] transition-all duration-300 cursor-pointer`,
                        children: [(0,
                        X.jsx)(`div`, {
                            className: `w-4 h-4 flex items-center justify-center`,
                            children: (0,
                            X.jsx)(fr, {
                                size: 15,
                                className: `text-[#9d7bff]`
                            })
                        }), (0,
                        X.jsx)(`span`, {
                            className: `text-white text-sm font-medium`,
                            children: a.label
                        }), (0,
                        X.jsx)(`div`, {
                            className: `w-4 h-4 flex items-center justify-center`,
                            children: (0,
                            X.jsx)(ar, {
                                size: 14,
                                className: `text-gray-400 transition-transform duration-200 ${n ? `rotate-180` : ``}`
                            })
                        })]
                    }), n && (0,
                    X.jsx)(`div`, {
                        className: `absolute top-full mt-2 right-0 min-w-[140px] bg-[#12121a] border border-white/[0.08] rounded-xl shadow-2xl overflow-hidden z-50 py-1`,
                        children: Nr.map(e => (0,
                        X.jsxs)(`button`, {
                            onClick: () => o(e.code),
                            className: `w-full text-left px-4 py-2.5 text-sm transition-colors cursor-pointer flex items-center gap-2 ${t.language === e.code ? `text-[#9d7bff] bg-[#9d7bff]/10` : `text-gray-300 hover:bg-white/[0.04] hover:text-white`}`,
                            children: [(0,
                            X.jsx)(`div`, {
                                className: `w-4 h-4 flex items-center justify-center`,
                                children: (0,
                                X.jsx)(`i`, {
                                    className: `${t.language === e.code ? `ri-check-line text-[#9d7bff]` : `ri-earth-line text-gray-500`} text-xs`
                                })
                            }), (0,
                            X.jsx)(`span`, {
                                children: e.name
                            }), (0,
                            X.jsx)(`span`, {
                                className: `text-xs opacity-60 ml-auto`,
                                children: e.label
                            })]
                        }, e.code))
                    })]
                }), (0,
                X.jsxs)(J, {
                    to: `/track`,
                    className: `flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.04] border border-white/[0.08] hover:border-[#9d7bff]/30 hover:bg-white/[0.06] transition-all duration-300`,
                    children: [(0,
                    X.jsx)(`div`, {
                        className: `w-4 h-4 flex items-center justify-center`,
                        children: (0,
                        X.jsx)(`i`, {
                            className: `ri-map-pin-line text-[#9d7bff] text-sm`
                        })
                    }), (0,
                    X.jsx)(`span`, {
                        className: `text-white text-sm font-medium whitespace-nowrap hidden sm:inline`,
                        children: e(`trackOrder`)
                    })]
                })]
            })]
        })
    })
}
function Fr() {
    let {t: e} = j();
    return (0,
    X.jsx)(`footer`, {
        className: `w-full border-t border-white/[0.06] bg-[#0a0a0f] mt-20`,
        children: (0,
        X.jsx)(`div`, {
            className: `w-full px-4 md:px-8 lg:px-12 py-10`,
            children: (0,
            X.jsxs)(`div`, {
                className: `flex flex-col sm:flex-row items-center justify-between gap-6`,
                children: [(0,
                X.jsxs)(`div`, {
                    className: `flex items-center gap-3`,
                    children: [(0,
                    X.jsx)(`div`, {
                        className: `w-9 h-9 rounded-lg bg-[#9d7bff]/20 border border-[#9d7bff]/30 flex items-center justify-center`,
                        children: (0,
                        X.jsx)(`div`, {
                            className: `w-4 h-4 flex items-center justify-center`,
                            children: (0,
                            X.jsx)(`i`, {
                                className: `ri-restaurant-2-line text-[#9d7bff] text-sm`
                            })
                        })
                    }), (0,
                    X.jsx)(`span`, {
                        className: `text-white font-bold font-sans`,
                        children: `Foodi`
                    })]
                }), (0,
                X.jsxs)(`div`, {
                    className: `flex items-center gap-6 text-gray-500 text-sm`,
                    children: [(0,
                    X.jsxs)(`div`, {
                        className: `flex items-center gap-2`,
                        children: [(0,
                        X.jsx)(`div`, {
                            className: `w-4 h-4 flex items-center justify-center`,
                            children: (0,
                            X.jsx)(`i`, {
                                className: `ri-mail-line text-gray-500`
                            })
                        }), (0,
                        X.jsx)(`span`, {
                            children: `support@foodi.com`
                        })]
                    }), (0,
                    X.jsxs)(`div`, {
                        className: `flex items-center gap-2`,
                        children: [(0,
                        X.jsx)(`div`, {
                            className: `w-4 h-4 flex items-center justify-center`,
                            children: (0,
                            X.jsx)(`i`, {
                                className: `ri-phone-line text-gray-500`
                            })
                        }), (0,
                        X.jsx)(`span`, {
                            children: `+965 1234 5678`
                        })]
                    })]
                }), (0,
                X.jsx)(`p`, {
                    className: `text-gray-500 text-sm`,
                    children: e(`footerRights`)
                })]
            })
        })
    })
}
var Z = [{
    id: `1`,
    name: {
        en: `Burger King`,
        tr: `Burger King`,
        ar: `برجر كينغ`
    },
    image: `https://readdy.ai/api/search-image?query=Premium%20dark%20burger%20restaurant%20food%20photography%2C%20juicy%20gourmet%20burger%20with%20dramatic%20lighting%2C%20black%20background%2C%20neon%20purple%20accent%20lights%2C%20professional%20food%20styling%2C%20steam%20rising%2C%20high%20end%20restaurant%20aesthetic&width=600&height=400&seq=1&orientation=landscape`,
    rating: 4.8,
    deliveryTime: `25-35`,
    category: `burger`,
    isOpen: !0
}, {
    id: `2`,
    name: {
        en: `Pizza Hut`,
        tr: `Pizza Hut`,
        ar: `بيتزا هت`
    },
    image: `https://readdy.ai/api/search-image?query=Artisan%20pizza%20photography%20on%20dark%20background%2C%20freshly%20baked%20pizza%20with%20melted%20cheese%20and%20pepperoni%2C%20dramatic%20lighting%2C%20neon%20purple%20glow%2C%20professional%20food%20photography%2C%20black%20stone%20surface&width=600&height=400&seq=2&orientation=landscape`,
    rating: 4.6,
    deliveryTime: `30-40`,
    category: `pizza`,
    isOpen: !0
}, {
    id: `3`,
    name: {
        en: `Shawarma Al-Sham`,
        tr: `Şam Döner`,
        ar: `شاورما الشام`
    },
    image: `https://readdy.ai/api/search-image?query=Premium%20shawarma%20platter%20photography%2C%20sliced%20grilled%20meat%20with%20fresh%20vegetables%20and%20tahini%20sauce%2C%20dark%20elegant%20background%2C%20neon%20purple%20accent%20lighting%2C%20professional%20middle%20eastern%20food%20styling&width=600&height=400&seq=3&orientation=landscape`,
    rating: 4.9,
    deliveryTime: `20-30`,
    category: `shawarma`,
    isOpen: !0
}, {
    id: `4`,
    name: {
        en: `Sushi Master`,
        tr: `Sushi Ustası`,
        ar: `سوشي ماستر`
    },
    image: `https://readdy.ai/api/search-image?query=Premium%20sushi%20platter%20photography%20on%20black%20background%2C%20fresh%20salmon%20and%20tuna%20sushi%20rolls%20with%20ginger%20and%20wasabi%2C%20dramatic%20lighting%2C%20neon%20purple%20glow%2C%20high%20end%20japanese%20restaurant%20aesthetic&width=600&height=400&seq=4&orientation=landscape`,
    rating: 4.7,
    deliveryTime: `35-45`,
    category: `sushi`,
    isOpen: !0
}, {
    id: `5`,
    name: {
        en: `Cafe Latte`,
        tr: `Cafe Latte`,
        ar: `كافيه لاتيه`
    },
    image: `https://readdy.ai/api/search-image?query=Premium%20cafe%20food%20photography%2C%20beautiful%20latte%20art%20with%20croissant%20and%20breakfast%20plate%20on%20dark%20wooden%20table%2C%20neon%20purple%20ambient%20lighting%2C%20dramatic%20contrast%2C%20modern%20cafe%20aesthetic%2C%20black%20background&width=600&height=400&seq=5&orientation=landscape`,
    rating: 4.5,
    deliveryTime: `15-25`,
    category: `cafe`,
    isOpen: !0
}, {
    id: `6`,
    name: {
        en: `Mashawi Al-Sultan`,
        tr: `Sultan Izgara`,
        ar: `مشاوي السلطان`
    },
    image: `https://readdy.ai/api/search-image?query=Premium%20grilled%20meat%20platter%20photography%2C%20mixed%20grill%20with%20kebabs%20and%20lamb%20chops%20on%20dark%20slate%20plate%2C%20smoke%20rising%2C%20neon%20purple%20accent%20lights%2C%20dramatic%20lighting%2C%20middle%20eastern%20restaurant%20aesthetic&width=600&height=400&seq=6&orientation=landscape`,
    rating: 4.8,
    deliveryTime: `30-40`,
    category: `grill`,
    isOpen: !0
}];
function Q(e, t) {
    return t === `ar` && e.ar ? e.ar : t === `tr` && e.tr ? e.tr : e.en
}
var Ir = {
    burger: `ri-restaurant-line`,
    pizza: `ri-restaurant-2-line`,
    shawarma: `ri-fire-line`,
    sushi: `ri-restaurant-line`,
    cafe: `ri-cup-line`,
    grill: `ri-fire-line`,
    sides: `ri-restaurant-2-line`,
    drinks: `ri-cup-line`,
    chicken_wings: `ri-fire-line`,
    bowls: `ri-restaurant-line`,
    noodles: `ri-restaurant-2-line`,
    coffee: `ri-cup-line`,
    bakery: `ri-cake-3-line`,
    breakfast: `ri-sun-line`,
    kebab: `ri-fire-line`,
    salads: `ri-leaf-line`
};
function Lr({restaurant: e}) {
    let {t, i18n: n} = j()
      , r = n.language
      , i = Q(e.name, r)
      , a = Ir[e.category] || `ri-restaurant-line`;
    return (0,
    X.jsxs)(`div`, {
        className: `group relative bg-[#12121a] rounded-2xl overflow-hidden border border-white/[0.06] hover:border-[#9d7bff]/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(157,123,255,0.1)] hover:-translate-y-1`,
        children: [(0,
        X.jsxs)(`div`, {
            className: `relative h-48 md:h-52 overflow-hidden`,
            children: [(0,
            X.jsx)(`img`, {
                src: e.image,
                alt: i,
                className: `w-full h-full object-cover transition-transform duration-700 group-hover:scale-105`,
                loading: `lazy`
            }), (0,
            X.jsx)(`div`, {
                className: `absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/80 via-transparent to-transparent`
            }), (0,
            X.jsxs)(`div`, {
                className: `absolute top-3 right-3 px-3 py-1.5 rounded-full bg-[#0a0a0f]/70 backdrop-blur-sm border border-white/[0.08] text-white text-xs font-medium flex items-center gap-1.5`,
                children: [(0,
                X.jsx)(`div`, {
                    className: `w-3.5 h-3.5 flex items-center justify-center`,
                    children: (0,
                    X.jsx)(`i`, {
                        className: `${a} text-[#9d7bff]`
                    })
                }), t(`category_` + e.category)]
            }), e.isOpen && (0,
            X.jsxs)(`div`, {
                className: `absolute top-3 left-3 px-3 py-1.5 rounded-full bg-[#9d7bff]/20 backdrop-blur-sm border border-[#9d7bff]/30 text-[#c4aaff] text-xs font-medium flex items-center gap-1.5`,
                children: [(0,
                X.jsx)(`div`, {
                    className: `w-3.5 h-3.5 flex items-center justify-center`,
                    children: (0,
                    X.jsx)(`i`, {
                        className: `ri-checkbox-circle-line text-[#b79fff] text-xs`
                    })
                }), (0,
                X.jsx)(`span`, {
                    className: `w-1.5 h-1.5 rounded-full bg-[#b79fff] animate-pulse`
                }), t(`restaurantOpen`)]
            })]
        }), (0,
        X.jsxs)(`div`, {
            className: `p-4 md:p-5`,
            children: [(0,
            X.jsx)(`h3`, {
                className: `text-white font-bold text-lg mb-2 group-hover:text-[#c4aaff] transition-colors duration-300`,
                children: i
            }), (0,
            X.jsxs)(`div`, {
                className: `flex items-center justify-between mb-4`,
                children: [(0,
                X.jsxs)(`div`, {
                    className: `flex items-center gap-1.5`,
                    children: [(0,
                    X.jsx)(`div`, {
                        className: `w-4 h-4 flex items-center justify-center`,
                        children: (0,
                        X.jsx)(`i`, {
                            className: `ri-star-fill text-amber-400 text-xs`
                        })
                    }), (0,
                    X.jsx)(`span`, {
                        className: `text-white text-sm font-medium`,
                        children: e.rating
                    }), (0,
                    X.jsx)(`span`, {
                        className: `text-gray-500 text-xs`,
                        children: t(`rating`)
                    })]
                }), (0,
                X.jsxs)(`div`, {
                    className: `flex items-center gap-1.5`,
                    children: [(0,
                    X.jsx)(`div`, {
                        className: `w-4 h-4 flex items-center justify-center`,
                        children: (0,
                        X.jsx)(`i`, {
                            className: `ri-time-line text-[#9d7bff] text-xs`
                        })
                    }), (0,
                    X.jsxs)(`span`, {
                        className: `text-gray-400 text-sm`,
                        children: [e.deliveryTime, ` `, t(`deliveryTime`)]
                    })]
                })]
            }), (0,
            X.jsxs)(J, {
                to: `/restaurant/${e.id}`,
                className: `flex items-center justify-center gap-2 w-full text-center py-2.5 rounded-lg bg-[#9d7bff]/10 border border-[#9d7bff]/20 text-[#c4aaff] font-medium text-sm hover:bg-[#9d7bff] hover:text-white hover:border-[#9d7bff] hover:shadow-[0_0_20px_rgba(157,123,255,0.3)] transition-all duration-300`,
                children: [(0,
                X.jsx)(`div`, {
                    className: `w-4 h-4 flex items-center justify-center`,
                    children: (0,
                    X.jsx)(`i`, {
                        className: `ri-menu-search-line text-sm`
                    })
                }), t(`viewMenu`)]
            })]
        })]
    })
}
function Rr() {
    let {t: e, i18n: t} = j()
      , [n,r] = (0,
    v.useState)(``);
    t.language;
    let i = (0,
    v.useMemo)( () => {
        if (!n.trim())
            return Z;
        let t = n.toLowerCase();
        return Z.filter(n => {
            let r = n.name.en.toLowerCase().includes(t) || n.name.tr.toLowerCase().includes(t) || n.name.ar.toLowerCase().includes(t)
              , i = e(`category_` + n.category).toLowerCase().includes(t);
            return r || i
        }
        )
    }
    , [n, e]);
    return (0,
    X.jsxs)(`div`, {
        className: `min-h-screen bg-[#0a0a0f]`,
        dir: t.dir(),
        children: [(0,
        X.jsx)(Pr, {}), (0,
        X.jsxs)(`section`, {
            className: `relative w-full min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden pt-20`,
            children: [(0,
            X.jsx)(`div`, {
                className: `absolute inset-0 bg-[#0a0a0f]`
            }), (0,
            X.jsx)(`div`, {
                className: `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-[#9d7bff]/10 blur-[120px] animate-pulse-slow`
            }), (0,
            X.jsx)(`div`, {
                className: `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-[#b79fff]/5 blur-[80px]`
            }), (0,
            X.jsx)(`div`, {
                className: `absolute inset-0 opacity-[0.03]`,
                style: {
                    backgroundImage: `linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)`,
                    backgroundSize: `60px 60px`
                }
            }), (0,
            X.jsxs)(`div`, {
                className: `relative z-10 w-full px-4 md:px-8 lg:px-12 max-w-5xl mx-auto text-center`,
                children: [(0,
                X.jsxs)(`div`, {
                    className: `mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#9d7bff]/10 border border-[#9d7bff]/20`,
                    children: [(0,
                    X.jsx)(`span`, {
                        className: `w-2 h-2 rounded-full bg-[#b79fff] animate-pulse`
                    }), (0,
                    X.jsx)(`span`, {
                        className: `text-[#c4aaff] text-sm font-medium`,
                        children: e(`heroBadge`)
                    })]
                }), (0,
                X.jsx)(`h1`, {
                    className: `text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-8 tracking-tight`,
                    children: e(`heroTitle`)
                }), (0,
                X.jsx)(`p`, {
                    className: `text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10`,
                    children: e(`heroDescription`)
                }), (0,
                X.jsxs)(`div`, {
                    className: `flex flex-col sm:flex-row items-center justify-center gap-4`,
                    children: [(0,
                    X.jsxs)(`a`, {
                        href: `#restaurants`,
                        className: `btn-neon text-base px-8 py-4 rounded-xl whitespace-nowrap inline-flex items-center gap-2`,
                        children: [(0,
                        X.jsx)(`div`, {
                            className: `w-5 h-5 flex items-center justify-center`,
                            children: (0,
                            X.jsx)(`i`, {
                                className: `ri-restaurant-2-line text-sm`
                            })
                        }), e(`heroCta`)]
                    }), (0,
                    X.jsxs)(`a`, {
                        href: `/track`,
                        className: `flex items-center gap-2 px-8 py-4 rounded-xl bg-white/[0.05] border border-white/10 text-white font-medium hover:border-[#9d7bff]/30 hover:bg-white/10 transition-all duration-300 whitespace-nowrap`,
                        children: [(0,
                        X.jsx)(`div`, {
                            className: `w-5 h-5 flex items-center justify-center`,
                            children: (0,
                            X.jsx)(`i`, {
                                className: `ri-search-line text-[#9d7bff]`
                            })
                        }), e(`heroTrackCta`)]
                    })]
                })]
            }), (0,
            X.jsx)(`div`, {
                className: `absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent`
            })]
        }), (0,
        X.jsx)(`section`, {
            className: `relative z-10 w-full px-4 md:px-8 lg:px-12 -mt-6 mb-16`,
            children: (0,
            X.jsx)(`div`, {
                className: `max-w-3xl mx-auto`,
                children: (0,
                X.jsxs)(`div`, {
                    className: `relative`,
                    children: [(0,
                    X.jsx)(`div`, {
                        className: `absolute inset-y-0 right-4 flex items-center pointer-events-none`,
                        children: (0,
                        X.jsx)(`div`, {
                            className: `w-5 h-5 flex items-center justify-center`,
                            children: (0,
                            X.jsx)(`i`, {
                                className: `ri-search-line text-gray-500`
                            })
                        })
                    }), (0,
                    X.jsx)(`input`, {
                        type: `text`,
                        value: n,
                        onChange: e => r(e.target.value),
                        placeholder: e(`searchPlaceholder`),
                        className: `w-full pr-12 pl-4 py-4 md:py-5 bg-[#12121a] border border-white/[0.06] rounded-2xl text-white placeholder:text-gray-500 focus:border-[#9d7bff]/50 focus:shadow-[0_0_20px_rgba(157,123,255,0.15)] transition-all duration-300 outline-none text-base`
                    })]
                })
            })
        }), (0,
        X.jsx)(`section`, {
            id: `restaurants`,
            className: `w-full px-4 md:px-8 lg:px-12 pb-12`,
            children: (0,
            X.jsxs)(`div`, {
                className: `max-w-7xl mx-auto`,
                children: [(0,
                X.jsxs)(`div`, {
                    className: `flex items-center justify-between mb-8`,
                    children: [(0,
                    X.jsxs)(`div`, {
                        className: `flex items-center gap-2`,
                        children: [(0,
                        X.jsx)(`div`, {
                            className: `w-6 h-6 flex items-center justify-center`,
                            children: (0,
                            X.jsx)(`i`, {
                                className: `ri-store-2-line text-[#9d7bff] text-lg`
                            })
                        }), (0,
                        X.jsxs)(`div`, {
                            children: [(0,
                            X.jsx)(`h2`, {
                                className: `text-2xl md:text-3xl font-bold text-white`,
                                children: e(`restaurantsTitle`)
                            }), (0,
                            X.jsx)(`p`, {
                                className: `text-gray-500 text-sm`,
                                children: e(`restaurantsSubtitle`)
                            })]
                        })]
                    }), (0,
                    X.jsxs)(`div`, {
                        className: `hidden md:flex items-center gap-2 text-gray-500 text-sm`,
                        children: [(0,
                        X.jsx)(`div`, {
                            className: `w-4 h-4 flex items-center justify-center`,
                            children: (0,
                            X.jsx)(`i`, {
                                className: `ri-store-2-line`
                            })
                        }), (0,
                        X.jsxs)(`span`, {
                            children: [Z.length, ` `, e(`restaurantsCountSuffix`)]
                        })]
                    })]
                }), i.length > 0 ? (0,
                X.jsx)(`div`, {
                    className: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8`,
                    children: i.map(e => (0,
                    X.jsx)(Lr, {
                        restaurant: e
                    }, e.id))
                }) : (0,
                X.jsxs)(`div`, {
                    className: `text-center py-20`,
                    children: [(0,
                    X.jsx)(`div`, {
                        className: `w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#12121a] flex items-center justify-center`,
                        children: (0,
                        X.jsx)(`div`, {
                            className: `w-8 h-8 flex items-center justify-center`,
                            children: (0,
                            X.jsx)(`i`, {
                                className: `ri-restaurant-2-line text-gray-500 text-2xl`
                            })
                        })
                    }), (0,
                    X.jsx)(`p`, {
                        className: `text-gray-500 text-lg`,
                        children: e(`noResults`)
                    })]
                })]
            })
        }), (0,
        X.jsx)(Fr, {})]
    })
}
var zr = [{
    id: `m1`,
    restaurantId: `1`,
    name: {
        en: `Classic Burger`,
        tr: `Klasik Burger`,
        ar: `برجر كلاسيك`
    },
    description: {
        en: `Fresh beef patty with cheddar cheese, crisp lettuce, tomato, and our secret sauce on toasted brioche bun`,
        tr: `Taze dana köftesi, cheddar peyniri, çıtır marul, domates ve özel sosumuz ile kızarmış brioche ekmeği`,
        ar: `لحم بقري طازج مع جبنة شيدر، خس طازج، طماطم، وصوصنا السري على خبز بريوش محمص`
    },
    price: 2.5,
    image: `https://readdy.ai/api/search-image?query=Gourmet%20classic%20beef%20burger%20with%20melted%20cheddar%20cheese%2C%20fresh%20lettuce%2C%20tomato%2C%20and%20secret%20sauce%20on%20toasted%20brioche%20bun%2C%20dark%20background%20with%20dramatic%20lighting%2C%20professional%20food%20photography%2C%20steam%20rising%2C%20neon%20purple%20accent%20lights&width=400&height=300&seq=10&orientation=landscape`,
    category: `burger`,
    isAvailable: !0
}, {
    id: `m2`,
    restaurantId: `1`,
    name: {
        en: `Double Burger`,
        tr: `Çift Katlı Burger`,
        ar: `برجر دبل`
    },
    description: {
        en: `Two beef patties with double cheese, crispy bacon, and BBQ sauce`,
        tr: `İki dana köftesi, çift peynir, çıtır pastırma ve barbekü sosu`,
        ar: `قطعتان لحم بقري مع جبنة مزدوجة، بيكون مقرمش، وصوص باربيكيو`
    },
    price: 4,
    image: `https://readdy.ai/api/search-image?query=Double%20beef%20burger%20with%20double%20cheese%20and%20crispy%20bacon%2C%20barbeque%20sauce%20dripping%2C%20dark%20background%20with%20dramatic%20lighting%2C%20professional%20food%20photography%2C%20neon%20purple%20accent%20lights%2C%20premium%20restaurant%20style&width=400&height=300&seq=11&orientation=landscape`,
    category: `burger`,
    isAvailable: !0
}, {
    id: `m3`,
    restaurantId: `1`,
    name: {
        en: `Crispy Chicken Burger`,
        tr: `Çıtır Tavuk Burger`,
        ar: `برجر دجاج مقرمش`
    },
    description: {
        en: `Crispy fried chicken breast with special mayo and coleslaw`,
        tr: `Çıtır kızarmış tavuk göğsü, özel mayonez ve lahana salatası`,
        ar: `صدور دجاج مقلية مقرمشة مع مايونيز خاص وسلطة كول سلو`
    },
    price: 2.75,
    image: `https://readdy.ai/api/search-image?query=Crispy%20fried%20chicken%20burger%20with%20special%20mayonnaise%20and%20coleslaw%2C%20golden%20brown%20crispy%20coating%2C%20dark%20background%20with%20dramatic%20lighting%2C%20professional%20food%20photography%2C%20neon%20purple%20accent%20lights&width=400&height=300&seq=12&orientation=landscape`,
    category: `burger`,
    isAvailable: !0
}, {
    id: `m4`,
    restaurantId: `1`,
    name: {
        en: `French Fries`,
        tr: `Patates Kızartması`,
        ar: `بطاطس مقلية`
    },
    description: {
        en: `Golden crispy french fries with a sprinkle of sea salt`,
        tr: `Deniz tuzu serpilmiş altın sarısı çıtır patates kızartması`,
        ar: `بطاطس مقلية ذهبية مقرمشة مع رشة ملح البحر`
    },
    price: 1,
    image: `https://readdy.ai/api/search-image?query=Golden%20crispy%20french%20fries%20in%20a%20paper%20cone%2C%20sea%20salt%20sprinkled%2C%20dark%20background%20with%20dramatic%20lighting%2C%20professional%20food%20photography%2C%20neon%20purple%20accent%20lights%2C%20premium%20style&width=400&height=300&seq=13&orientation=landscape`,
    category: `extras`,
    isAvailable: !0
}, {
    id: `m5`,
    restaurantId: `1`,
    name: {
        en: `Cola`,
        tr: `Kola`,
        ar: `كولا`
    },
    description: {
        en: `Iced cola 330ml`,
        tr: `Buzlu kola 330ml`,
        ar: `كولا مثلجة 330 مل`
    },
    price: .5,
    image: `https://readdy.ai/api/search-image?query=Ice%20cold%20cola%20drink%20in%20glass%20bottle%20with%20condensation%20droplets%2C%20dark%20background%20with%20dramatic%20lighting%2C%20professional%20beverage%20photography%2C%20neon%20purple%20accent%20lights%2C%20refreshing%20drink&width=400&height=300&seq=14&orientation=landscape`,
    category: `drinks`,
    isAvailable: !0
}, {
    id: `m6`,
    restaurantId: `2`,
    name: {
        en: `Pepperoni Pizza`,
        tr: `Pepperoni Pizza`,
        ar: `بيتزا ببروني`
    },
    description: {
        en: `Fresh tomato sauce, mozzarella, spicy pepperoni, and oregano`,
        tr: `Taze domates sosu, mozzarella, baharatlı pepperoni ve kekik`,
        ar: `صلصة طماطم طازجة، موزاريلا، ببروني حار، وأوريغانو`
    },
    price: 3.5,
    image: `https://readdy.ai/api/search-image?query=Pepperoni%20pizza%20with%20melted%20mozzarella%2C%20fresh%20tomato%20sauce%2C%20and%20oregano%2C%20dark%20background%20with%20dramatic%20lighting%2C%20professional%20food%20photography%2C%20neon%20purple%20accent%20lights%2C%20premium%20italian%20style&width=400&height=300&seq=15&orientation=landscape`,
    category: `pizza`,
    isAvailable: !0
}, {
    id: `m7`,
    restaurantId: `2`,
    name: {
        en: `Margherita Pizza`,
        tr: `Margarita Pizza`,
        ar: `بيتزا مارغريتا`
    },
    description: {
        en: `Tomato sauce, fresh mozzarella, basil, and extra virgin olive oil`,
        tr: `Domates sosu, taze mozzarella, fesleğen ve soğuk sıkım zeytinyağı`,
        ar: `صلصة طماطم، موزاريلا طازجة، ريحان طازج، وزيت زيتون بكر`
    },
    price: 2.75,
    image: `https://readdy.ai/api/search-image?query=Margherita%20pizza%20with%20fresh%20mozzarella%2C%20tomato%20sauce%2C%20basil%20leaves%2C%20and%20olive%20oil%2C%20dark%20background%20with%20dramatic%20lighting%2C%20professional%20food%20photography%2C%20neon%20purple%20accent%20lights%2C%20authentic%20italian%20style&width=400&height=300&seq=16&orientation=landscape`,
    category: `pizza`,
    isAvailable: !0
}, {
    id: `m8`,
    restaurantId: `2`,
    name: {
        en: `Veggie Pizza`,
        tr: `Sebzeli Pizza`,
        ar: `بيتزا خضار`
    },
    description: {
        en: `Bell peppers, mushrooms, olives, onions, tomatoes, and mozzarella`,
        tr: `Biber, mantar, zeytin, soğan, domates ve mozzarella peyniri`,
        ar: `فلفل، مشروم، زيتون، بصل، طماطم، وجبنة موزاريلا`
    },
    price: 3,
    image: `https://readdy.ai/api/search-image?query=Vegetarian%20pizza%20with%20bell%20peppers%2C%20mushrooms%2C%20olives%2C%20onions%2C%20tomatoes%2C%20and%20mozzarella%20cheese%2C%20dark%20background%20with%20dramatic%20lighting%2C%20professional%20food%20photography%2C%20neon%20purple%20accent%20lights&width=400&height=300&seq=17&orientation=landscape`,
    category: `pizza`,
    isAvailable: !0
}, {
    id: `m9`,
    restaurantId: `2`,
    name: {
        en: `Chicken Wings`,
        tr: `Tavuk Kanatları`,
        ar: `أجنحة دجاج`
    },
    description: {
        en: `Grilled chicken wings with hot buffalo sauce`,
        tr: `Baharatlı buffalo sosu ile ızgarada pişmiş tavuk kanatları`,
        ar: `أجنحة دجاج مشوية مع صوص بافالو حار`
    },
    price: 2.5,
    image: `https://readdy.ai/api/search-image?query=Grilled%20chicken%20wings%20with%20buffalo%20hot%20sauce%2C%20dark%20background%20with%20dramatic%20lighting%2C%20professional%20food%20photography%2C%20neon%20purple%20accent%20lights%2C%20crispy%20golden%20wings&width=400&height=300&seq=18&orientation=landscape`,
    category: `chicken_wings`,
    isAvailable: !0
}, {
    id: `m10`,
    restaurantId: `3`,
    name: {
        en: `Chicken Shawarma`,
        tr: `Tavuk Döner`,
        ar: `شاورما دجاج`
    },
    description: {
        en: `Spiced grilled chicken with garlic sauce and pickles`,
        tr: `Baharatlı ızgarada pişmiş tavuk, sarımsak sosu ve turşu`,
        ar: `لحم دجاج متبل مشوي على الفحم مع ثومية و pickles`
    },
    price: 1.5,
    image: `https://readdy.ai/api/search-image?query=Chicken%20shawarma%20wrap%20with%20garlic%20sauce%20and%20pickles%2C%20fresh%20pita%20bread%2C%20dark%20background%20with%20dramatic%20lighting%2C%20professional%20food%20photography%2C%20neon%20purple%20accent%20lights%2C%20middle%20eastern%20style&width=400&height=300&seq=19&orientation=landscape`,
    category: `shawarma`,
    isAvailable: !0
}, {
    id: `m11`,
    restaurantId: `3`,
    name: {
        en: `Meat Shawarma`,
        tr: `Et Döner`,
        ar: `شاورما لحم`
    },
    description: {
        en: `Grilled lamb with tahini and Aleppo pistachios`,
        tr: `Tahin ve Halep fıstığı ile ızgarada pişmiş kuzu eti`,
        ar: `لحم غنم مشوي مع طحينة وفستق حلبي`
    },
    price: 2,
    image: `https://readdy.ai/api/search-image?query=Meat%20shawarma%20wrap%20with%20tahini%20sauce%20and%20Aleppo%20pistachios%2C%20fresh%20pita%20bread%2C%20dark%20background%20with%20dramatic%20lighting%2C%20professional%20food%20photography%2C%20neon%20purple%20accent%20lights%2C%20middle%20eastern%20style&width=400&height=300&seq=20&orientation=landscape`,
    category: `shawarma`,
    isAvailable: !0
}, {
    id: `m12`,
    restaurantId: `3`,
    name: {
        en: `Chicken Shawarma Plate`,
        tr: `Tavuk Döner Tabağı`,
        ar: `صحن شاورما دجاج`
    },
    description: {
        en: `Grilled chicken on basmati rice with garlic sauce, salad, and bread`,
        tr: `Basmati pirinci üzerinde ızgarada tavuk, sarımsak sosu, salata ve ekmek`,
        ar: `لحم دجاج مشوي على رز بسمتي مع ثومية، سلطة، وخبز`
    },
    price: 3,
    image: `https://readdy.ai/api/search-image?query=Chicken%20shawarma%20plate%20on%20basmati%20rice%20with%20garlic%20sauce%2C%20salad%2C%20and%20bread%2C%20dark%20background%20with%20dramatic%20lighting%2C%20professional%20food%20photography%2C%20neon%20purple%20accent%20lights%2C%20middle%20eastern%20style&width=400&height=300&seq=21&orientation=landscape`,
    category: `bowls`,
    isAvailable: !0
}, {
    id: `m13`,
    restaurantId: `3`,
    name: {
        en: `Shawarma Fattah`,
        tr: `Döner Fattah`,
        ar: `فتة شاورما`
    },
    description: {
        en: `Fried bread with rice, shawarma meat, garlic sauce, and pistachio mix`,
        tr: `Kızarmış ekmek, pirinç, döner eti, sarımsak sosu ve fıstık karışımı`,
        ar: `خبز مقلي مع رز، لحم شاورما، ثومية، وخلطة الفستق`
    },
    price: 3.5,
    image: `https://readdy.ai/api/search-image?query=Shawarma%20fattah%20dish%20with%20fried%20bread%2C%20rice%2C%20shawarma%20meat%2C%20garlic%20sauce%2C%20and%20pistachio%20mix%2C%20dark%20background%20with%20dramatic%20lighting%2C%20professional%20food%20photography%2C%20neon%20purple%20accent%20lights%2C%20middle%20eastern%20style&width=400&height=300&seq=22&orientation=landscape`,
    category: `bowls`,
    isAvailable: !0
}, {
    id: `m14`,
    restaurantId: `4`,
    name: {
        en: `California Roll`,
        tr: `Kaliforniya Rulosu`,
        ar: `كاليفورنيا رول`
    },
    description: {
        en: `Salmon, avocado, cucumber, and Japanese mayonnaise`,
        tr: `Somon, avokado, salatalık ve Japon mayonezi`,
        ar: `سلمون، أفوكادو، خيار، ومايونيز الياباني`
    },
    price: 3.5,
    image: `https://readdy.ai/api/search-image?query=California%20sushi%20roll%20with%20salmon%2C%20avocado%2C%20cucumber%2C%20and%20japanese%20mayonnaise%2C%20dark%20background%20with%20dramatic%20lighting%2C%20professional%20food%20photography%2C%20neon%20purple%20accent%20lights%2C%20premium%20japanese%20style&width=400&height=300&seq=23&orientation=landscape`,
    category: `sushi`,
    isAvailable: !0
}, {
    id: `m15`,
    restaurantId: `4`,
    name: {
        en: `Tuna Tartare`,
        tr: `Ton Balığı Tartar`,
        ar: `تونا تارتار`
    },
    description: {
        en: `Fresh chopped tuna with sesame sauce and avocado`,
        tr: `Susam sosu ve avokado ile taze doğranmış ton balığı`,
        ar: `تونا طازجة مقطعة مع صوص السمسم وأفوكادو`
    },
    price: 4,
    image: `https://readdy.ai/api/search-image?query=Fresh%20tuna%20tartare%20with%20sesame%20sauce%20and%20avocado%2C%20dark%20background%20with%20dramatic%20lighting%2C%20professional%20food%20photography%2C%20neon%20purple%20accent%20lights%2C%20premium%20japanese%20style&width=400&height=300&seq=24&orientation=landscape`,
    category: `sushi`,
    isAvailable: !0
}, {
    id: `m16`,
    restaurantId: `4`,
    name: {
        en: `Chicken Ramen`,
        tr: `Tavuk Ramen`,
        ar: `رمين دجاج`
    },
    description: {
        en: `Japanese noodle soup with chicken, egg, and vegetables`,
        tr: `Tavuk, yumurta ve sebzeler ile Japon noodle çorbası`,
        ar: `شوربة نودلز يابانية مع دجاج، بيض، وخضار`
    },
    price: 3,
    image: `https://readdy.ai/api/search-image?query=Japanese%20ramen%20noodle%20soup%20with%20chicken%2C%20egg%2C%20and%20vegetables%2C%20dark%20background%20with%20dramatic%20lighting%2C%20professional%20food%20photography%2C%20neon%20purple%20accent%20lights%2C%20steam%20rising%2C%20authentic%20style&width=400&height=300&seq=25&orientation=landscape`,
    category: `noodles`,
    isAvailable: !0
}, {
    id: `m17`,
    restaurantId: `5`,
    name: {
        en: `Latte`,
        tr: `Latte`,
        ar: `لاتيه`
    },
    description: {
        en: `Double espresso with steamed milk and smooth foam`,
        tr: `Buharlanmış süt ve yumuşak köpük ile çift espresso`,
        ar: `إسبريسو مزدوج مع حليب بخاري ورغوة ناعمة`
    },
    price: 1.5,
    image: `https://readdy.ai/api/search-image?query=Latte%20coffee%20with%20beautiful%20latte%20art%2C%20steamed%20milk%20and%20smooth%20foam%2C%20ceramic%20cup%20on%20dark%20background%20with%20dramatic%20lighting%2C%20professional%20cafe%20photography%2C%20neon%20purple%20accent%20lights&width=400&height=300&seq=26&orientation=landscape`,
    category: `coffee`,
    isAvailable: !0
}, {
    id: `m18`,
    restaurantId: `5`,
    name: {
        en: `Butter Croissant`,
        tr: `Tereyağlı Kruvasan`,
        ar: `كرواسن بالزبدة`
    },
    description: {
        en: `Fresh flaky French croissant with pure French butter`,
        tr: `Saf Fransız tereyağı ile taze gevrek Fransız kruvasanı`,
        ar: `كرواسن فرنسي طازخ هش بزبدة فرنسية نقية`
    },
    price: 1.25,
    image: `https://readdy.ai/api/search-image?query=Fresh%20flaky%20butter%20croissant%2C%20golden%20brown%20layers%2C%20dark%20background%20with%20dramatic%20lighting%2C%20professional%20bakery%20photography%2C%20neon%20purple%20accent%20lights%2C%20french%20pastry%20style&width=400&height=300&seq=27&orientation=landscape`,
    category: `bakery`,
    isAvailable: !0
}, {
    id: `m19`,
    restaurantId: `5`,
    name: {
        en: `Pancakes`,
        tr: `Pankek`,
        ar: `بان كيك`
    },
    description: {
        en: `Fluffy pancakes with maple syrup and fresh berries`,
        tr: `Akçaağaç şurubu ve taze meyveler ile yumuşak pankekler`,
        ar: `بان كيك فلافي مع شراب القيقب وتوت طازج`
    },
    price: 2.5,
    image: `https://readdy.ai/api/search-image?query=Fluffy%20pancakes%20with%20maple%20syrup%20and%20fresh%20berries%2C%20dark%20background%20with%20dramatic%20lighting%2C%20professional%20food%20photography%2C%20neon%20purple%20accent%20lights%2C%20breakfast%20style&width=400&height=300&seq=28&orientation=landscape`,
    category: `breakfast`,
    isAvailable: !0
}, {
    id: `m20`,
    restaurantId: `6`,
    name: {
        en: `Chicken Kebab`,
        tr: `Tavuk Kebabı`,
        ar: `كباب دجاج`
    },
    description: {
        en: `Grilled spiced chicken pieces with peppers and onions`,
        tr: `Biber ve soğan ile ızgarada baharatlı tavuk parçaları`,
        ar: `قطع دجاج متبلة مشوية مع فلفل وبصل`
    },
    price: 2.5,
    image: `https://readdy.ai/api/search-image?query=Grilled%20chicken%20kebab%20skewers%20with%20peppers%20and%20onions%2C%20char%20marks%2C%20dark%20background%20with%20dramatic%20lighting%2C%20professional%20food%20photography%2C%20neon%20purple%20accent%20lights%2C%20smoke%20rising%2C%20middle%20eastern%20style&width=400&height=300&seq=29&orientation=landscape`,
    category: `kebab`,
    isAvailable: !0
}, {
    id: `m21`,
    restaurantId: `6`,
    name: {
        en: `Lamb Kebab`,
        tr: `Kuzu Kebabı`,
        ar: `كباب لحم`
    },
    description: {
        en: `Fresh lamb seasoned with Arabic spices`,
        tr: `Arap baharatları ile marine edilmiş taze kuzu eti`,
        ar: `لحم غنم طازج متبل بالبهارات العربية`
    },
    price: 3.5,
    image: `https://readdy.ai/api/search-image?query=Grilled%20lamb%20kebab%20skewers%20with%20arabic%20spices%2C%20char%20marks%2C%20dark%20background%20with%20dramatic%20lighting%2C%20professional%20food%20photography%2C%20neon%20purple%20accent%20lights%2C%20smoke%20rising%2C%20middle%20eastern%20style&width=400&height=300&seq=30&orientation=landscape`,
    category: `kebab`,
    isAvailable: !0
}, {
    id: `m22`,
    restaurantId: `6`,
    name: {
        en: `Tabbouleh Salad`,
        tr: `Tabule Salatası`,
        ar: `تبولة`
    },
    description: {
        en: `Fresh parsley and bulgur salad with lemon dressing`,
        tr: `Taze maydanoz ve bulgur salatası, limon sosu ile`,
        ar: `سلطة تبولة بالبقدونس الطازج والبرغل مع صلصة الليمون`
    },
    price: 1.5,
    image: `https://readdy.ai/api/search-image?query=Fresh%20tabbouleh%20salad%20with%20parsley%2C%20bulgur%2C%20and%20lemon%20dressing%2C%20dark%20background%20with%20dramatic%20lighting%2C%20professional%20food%20photography%2C%20neon%20purple%20accent%20lights%2C%20middle%20eastern%20style&width=400&height=300&seq=31&orientation=landscape`,
    category: `salads`,
    isAvailable: !0
}, {
    id: `m23`,
    restaurantId: `6`,
    name: {
        en: `Mixed Grill Platter`,
        tr: `Karışık Izgara Tabağı`,
        ar: `مشكل مشاوي`
    },
    description: {
        en: `Kebab, kofta, shish tawook, lamb chops, with rice and tahini`,
        tr: `Kebap, köfte, şiş tavuk, kuzu pirzola, pilav ve tahin ile`,
        ar: `كباب، كفتة، شيش طاووق، ريش غنم، مع رز وطحينة`
    },
    price: 6,
    image: `https://readdy.ai/api/search-image?query=Mixed%20grill%20platter%20with%20kebab%2C%20kofta%2C%20shish%20tawook%2C%20lamb%20chops%2C%20rice%20and%20tahini%2C%20dark%20background%20with%20dramatic%20lighting%2C%20professional%20food%20photography%2C%20neon%20purple%20accent%20lights%2C%20smoke%20rising%2C%20middle%20eastern%20style&width=400&height=300&seq=32&orientation=landscape`,
    category: `bowls`,
    isAvailable: !0
}];
function Br(e, t) {
    return t === `ar` && e.ar ? e.ar : t === `tr` && e.tr ? e.tr : e.en
}
var Vr = `foodi-cart`
  , Hr = `foodi-cart-restaurant`;
function $() {
    try {
        return JSON.parse(localStorage.getItem(Vr) || `[]`)
    } catch {
        return []
    }
}
function Ur() {
    try {
        return JSON.parse(localStorage.getItem(Hr) || `null`)
    } catch {
        return null
    }
}
function Wr(e) {
    localStorage.setItem(Vr, JSON.stringify(e)),
    window.dispatchEvent(new Event(`cart-updated`))
}
function Gr(e) {
    e ? localStorage.setItem(Hr, JSON.stringify(e)) : localStorage.removeItem(Hr),
    window.dispatchEvent(new Event(`cart-updated`))
}
function Kr(e, t) {
    let n = $(), r = n.find(t => t.menuItemId === e.menuItemId), i;
    return i = r ? n.map(t => t.menuItemId === e.menuItemId ? {
        ...t,
        quantity: t.quantity + e.quantity
    } : t) : [...n, e],
    Wr(i),
    Gr(t),
    i
}
function qr(e, t) {
    let n = $().map(n => n.menuItemId === e ? {
        ...n,
        quantity: Math.max(0, n.quantity + t)
    } : n).filter(e => e.quantity > 0);
    return n.length === 0 ? (Yr(),
    []) : (Wr(n),
    n)
}
function Jr(e) {
    let t = $().filter(t => t.menuItemId !== e);
    return t.length === 0 ? (Yr(),
    []) : (Wr(t),
    t)
}
function Yr() {
    localStorage.removeItem(Vr),
    localStorage.removeItem(Hr),
    window.dispatchEvent(new Event(`cart-updated`))
}
function Xr() {
    return Ur()
}
function Zr() {
    return $().reduce( (e, t) => e + t.price * t.quantity, 0)
}
function Qr() {
    return $().reduce( (e, t) => e + t.quantity, 0)
}
function $r() {
    let[e,t] = (0,
    v.useState)($)
      , [n,r] = (0,
    v.useState)(Ur)
      , i = (0,
    v.useCallback)( () => {
        t($()),
        r(Ur())
    }
    , []);
    return (0,
    v.useEffect)( () => {
        let e = () => i();
        return window.addEventListener(`cart-updated`, e),
        window.addEventListener(`storage`, e),
        () => {
            window.removeEventListener(`cart-updated`, e),
            window.removeEventListener(`storage`, e)
        }
    }
    , [i]),
    {
        cart: e,
        restaurant: n,
        refresh: i
    }
}
var ei = {
    burger: `ri-restaurant-line`,
    pizza: `ri-restaurant-2-line`,
    shawarma: `ri-fire-line`,
    sushi: `ri-restaurant-line`,
    cafe: `ri-cup-line`,
    grill: `ri-fire-line`,
    sides: `ri-restaurant-2-line`,
    drinks: `ri-cup-line`,
    chicken_wings: `ri-fire-line`,
    bowls: `ri-restaurant-line`,
    noodles: `ri-restaurant-2-line`,
    coffee: `ri-cup-line`,
    bakery: `ri-cake-3-line`,
    breakfast: `ri-sun-line`,
    kebab: `ri-fire-line`,
    salads: `ri-leaf-line`
};
function ti() {
    let {id: e} = bt()
      , t = G()
      , {t: n, i18n: r} = j(`common`)
      , {cart: i, refresh: a} = $r()
      , o = r.language
      , s = Z.find(t => t.id === e)
      , c = zr.filter(t => t.restaurantId === e)
      , l = (0,
    v.useMemo)( () => [`all`, ...[...new Set(c.map(e => e.category))]], [c])
      , [u,d] = (0,
    v.useState)(`all`)
      , [f,p] = (0,
    v.useState)(!1)
      , [m,h] = (0,
    v.useState)(null)
      , g = u === `all` ? c : c.filter(e => e.category === u)
      , _ = Zr()
      , y = Qr()
      , b = e => {
        if (!s)
            return;
        let t = {
            id: s.id,
            name: s.name
        };
        Kr({
            menuItemId: e.id,
            name: e.name,
            price: e.price,
            quantity: 1,
            image: e.image
        }, t),
        a(),
        h(e.id),
        setTimeout( () => h(null), 1500)
    }
      , x = (e, t) => {
        qr(e, t),
        a()
    }
      , S = e => {
        Jr(e),
        a()
    }
      , C = () => {
        Yr(),
        a(),
        p(!1)
    }
      , w = e => typeof e == `string` ? e : e[o] || e.en;
    return s ? (0,
    X.jsxs)(`div`, {
        className: `min-h-screen bg-[#0a0a0f] text-white`,
        dir: r.dir(),
        children: [(0,
        X.jsx)(Pr, {}), (0,
        X.jsxs)(`div`, {
            className: `relative h-[280px] md:h-[360px] overflow-hidden`,
            children: [(0,
            X.jsx)(`img`, {
                src: s.image,
                alt: Q(s.name, o),
                className: `w-full h-full object-cover`
            }), (0,
            X.jsx)(`div`, {
                className: `absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/60 to-transparent`
            }), (0,
            X.jsxs)(`div`, {
                className: `absolute bottom-0 left-0 right-0 p-6 md:p-10`,
                children: [(0,
                X.jsxs)(`button`, {
                    onClick: () => t(`/`),
                    className: `text-sm text-[#9d7bff] hover:text-white transition-colors mb-3 flex items-center gap-2`,
                    children: [(0,
                    X.jsx)(nr, {
                        className: `rotate-180`,
                        size: 18
                    }), ` `, n(`backToRestaurants`)]
                }), (0,
                X.jsx)(`h1`, {
                    className: `text-3xl md:text-5xl font-bold mb-2`,
                    children: Q(s.name, o)
                }), (0,
                X.jsxs)(`div`, {
                    className: `flex items-center gap-4 text-sm text-gray-300 flex-wrap`,
                    children: [(0,
                    X.jsxs)(`span`, {
                        className: `flex items-center gap-1`,
                        children: [(0,
                        X.jsx)(`div`, {
                            className: `w-4 h-4 flex items-center justify-center`,
                            children: (0,
                            X.jsx)(`i`, {
                                className: `ri-star-fill text-yellow-400 text-xs`
                            })
                        }), s.rating]
                    }), (0,
                    X.jsxs)(`span`, {
                        className: `flex items-center gap-1`,
                        children: [(0,
                        X.jsx)(`div`, {
                            className: `w-4 h-4 flex items-center justify-center`,
                            children: (0,
                            X.jsx)(`i`, {
                                className: `${ei[s.category] || `ri-restaurant-line`} text-[#9d7bff] text-xs`
                            })
                        }), n(`category_` + s.category)]
                    }), (0,
                    X.jsxs)(`span`, {
                        className: `flex items-center gap-1`,
                        children: [(0,
                        X.jsx)(`div`, {
                            className: `w-4 h-4 flex items-center justify-center`,
                            children: (0,
                            X.jsx)(`i`, {
                                className: `ri-time-line text-[#9d7bff] text-xs`
                            })
                        }), s.deliveryTime, ` `, n(`deliveryTime`)]
                    }), (0,
                    X.jsxs)(`span`, {
                        className: `inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs ${s.isOpen ? `bg-green-500/20 text-green-400` : `bg-red-500/20 text-red-400`}`,
                        children: [(0,
                        X.jsx)(`div`, {
                            className: `w-3.5 h-3.5 flex items-center justify-center`,
                            children: (0,
                            X.jsx)(`i`, {
                                className: `${s.isOpen ? `ri-checkbox-circle-line` : `ri-close-circle-line`} text-xs`
                            })
                        }), s.isOpen ? n(`restaurantOpen`) : n(`restaurantClosed`)]
                    })]
                })]
            })]
        }), (0,
        X.jsxs)(`main`, {
            className: `max-w-7xl mx-auto px-4 md:px-6 py-8`,
            children: [(0,
            X.jsx)(`div`, {
                className: `flex flex-wrap gap-2 mb-8`,
                children: l.map(e => (0,
                X.jsxs)(`button`, {
                    onClick: () => d(e),
                    className: `px-4 py-2 rounded-full text-sm transition-all duration-300 cursor-pointer whitespace-nowrap inline-flex items-center gap-1.5 ${u === e ? `bg-[#9d7bff] text-white shadow-[0_0_20px_rgba(157,123,255,0.3)]` : `bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10`}`,
                    children: [e === `all` && (0,
                    X.jsx)(`div`, {
                        className: `w-3.5 h-3.5 flex items-center justify-center`,
                        children: (0,
                        X.jsx)(`i`, {
                            className: `ri-apps-line text-xs`
                        })
                    }), n(e === `all` ? `all` : `category_` + e)]
                }, e))
            }), (0,
            X.jsx)(`div`, {
                className: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5`,
                children: g.map(e => (0,
                X.jsxs)(`div`, {
                    className: `group bg-[#12121a] rounded-xl overflow-hidden border border-white/[0.06] hover:border-[#9d7bff]/30 transition-all duration-300`,
                    children: [(0,
                    X.jsx)(`div`, {
                        className: `h-48 overflow-hidden`,
                        children: (0,
                        X.jsx)(`img`, {
                            src: e.image,
                            alt: Q(e.name, o),
                            className: `w-full h-full object-cover group-hover:scale-105 transition-transform duration-500`
                        })
                    }), (0,
                    X.jsxs)(`div`, {
                        className: `p-4`,
                        children: [(0,
                        X.jsxs)(`div`, {
                            className: `flex items-start justify-between mb-2`,
                            children: [(0,
                            X.jsx)(`h3`, {
                                className: `font-bold text-lg`,
                                children: Q(e.name, o)
                            }), (0,
                            X.jsxs)(`span`, {
                                className: `text-[#9d7bff] font-bold`,
                                children: [e.price, ` `, n(`currency`)]
                            })]
                        }), (0,
                        X.jsx)(`p`, {
                            className: `text-gray-400 text-sm mb-3 line-clamp-2`,
                            children: Br(e.description, o)
                        }), (0,
                        X.jsxs)(`div`, {
                            className: `flex items-center justify-between`,
                            children: [(0,
                            X.jsxs)(`span`, {
                                className: `text-xs text-gray-500 px-2 py-1 bg-white/5 rounded-full inline-flex items-center gap-1`,
                                children: [(0,
                                X.jsx)(`div`, {
                                    className: `w-3.5 h-3.5 flex items-center justify-center`,
                                    children: (0,
                                    X.jsx)(`i`, {
                                        className: `${ei[e.category] || `ri-restaurant-line`} text-[10px]`
                                    })
                                }), n(`category_` + e.category)]
                            }), (0,
                            X.jsx)(`button`, {
                                onClick: () => b(e),
                                className: `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer ${m === e.id ? `bg-green-500/20 text-green-400` : `bg-[#9d7bff]/10 text-[#9d7bff] hover:bg-[#9d7bff]/20 border border-[#9d7bff]/30`}`,
                                children: m === e.id ? (0,
                                X.jsxs)(X.Fragment, {
                                    children: [(0,
                                    X.jsx)(rr, {
                                        size: 16
                                    }), ` `, n(`addedToCart`)]
                                }) : (0,
                                X.jsxs)(X.Fragment, {
                                    children: [(0,
                                    X.jsx)(xr, {
                                        size: 16
                                    }), ` `, n(`addToCart`)]
                                })
                            })]
                        })]
                    })]
                }, e.id))
            })]
        }), i.length > 0 && (0,
        X.jsxs)(`button`, {
            onClick: () => p(!0),
            className: `fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-[#9d7bff] text-white shadow-[0_0_30px_rgba(157,123,255,0.4)] flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer`,
            children: [(0,
            X.jsx)(Tr, {
                size: 22
            }), y > 0 && (0,
            X.jsx)(`span`, {
                className: `absolute -top-1 -right-1 w-5 h-5 bg-white text-[#9d7bff] text-xs font-bold rounded-full flex items-center justify-center`,
                children: y
            })]
        }), f && (0,
        X.jsxs)(X.Fragment, {
            children: [(0,
            X.jsx)(`div`, {
                className: `fixed inset-0 bg-black/60 z-50 backdrop-blur-sm`,
                onClick: () => p(!1)
            }), (0,
            X.jsxs)(`div`, {
                className: `fixed top-0 right-0 h-full w-full sm:w-[420px] bg-[#12121a] border-l border-white/10 z-50 flex flex-col shadow-2xl animate-in slide-in-from-right`,
                children: [(0,
                X.jsxs)(`div`, {
                    className: `p-5 border-b border-white/10 flex items-center justify-between`,
                    children: [(0,
                    X.jsxs)(`h2`, {
                        className: `text-xl font-bold flex items-center gap-2`,
                        children: [(0,
                        X.jsx)(Tr, {
                            className: `text-[#9d7bff]`,
                            size: 22
                        }), ` `, n(`cartTitle`)]
                    }), (0,
                    X.jsx)(`button`, {
                        onClick: () => p(!1),
                        className: `text-gray-400 hover:text-white transition-colors cursor-pointer w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/5`,
                        children: (0,
                        X.jsx)(jr, {
                            size: 20
                        })
                    })]
                }), (0,
                X.jsxs)(`div`, {
                    className: `flex-1 overflow-y-auto p-5 space-y-4`,
                    children: [i.length === 0 && (0,
                    X.jsxs)(`div`, {
                        className: `text-center py-10 text-gray-400`,
                        children: [(0,
                        X.jsx)(Tr, {
                            size: 48,
                            className: `mx-auto mb-4 opacity-30`
                        }), (0,
                        X.jsx)(`p`, {
                            children: n(`emptyCartMsg`)
                        })]
                    }), i.map(e => (0,
                    X.jsxs)(`div`, {
                        className: `flex gap-3 bg-white/[0.03] rounded-xl p-3 border border-white/[0.04]`,
                        children: [(0,
                        X.jsx)(`img`, {
                            src: e.image,
                            alt: w(e.name),
                            className: `w-16 h-16 rounded-lg object-cover flex-shrink-0`
                        }), (0,
                        X.jsxs)(`div`, {
                            className: `flex-1 min-w-0`,
                            children: [(0,
                            X.jsx)(`h4`, {
                                className: `font-medium text-sm truncate`,
                                children: w(e.name)
                            }), (0,
                            X.jsxs)(`p`, {
                                className: `text-[#9d7bff] text-sm font-bold mt-1`,
                                children: [e.price, ` `, n(`currency`)]
                            }), (0,
                            X.jsxs)(`div`, {
                                className: `flex items-center gap-2 mt-2`,
                                children: [(0,
                                X.jsx)(`button`, {
                                    onClick: () => x(e.menuItemId, -1),
                                    className: `w-7 h-7 rounded-md bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer`,
                                    children: (0,
                                    X.jsx)(_r, {
                                        size: 14
                                    })
                                }), (0,
                                X.jsx)(`span`, {
                                    className: `text-sm font-medium w-6 text-center`,
                                    children: e.quantity
                                }), (0,
                                X.jsx)(`button`, {
                                    onClick: () => x(e.menuItemId, 1),
                                    className: `w-7 h-7 rounded-md bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer`,
                                    children: (0,
                                    X.jsx)(xr, {
                                        size: 14
                                    })
                                }), (0,
                                X.jsx)(`button`, {
                                    onClick: () => S(e.menuItemId),
                                    className: `w-7 h-7 rounded-md bg-red-500/10 text-red-400 flex items-center justify-center hover:bg-red-500/20 transition-colors ml-auto cursor-pointer`,
                                    children: (0,
                                    X.jsx)(Er, {
                                        size: 14
                                    })
                                })]
                            })]
                        })]
                    }, e.menuItemId))]
                }), (0,
                X.jsxs)(`div`, {
                    className: `p-5 border-t border-white/10`,
                    children: [i.length > 0 && (0,
                    X.jsxs)(`div`, {
                        className: `flex items-center justify-between mb-4 text-lg font-bold`,
                        children: [(0,
                        X.jsx)(`span`, {
                            children: n(`total`)
                        }), (0,
                        X.jsxs)(`span`, {
                            className: `text-[#9d7bff]`,
                            children: [_.toFixed(2), ` `, n(`currency`)]
                        })]
                    }), (0,
                    X.jsxs)(`div`, {
                        className: `flex gap-2`,
                        children: [i.length > 0 && (0,
                        X.jsx)(`button`, {
                            onClick: C,
                            className: `px-4 py-3 rounded-xl bg-red-500/10 text-red-400 font-bold hover:bg-red-500/20 transition-colors cursor-pointer text-sm whitespace-nowrap`,
                            children: n(`clearCart`)
                        }), (0,
                        X.jsx)(`button`, {
                            onClick: () => {
                                i.length !== 0 && (p(!1),
                                t(`/checkout`))
                            }
                            ,
                            disabled: i.length === 0,
                            className: `flex-1 py-3 rounded-xl bg-[#9d7bff] text-white font-bold hover:bg-[#b79fff] transition-colors shadow-[0_0_20px_rgba(157,123,255,0.3)] cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed whitespace-nowrap`,
                            children: n(`checkout`)
                        })]
                    })]
                })]
            })]
        }), (0,
        X.jsx)(Fr, {})]
    }) : (0,
    X.jsx)(`div`, {
        className: `min-h-screen bg-[#0a0a0f] text-white flex items-center justify-center`,
        dir: r.dir(),
        children: (0,
        X.jsxs)(`div`, {
            className: `text-center`,
            children: [(0,
            X.jsx)(`h2`, {
                className: `text-2xl font-bold mb-4`,
                children: n(`noResults`)
            }), (0,
            X.jsx)(`button`, {
                onClick: () => t(`/`),
                className: `text-[#9d7bff] hover:text-[#b79fff] transition-colors`,
                children: n(`backToRestaurants`)
            })]
        })
    })
}
function ni() {
    let e = G()
      , {t, i18n: n} = j(`common`)
      , {cart: r, refresh: i} = $r()
      , [a,o] = (0,
    v.useState)(!1)
      , [s,c] = (0,
    v.useState)(``)
      , [l,u] = (0,
    v.useState)(`idle`)
      , [d,f] = (0,
    v.useState)({
        fullName: ``,
        phone: ``,
        address: ``,
        floor: ``,
        apartment: ``,
        block: ``,
        paymentMethod: `cash`,
        tip: ``,
        notes: ``
    })
      , p = Xr()
      , m = Zr()
      , h = parseFloat(d.tip) || 0
      , g = m + h
      , _ = n.language === `ar`
      , y = n.language
      , b = e => typeof e == `string` ? e : e[y] || e.en
      , x = (e, t) => {
        f(n => ({
            ...n,
            [e]: t
        }))
    }
      , S = async e => {}
    ;
    return r.length === 0 && !a ? (0,
    X.jsx)(`div`, {
        className: `min-h-screen bg-[#0a0a0f] text-white flex items-center justify-center`,
        dir: n.dir(),
        children: (0,
        X.jsxs)(`div`, {
            className: `text-center max-w-md mx-auto px-4`,
            children: [(0,
            X.jsx)(wr, {
                size: 64,
                className: `mx-auto mb-6 text-gray-600`
            }), (0,
            X.jsx)(`h2`, {
                className: `text-2xl font-bold mb-3`,
                children: t(`emptyCartMsg`)
            }), (0,
            X.jsx)(`p`, {
                className: `text-gray-400 mb-6`,
                children: t(`browseRestaurants`)
            }), (0,
            X.jsx)(`button`, {
                onClick: () => e(`/`),
                className: `px-6 py-3 rounded-xl bg-[#9d7bff] text-white font-bold hover:bg-[#b79fff] transition-colors shadow-[0_0_20px_rgba(157,123,255,0.3)] cursor-pointer`,
                children: t(`browseRestaurants`)
            })]
        })
    }) : a ? (0,
    X.jsx)(`div`, {
        className: `min-h-screen bg-[#0a0a0f] text-white flex items-center justify-center`,
        dir: n.dir(),
        children: (0,
        X.jsxs)(`div`, {
            className: `text-center max-w-md mx-auto px-4`,
            children: [(0,
            X.jsx)(`div`, {
                className: `w-20 h-20 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mx-auto mb-6`,
                children: (0,
                X.jsx)(sr, {
                    size: 40
                })
            }), (0,
            X.jsx)(`h2`, {
                className: `text-2xl font-bold mb-2`,
                children: t(`orderSuccess`)
            }), (0,
            X.jsx)(`p`, {
                className: `text-gray-400 mb-6`,
                children: t(`thankYouOrder`)
            }), l === `sent` && (0,
            X.jsxs)(`div`, {
                className: `flex items-center justify-center gap-2 text-green-400 text-sm mb-4`,
                children: [(0,
                X.jsx)(Cr, {
                    size: 14
                }), ` `, t(`telegramSent`)]
            }), l === `skipped` && (0,
            X.jsxs)(`div`, {
                className: `flex items-center justify-center gap-2 text-yellow-400/80 text-sm mb-4`,
                children: [(0,
                X.jsx)(or, {
                    size: 14
                }), ` `, t(`telegramSkipped`)]
            }), (0,
            X.jsxs)(`div`, {
                className: `bg-[#12121a] rounded-xl p-5 border border-white/[0.06] mb-6`,
                children: [(0,
                X.jsx)(`p`, {
                    className: `text-sm text-gray-400 mb-2`,
                    children: t(`trackingCode`)
                }), (0,
                X.jsx)(`p`, {
                    className: `text-3xl font-mono font-bold text-[#9d7bff]`,
                    children: s
                })]
            }), (0,
            X.jsxs)(`div`, {
                className: `flex gap-3 justify-center`,
                children: [(0,
                X.jsx)(`button`, {
                    onClick: () => e(`/track`),
                    className: `px-6 py-3 rounded-xl bg-[#9d7bff] text-white font-bold hover:bg-[#b79fff] transition-colors shadow-[0_0_20px_rgba(157,123,255,0.3)] cursor-pointer whitespace-nowrap`,
                    children: t(`trackOrder`)
                }), (0,
                X.jsx)(`button`, {
                    onClick: () => e(`/`),
                    className: `px-6 py-3 rounded-xl bg-white/[0.05] text-white font-bold hover:bg-white/10 transition-colors border border-white/10 cursor-pointer whitespace-nowrap`,
                    children: t(`backToHome`)
                })]
            })]
        })
    }) : (0,
    X.jsxs)(`div`, {
        className: `min-h-screen bg-[#0a0a0f] text-white`,
        dir: n.dir(),
        children: [(0,
        X.jsx)(Pr, {}), (0,
        X.jsxs)(`main`, {
            className: `max-w-5xl mx-auto px-4 md:px-6 py-8`,
            children: [(0,
            X.jsxs)(`button`, {
                onClick: () => e(-1),
                className: `flex items-center gap-2 text-[#9d7bff] hover:text-white transition-colors mb-6 cursor-pointer`,
                children: [(0,
                X.jsx)(nr, {
                    className: _ ? `rotate-180` : ``,
                    size: 18
                }), ` `, t(`backToRestaurants`)]
            }), (0,
            X.jsx)(`h1`, {
                className: `text-2xl md:text-3xl font-bold mb-8`,
                children: t(`checkoutTitle`)
            }), (0,
            X.jsxs)(`div`, {
                className: `grid grid-cols-1 lg:grid-cols-5 gap-8`,
                children: [(0,
                X.jsx)(`div`, {
                    className: `lg:col-span-3`,
                    children: (0,
                    X.jsxs)(`form`, {
                        onSubmit: async e => {
                            if (e.preventDefault(),
                            r.length === 0)
                                return;
                            let t = `Foodi-${Math.floor(Math.random() * 90 + 10)}`;
                            c(t),
                            await S(t),
                            Yr(),
                            i(),
                            o(!0)
                        }
                        ,
                        className: `space-y-5`,
                        children: [(0,
                        X.jsxs)(`div`, {
                            children: [(0,
                            X.jsxs)(`label`, {
                                className: `flex items-center gap-2 text-sm text-gray-300 mb-2`,
                                children: [(0,
                                X.jsx)(kr, {
                                    size: 16,
                                    className: `text-[#9d7bff]`
                                }), ` `, t(`fullName`)]
                            }), (0,
                            X.jsx)(`input`, {
                                required: !0,
                                value: d.fullName,
                                onChange: e => x(`fullName`, e.target.value),
                                className: `w-full bg-[#12121a] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#9d7bff]/50 focus:shadow-[0_0_20px_rgba(157,123,255,0.15)] transition-all ${_ ? `text-right` : `text-left`}`,
                                placeholder: _ ? `محمد أحمد` : `John Doe`
                            })]
                        }), (0,
                        X.jsxs)(`div`, {
                            children: [(0,
                            X.jsxs)(`label`, {
                                className: `flex items-center gap-2 text-sm text-gray-300 mb-2`,
                                children: [(0,
                                X.jsx)(br, {
                                    size: 16,
                                    className: `text-[#9d7bff]`
                                }), ` `, t(`phone`)]
                            }), (0,
                            X.jsx)(`input`, {
                                required: !0,
                                type: `tel`,
                                value: d.phone,
                                onChange: e => x(`phone`, e.target.value),
                                className: `w-full bg-[#12121a] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#9d7bff]/50 focus:shadow-[0_0_20px_rgba(157,123,255,0.15)] transition-all ${_ ? `text-right` : `text-left`}`,
                                placeholder: `+965 50123456`
                            })]
                        }), (0,
                        X.jsxs)(`div`, {
                            children: [(0,
                            X.jsxs)(`label`, {
                                className: `flex items-center gap-2 text-sm text-gray-300 mb-2`,
                                children: [(0,
                                X.jsx)(hr, {
                                    size: 16,
                                    className: `text-[#9d7bff]`
                                }), ` `, t(`address`)]
                            }), (0,
                            X.jsx)(`input`, {
                                required: !0,
                                value: d.address,
                                onChange: e => x(`address`, e.target.value),
                                className: `w-full bg-[#12121a] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#9d7bff]/50 focus:shadow-[0_0_20px_rgba(157,123,255,0.15)] transition-all ${_ ? `text-right` : `text-left`}`,
                                placeholder: _ ? `السالمية، شارع الخليج` : `Salmya, Gulf Street`
                            })]
                        }), (0,
                        X.jsxs)(`div`, {
                            className: `grid grid-cols-3 gap-3`,
                            children: [(0,
                            X.jsxs)(`div`, {
                                children: [(0,
                                X.jsxs)(`label`, {
                                    className: `flex items-center gap-2 text-sm text-gray-300 mb-2`,
                                    children: [(0,
                                    X.jsx)(mr, {
                                        size: 16,
                                        className: `text-[#9d7bff]`
                                    }), ` `, t(`floor`)]
                                }), (0,
                                X.jsx)(`input`, {
                                    value: d.floor,
                                    onChange: e => x(`floor`, e.target.value),
                                    className: `w-full bg-[#12121a] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#9d7bff]/50 focus:shadow-[0_0_20px_rgba(157,123,255,0.15)] transition-all text-center`,
                                    placeholder: `3`
                                })]
                            }), (0,
                            X.jsxs)(`div`, {
                                children: [(0,
                                X.jsxs)(`label`, {
                                    className: `flex items-center gap-2 text-sm text-gray-300 mb-2`,
                                    children: [(0,
                                    X.jsx)(pr, {
                                        size: 16,
                                        className: `text-[#9d7bff]`
                                    }), ` `, t(`apartment`)]
                                }), (0,
                                X.jsx)(`input`, {
                                    value: d.apartment,
                                    onChange: e => x(`apartment`, e.target.value),
                                    className: `w-full bg-[#12121a] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#9d7bff]/50 focus:shadow-[0_0_20px_rgba(157,123,255,0.15)] transition-all text-center`,
                                    placeholder: `12`
                                })]
                            }), (0,
                            X.jsxs)(`div`, {
                                children: [(0,
                                X.jsxs)(`label`, {
                                    className: `flex items-center gap-2 text-sm text-gray-300 mb-2`,
                                    children: [(0,
                                    X.jsx)(hr, {
                                        size: 16,
                                        className: `text-[#9d7bff]`
                                    }), ` `, t(`block`)]
                                }), (0,
                                X.jsx)(`input`, {
                                    value: d.block,
                                    onChange: e => x(`block`, e.target.value),
                                    className: `w-full bg-[#12121a] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#9d7bff]/50 focus:shadow-[0_0_20px_rgba(157,123,255,0.15)] transition-all text-center`,
                                    placeholder: `4A`
                                })]
                            })]
                        }), (0,
                        X.jsxs)(`div`, {
                            children: [(0,
                            X.jsxs)(`label`, {
                                className: `flex items-center gap-2 text-sm text-gray-300 mb-3`,
                                children: [(0,
                                X.jsx)(ur, {
                                    size: 16,
                                    className: `text-[#9d7bff]`
                                }), ` `, t(`paymentMethod`)]
                            }), (0,
                            X.jsxs)(`div`, {
                                className: `flex gap-3`,
                                children: [(0,
                                X.jsxs)(`button`, {
                                    type: `button`,
                                    onClick: () => x(`paymentMethod`, `cash`),
                                    className: `flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border transition-all cursor-pointer whitespace-nowrap ${d.paymentMethod === `cash` ? `bg-[#9d7bff]/10 border-[#9d7bff]/50 text-[#9d7bff] shadow-[0_0_15px_rgba(157,123,255,0.15)]` : `bg-[#12121a] border-white/[0.08] text-gray-400 hover:border-white/20`}`,
                                    children: [(0,
                                    X.jsx)(dr, {
                                        size: 18
                                    }), ` `, t(`cash`)]
                                }), (0,
                                X.jsxs)(`button`, {
                                    type: `button`,
                                    onClick: () => x(`paymentMethod`, `card`),
                                    className: `flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border transition-all cursor-pointer whitespace-nowrap ${d.paymentMethod === `card` ? `bg-[#9d7bff]/10 border-[#9d7bff]/50 text-[#9d7bff] shadow-[0_0_15px_rgba(157,123,255,0.15)]` : `bg-[#12121a] border-white/[0.08] text-gray-400 hover:border-white/20`}`,
                                    children: [(0,
                                    X.jsx)(ur, {
                                        size: 18
                                    }), ` `, t(`card`)]
                                })]
                            })]
                        }), (0,
                        X.jsxs)(`div`, {
                            children: [(0,
                            X.jsxs)(`label`, {
                                className: `flex items-center gap-2 text-sm text-gray-300 mb-2`,
                                children: [(0,
                                X.jsx)(dr, {
                                    size: 16,
                                    className: `text-[#9d7bff]`
                                }), ` `, t(`tip`)]
                            }), (0,
                            X.jsx)(`input`, {
                                type: `number`,
                                step: `0.25`,
                                value: d.tip,
                                onChange: e => x(`tip`, e.target.value),
                                className: `w-full bg-[#12121a] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#9d7bff]/50 focus:shadow-[0_0_20px_rgba(157,123,255,0.15)] transition-all ${_ ? `text-right` : `text-left`}`,
                                placeholder: `0.500`
                            })]
                        }), (0,
                        X.jsxs)(`div`, {
                            children: [(0,
                            X.jsxs)(`label`, {
                                className: `flex items-center gap-2 text-sm text-gray-300 mb-2`,
                                children: [(0,
                                X.jsx)(gr, {
                                    size: 16,
                                    className: `text-[#9d7bff]`
                                }), ` `, t(`notes`)]
                            }), (0,
                            X.jsx)(`textarea`, {
                                value: d.notes,
                                onChange: e => x(`notes`, e.target.value),
                                rows: 3,
                                className: `w-full bg-[#12121a] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#9d7bff]/50 focus:shadow-[0_0_20px_rgba(157,123,255,0.15)] transition-all resize-none ${_ ? `text-right` : `text-left`}`,
                                placeholder: _ ? `ملاحظات خاصة بالطلب...` : `Special instructions for your order...`
                            })]
                        }), (0,
                        X.jsx)(`button`, {
                            type: `submit`,
                            className: `w-full py-4 rounded-xl bg-[#9d7bff] text-white font-bold text-lg hover:bg-[#b79fff] transition-all shadow-[0_0_30px_rgba(157,123,255,0.3)] cursor-pointer mt-4`,
                            children: t(`confirmOrder`)
                        })]
                    })
                }), (0,
                X.jsx)(`div`, {
                    className: `lg:col-span-2`,
                    children: (0,
                    X.jsxs)(`div`, {
                        className: `bg-[#12121a] rounded-xl border border-white/[0.06] p-5 sticky top-6`,
                        children: [(0,
                        X.jsxs)(`h3`, {
                            className: `text-lg font-bold mb-4 flex items-center gap-2`,
                            children: [(0,
                            X.jsx)(wr, {
                                size: 20,
                                className: `text-[#9d7bff]`
                            }), ` `, t(`orderSummary`)]
                        }), p && (0,
                        X.jsxs)(`div`, {
                            className: `mb-4 pb-4 border-b border-white/10`,
                            children: [(0,
                            X.jsx)(`p`, {
                                className: `text-sm text-gray-400`,
                                children: t(`restaurantLabel`)
                            }), (0,
                            X.jsx)(`p`, {
                                className: `font-bold text-white`,
                                children: Q(p.name, y)
                            })]
                        }), (0,
                        X.jsx)(`div`, {
                            className: `space-y-3 mb-4 pb-4 border-b border-white/10`,
                            children: r.map(e => (0,
                            X.jsxs)(`div`, {
                                className: `flex items-center justify-between text-sm`,
                                children: [(0,
                                X.jsxs)(`div`, {
                                    className: `flex items-center gap-2`,
                                    children: [(0,
                                    X.jsx)(`img`, {
                                        src: e.image,
                                        alt: b(e.name),
                                        className: `w-8 h-8 rounded object-cover`
                                    }), (0,
                                    X.jsxs)(`span`, {
                                        className: `text-gray-300`,
                                        children: [b(e.name), ` `, (0,
                                        X.jsxs)(`span`, {
                                            className: `text-gray-500`,
                                            children: [`× `, e.quantity]
                                        })]
                                    })]
                                }), (0,
                                X.jsxs)(`span`, {
                                    className: `text-[#9d7bff] font-medium`,
                                    children: [(e.price * e.quantity).toFixed(2), ` `, t(`currency`)]
                                })]
                            }, e.menuItemId))
                        }), (0,
                        X.jsxs)(`div`, {
                            className: `space-y-2 text-sm`,
                            children: [(0,
                            X.jsxs)(`div`, {
                                className: `flex justify-between text-gray-400`,
                                children: [(0,
                                X.jsx)(`span`, {
                                    children: t(`subtotal`)
                                }), (0,
                                X.jsxs)(`span`, {
                                    children: [m.toFixed(2), ` `, t(`currency`)]
                                })]
                            }), h > 0 && (0,
                            X.jsxs)(`div`, {
                                className: `flex justify-between text-gray-400`,
                                children: [(0,
                                X.jsx)(`span`, {
                                    children: t(`tip`)
                                }), (0,
                                X.jsxs)(`span`, {
                                    children: [h.toFixed(2), ` `, t(`currency`)]
                                })]
                            }), (0,
                            X.jsxs)(`div`, {
                                className: `flex justify-between text-white font-bold text-base pt-2 border-t border-white/10`,
                                children: [(0,
                                X.jsx)(`span`, {
                                    children: t(`grandTotal`)
                                }), (0,
                                X.jsxs)(`span`, {
                                    className: `text-[#9d7bff]`,
                                    children: [g.toFixed(2), ` `, t(`currency`)]
                                })]
                            })]
                        }), d.paymentMethod === `cash` && (0,
                        X.jsxs)(`div`, {
                            className: `mt-4 p-3 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-xs text-center flex items-center justify-center gap-2`,
                            children: [(0,
                            X.jsx)(`div`, {
                                className: `w-4 h-4 flex items-center justify-center`,
                                children: (0,
                                X.jsx)(`i`, {
                                    className: `ri-hand-coin-line text-sm`
                                })
                            }), t(`cashOnDelivery`)]
                        }), d.paymentMethod === `card` && (0,
                        X.jsxs)(`div`, {
                            className: `mt-4 p-3 rounded-lg bg-[#9d7bff]/10 border border-[#9d7bff]/20 text-[#9d7bff] text-xs text-center flex items-center justify-center gap-2`,
                            children: [(0,
                            X.jsx)(`div`, {
                                className: `w-4 h-4 flex items-center justify-center`,
                                children: (0,
                                X.jsx)(`i`, {
                                    className: `ri-secure-payment-line text-sm`
                                })
                            }), t(`cardPayment`)]
                        })]
                    })
                })]
            })]
        }), (0,
        X.jsx)(Fr, {})]
    })
}
var ri = [{
    trackingCode: `Foodi-18`,
    restaurantId: `1`,
    items: [{
        name: `Classic Burger`,
        quantity: 2,
        price: 2.5
    }, {
        name: `French Fries`,
        quantity: 1,
        price: 1
    }],
    total: 6,
    status: `preparing`,
    customerName: `Ahmed Mohamed`,
    phone: `+965 50123456`,
    address: `Salmiya, Gulf Street, Tower of Faith`,
    createdAt: `2026-05-24 14:30`
}, {
    trackingCode: `Foodi-17`,
    restaurantId: `2`,
    items: [{
        name: `Pepperoni Pizza`,
        quantity: 1,
        price: 3.5
    }, {
        name: `Chicken Wings`,
        quantity: 2,
        price: 2.5
    }],
    total: 8.5,
    status: `onTheWay`,
    customerName: `Sarah Abdullah`,
    phone: `+965 50987654`,
    address: `Hawally, Tunis Street, Al-Ahmadiyya Complex`,
    createdAt: `2026-05-24 13:15`
}, {
    trackingCode: `Foodi-16`,
    restaurantId: `3`,
    items: [{
        name: `Chicken Shawarma`,
        quantity: 3,
        price: 1.5
    }, {
        name: `Shawarma Fattah`,
        quantity: 1,
        price: 3.5
    }],
    total: 8,
    status: `delivered`,
    customerName: `Khaled Ali`,
    phone: `+965 55551234`,
    address: `Jahra, Riyadh Street, Block 3`,
    createdAt: `2026-05-24 11:00`
}]
  , ii = [`pending`, `preparing`, `onTheWay`, `delivered`];
function ai() {
    G();
    let {t: e, i18n: t} = j(`common`)
      , [n,r] = (0,
    v.useState)(``)
      , [i,a] = (0,
    v.useState)(null)
      , [o,s] = (0,
    v.useState)(!1)
      , c = t.language === `ar`
      , l = {
        pending: {
            label: e(`pending`),
            icon: (0,
            X.jsx)(lr, {
                size: 18
            }),
            color: `text-yellow-400`,
            bg: `bg-yellow-400/20`
        },
        preparing: {
            label: e(`preparing`),
            icon: (0,
            X.jsx)(ir, {
                size: 18
            }),
            color: `text-blue-400`,
            bg: `bg-blue-400/20`
        },
        onTheWay: {
            label: e(`onTheWay`),
            icon: (0,
            X.jsx)(Or, {
                size: 18
            }),
            color: `text-[#9d7bff]`,
            bg: `bg-[#9d7bff]/20`
        },
        delivered: {
            label: e(`delivered`),
            icon: (0,
            X.jsx)(sr, {
                size: 18
            }),
            color: `text-green-400`,
            bg: `bg-green-400/20`
        }
    }
      , u = () => {
        s(!0),
        a(ri.find(e => e.trackingCode.toLowerCase() === n.trim().toLowerCase()) || null)
    }
      , d = e => ii.indexOf(e);
    return (0,
    X.jsxs)(`div`, {
        className: `min-h-screen bg-[#0a0a0f] text-white`,
        dir: t.dir(),
        children: [(0,
        X.jsx)(Pr, {}), (0,
        X.jsxs)(`main`, {
            className: `max-w-3xl mx-auto px-4 md:px-6 py-12`,
            children: [(0,
            X.jsxs)(`div`, {
                className: `text-center mb-10`,
                children: [(0,
                X.jsx)(`h1`, {
                    className: `text-3xl md:text-4xl font-bold mb-3`,
                    children: e(`trackTitle`)
                }), (0,
                X.jsx)(`p`, {
                    className: `text-gray-400 mb-8`,
                    children: e(`trackDesc`)
                }), (0,
                X.jsxs)(`div`, {
                    className: `flex gap-3 max-w-lg mx-auto`,
                    children: [(0,
                    X.jsxs)(`div`, {
                        className: `relative flex-1`,
                        children: [(0,
                        X.jsx)(Sr, {
                            className: `absolute top-1/2 -translate-y-1/2 text-gray-400 ${c ? `right-4` : `left-4`}`,
                            size: 20
                        }), (0,
                        X.jsx)(`input`, {
                            type: `text`,
                            value: n,
                            onChange: e => r(e.target.value),
                            placeholder: e(`enterTrackingCode`),
                            className: `w-full bg-[#12121a] border border-white/[0.08] rounded-xl ${c ? `pr-12 pl-4 text-right` : `pl-12 pr-4 text-left`} py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#9d7bff]/50 focus:shadow-[0_0_20px_rgba(157,123,255,0.15)] transition-all`,
                            onKeyDown: e => e.key === `Enter` && u()
                        })]
                    }), (0,
                    X.jsxs)(`button`, {
                        onClick: u,
                        className: `px-6 py-3.5 rounded-xl bg-[#9d7bff] text-white font-bold hover:bg-[#b79fff] transition-colors shadow-[0_0_20px_rgba(157,123,255,0.3)] whitespace-nowrap cursor-pointer inline-flex items-center gap-2`,
                        children: [(0,
                        X.jsx)(`div`, {
                            className: `w-4 h-4 flex items-center justify-center`,
                            children: (0,
                            X.jsx)(`i`, {
                                className: `ri-search-line text-sm`
                            })
                        }), e(`trackButton`)]
                    })]
                })]
            }), o && !i && (0,
            X.jsxs)(`div`, {
                className: `text-center py-12 bg-[#12121a] rounded-2xl border border-white/[0.06]`,
                children: [(0,
                X.jsx)(vr, {
                    size: 48,
                    className: `text-gray-600 mx-auto mb-4`
                }), (0,
                X.jsx)(`h3`, {
                    className: `text-xl font-bold mb-2`,
                    children: e(`orderNotFound`)
                }), (0,
                X.jsx)(`p`, {
                    className: `text-gray-400`,
                    children: e(`checkTrackingCode`)
                })]
            }), i && (0,
            X.jsxs)(`div`, {
                className: `space-y-6`,
                children: [(0,
                X.jsxs)(`div`, {
                    className: `bg-[#12121a] rounded-2xl p-6 border border-white/[0.06]`,
                    children: [(0,
                    X.jsxs)(`div`, {
                        className: `flex items-center justify-between mb-6`,
                        children: [(0,
                        X.jsx)(`span`, {
                            className: `text-sm text-gray-400`,
                            children: e(`orderNumber`)
                        }), (0,
                        X.jsx)(`span`, {
                            className: `font-mono font-bold text-[#9d7bff]`,
                            children: i.trackingCode
                        })]
                    }), (0,
                    X.jsxs)(`div`, {
                        className: `relative`,
                        children: [(0,
                        X.jsx)(`div`, {
                            className: `absolute top-[18px] right-0 left-0 h-1 bg-white/[0.08] rounded-full`
                        }), (0,
                        X.jsx)(`div`, {
                            className: `absolute top-[18px] h-1 bg-[#9d7bff] rounded-full transition-all duration-500`,
                            style: {
                                width: `${d(i.status) / (ii.length - 1) * 100}%`,
                                [c ? `right` : `left`]: 0
                            }
                        }), (0,
                        X.jsx)(`div`, {
                            className: `relative flex justify-between`,
                            children: ii.map( (e, t) => {
                                let n = l[e]
                                  , r = t <= d(i.status)
                                  , a = e === i.status;
                                return (0,
                                X.jsxs)(`div`, {
                                    className: `flex flex-col items-center gap-2`,
                                    children: [(0,
                                    X.jsx)(`div`, {
                                        className: `w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${r ? `${n.bg} ${n.color} shadow-[0_0_15px_rgba(157,123,255,0.3)]` : `bg-white/[0.05] text-gray-600`} ${a ? `ring-2 ring-[#9d7bff]/50 ring-offset-2 ring-offset-[#12121a]` : ``}`,
                                        children: n.icon
                                    }), (0,
                                    X.jsx)(`span`, {
                                        className: `text-xs font-medium ${r ? n.color : `text-gray-600`}`,
                                        children: n.label
                                    })]
                                }, e)
                            }
                            )
                        })]
                    })]
                }), (0,
                X.jsxs)(`div`, {
                    className: `bg-[#12121a] rounded-2xl p-6 border border-white/[0.06]`,
                    children: [(0,
                    X.jsxs)(`h3`, {
                        className: `text-xl font-bold mb-5 flex items-center gap-2`,
                        children: [(0,
                        X.jsx)(vr, {
                            className: `text-[#9d7bff]`,
                            size: 22
                        }), ` `, e(`orderDetails`)]
                    }), (0,
                    X.jsxs)(`div`, {
                        className: `grid grid-cols-1 md:grid-cols-2 gap-4 mb-6`,
                        children: [(0,
                        X.jsxs)(`div`, {
                            className: `flex items-center gap-3 text-sm`,
                            children: [(0,
                            X.jsx)(`div`, {
                                className: `w-10 h-10 rounded-lg bg-white/[0.05] flex items-center justify-center text-[#9d7bff]`,
                                children: (0,
                                X.jsx)(`div`, {
                                    className: `w-5 h-5 flex items-center justify-center`,
                                    children: (0,
                                    X.jsx)(`i`, {
                                        className: `ri-store-2-line text-lg`
                                    })
                                })
                            }), (0,
                            X.jsxs)(`div`, {
                                children: [(0,
                                X.jsx)(`p`, {
                                    className: `text-gray-400 text-xs`,
                                    children: e(`restaurant`)
                                }), (0,
                                X.jsx)(`p`, {
                                    className: `font-medium`,
                                    children: Z.find(e => e.id === i.restaurantId)?.name || `-`
                                })]
                            })]
                        }), (0,
                        X.jsxs)(`div`, {
                            className: `flex items-center gap-3 text-sm`,
                            children: [(0,
                            X.jsx)(`div`, {
                                className: `w-10 h-10 rounded-lg bg-white/[0.05] flex items-center justify-center text-[#9d7bff]`,
                                children: (0,
                                X.jsx)(hr, {
                                    size: 18
                                })
                            }), (0,
                            X.jsxs)(`div`, {
                                children: [(0,
                                X.jsx)(`p`, {
                                    className: `text-gray-400 text-xs`,
                                    children: e(`address`)
                                }), (0,
                                X.jsx)(`p`, {
                                    className: `font-medium truncate`,
                                    children: i.address
                                })]
                            })]
                        }), (0,
                        X.jsxs)(`div`, {
                            className: `flex items-center gap-3 text-sm`,
                            children: [(0,
                            X.jsx)(`div`, {
                                className: `w-10 h-10 rounded-lg bg-white/[0.05] flex items-center justify-center text-[#9d7bff]`,
                                children: (0,
                                X.jsx)(br, {
                                    size: 18
                                })
                            }), (0,
                            X.jsxs)(`div`, {
                                children: [(0,
                                X.jsx)(`p`, {
                                    className: `text-gray-400 text-xs`,
                                    children: e(`phone`)
                                }), (0,
                                X.jsx)(`p`, {
                                    className: `font-medium`,
                                    children: i.phone
                                })]
                            })]
                        }), (0,
                        X.jsxs)(`div`, {
                            className: `flex items-center gap-3 text-sm`,
                            children: [(0,
                            X.jsx)(`div`, {
                                className: `w-10 h-10 rounded-lg bg-white/[0.05] flex items-center justify-center text-[#9d7bff]`,
                                children: (0,
                                X.jsx)(lr, {
                                    size: 18
                                })
                            }), (0,
                            X.jsxs)(`div`, {
                                children: [(0,
                                X.jsx)(`p`, {
                                    className: `text-gray-400 text-xs`,
                                    children: e(`orderTime`)
                                }), (0,
                                X.jsx)(`p`, {
                                    className: `font-medium`,
                                    children: i.createdAt
                                })]
                            })]
                        })]
                    }), (0,
                    X.jsxs)(`div`, {
                        className: `border-t border-white/[0.06] pt-4`,
                        children: [(0,
                        X.jsx)(`h4`, {
                            className: `font-bold mb-3 text-sm text-gray-400`,
                            children: e(`orderItems`)
                        }), (0,
                        X.jsx)(`div`, {
                            className: `space-y-2`,
                            children: i.items.map( (t, n) => (0,
                            X.jsxs)(`div`, {
                                className: `flex items-center justify-between py-2 px-3 rounded-lg bg-white/[0.03]`,
                                children: [(0,
                                X.jsxs)(`div`, {
                                    className: `flex items-center gap-3`,
                                    children: [(0,
                                    X.jsxs)(`span`, {
                                        className: `w-6 h-6 rounded-full bg-[#9d7bff]/20 text-[#9d7bff] text-xs flex items-center justify-center font-bold`,
                                        children: [t.quantity, `x`]
                                    }), (0,
                                    X.jsx)(`span`, {
                                        className: `text-sm`,
                                        children: t.name
                                    })]
                                }), (0,
                                X.jsxs)(`span`, {
                                    className: `text-sm text-gray-400`,
                                    children: [(t.price * t.quantity).toFixed(2), ` `, e(`currency`)]
                                })]
                            }, n))
                        }), (0,
                        X.jsxs)(`div`, {
                            className: `flex items-center justify-between mt-4 pt-4 border-t border-white/[0.06]`,
                            children: [(0,
                            X.jsx)(`span`, {
                                className: `font-bold`,
                                children: e(`total`)
                            }), (0,
                            X.jsxs)(`span`, {
                                className: `font-bold text-[#9d7bff] text-lg`,
                                children: [i.total.toFixed(2), ` `, e(`currency`)]
                            })]
                        })]
                    })]
                }), (0,
                X.jsx)(`div`, {
                    className: `flex items-center justify-center`,
                    children: (0,
                    X.jsxs)(`div`, {
                        className: `inline-flex items-center gap-2 px-5 py-2.5 rounded-full ${l[i.status].bg} ${l[i.status].color} font-medium`,
                        children: [l[i.status].icon, l[i.status].label]
                    })
                })]
            })]
        }), (0,
        X.jsx)(Fr, {})]
    })
}
var oi = [{
    id: `1`,
    trackingCode: `Foodi-18`,
    restaurantName: `Burger King`,
    customerName: `Ahmed Mohamed`,
    total: 6,
    status: `preparing`,
    items: 3,
    createdAt: `2026-05-24 14:30`
}, {
    id: `2`,
    trackingCode: `Foodi-17`,
    restaurantName: `Pizza Hut`,
    customerName: `Sarah Abdullah`,
    total: 8.5,
    status: `onTheWay`,
    items: 2,
    createdAt: `2026-05-24 13:15`
}, {
    id: `3`,
    trackingCode: `Foodi-16`,
    restaurantName: `Shawerma Al-Sham`,
    customerName: `Khaled Ali`,
    total: 8,
    status: `delivered`,
    items: 4,
    createdAt: `2026-05-24 11:00`
}, {
    id: `4`,
    trackingCode: `Foodi-15`,
    restaurantName: `Mashawi Al-Sultan`,
    customerName: `Noura Ahmed`,
    total: 12.5,
    status: `pending`,
    items: 2,
    createdAt: `2026-05-24 15:45`
}, {
    id: `5`,
    trackingCode: `Foodi-14`,
    restaurantName: `Sushi Master`,
    customerName: `Abdullah Salem`,
    total: 7.5,
    status: `delivered`,
    items: 3,
    createdAt: `2026-05-24 10:20`
}];
function si() {
    let e = G()
      , {t, i18n: n} = j(`common`)
      , r = n.language
      , [i,a] = (0,
    v.useState)(`orders`)
      , [o,s] = (0,
    v.useState)(oi)
      , [c,l] = (0,
    v.useState)(!1)
      , u = n.language === `ar`
      , d = {
        pending: {
            label: t(`pending`),
            icon: (0,
            X.jsx)(lr, {
                size: 14
            }),
            color: `text-yellow-400`,
            bg: `bg-yellow-400/10`
        },
        preparing: {
            label: t(`preparing`),
            icon: (0,
            X.jsx)(vr, {
                size: 14
            }),
            color: `text-blue-400`,
            bg: `bg-blue-400/10`
        },
        onTheWay: {
            label: t(`onTheWay`),
            icon: (0,
            X.jsx)(Or, {
                size: 14
            }),
            color: `text-[#9d7bff]`,
            bg: `bg-[#9d7bff]/10`
        },
        delivered: {
            label: t(`delivered`),
            icon: (0,
            X.jsx)(sr, {
                size: 14
            }),
            color: `text-green-400`,
            bg: `bg-green-400/10`
        }
    }
      , f = {
        totalOrders: o.length,
        todayOrders: o.filter(e => e.createdAt.startsWith(`2026-05-24`)).length,
        revenue: o.reduce( (e, t) => e + t.total, 0),
        activeRestaurants: Z.filter(e => e.isOpen).length
    }
      , p = (e, t) => {
        s(n => n.map(n => n.id === e ? {
            ...n,
            status: t
        } : n))
    }
      , m = [{
        key: `orders`,
        label: t(`adminOrders`),
        icon: (0,
        X.jsx)(cr, {
            size: 18
        })
    }, {
        key: `restaurants`,
        label: t(`adminRestaurants`),
        icon: (0,
        X.jsx)(pr, {
            size: 18
        })
    }, {
        key: `menu`,
        label: t(`adminMenu`),
        icon: (0,
        X.jsx)(wr, {
            size: 18
        })
    }]
      , h = [`pending`, `preparing`, `onTheWay`, `delivered`];
    return (0,
    X.jsxs)(`div`, {
        className: `min-h-screen bg-[#0a0a0f] text-white`,
        dir: n.dir(),
        children: [(0,
        X.jsx)(`header`, {
            className: `bg-[#12121a] border-b border-white/[0.06] px-6 py-4 sticky top-0 z-40`,
            children: (0,
            X.jsxs)(`div`, {
                className: `flex items-center justify-between max-w-7xl mx-auto`,
                children: [(0,
                X.jsxs)(`div`, {
                    className: `flex items-center gap-3`,
                    children: [(0,
                    X.jsx)(`div`, {
                        className: `w-10 h-10 rounded-xl bg-[#9d7bff] flex items-center justify-center shadow-[0_0_15px_rgba(157,123,255,0.3)]`,
                        children: (0,
                        X.jsx)(pr, {
                            className: `text-white`,
                            size: 20
                        })
                    }), (0,
                    X.jsxs)(`div`, {
                        children: [(0,
                        X.jsx)(`h1`, {
                            className: `font-bold text-lg`,
                            children: t(`adminPanel`)
                        }), (0,
                        X.jsx)(`p`, {
                            className: `text-xs text-gray-400`,
                            children: `Foodi Admin`
                        })]
                    })]
                }), (0,
                X.jsx)(`button`, {
                    onClick: () => e(`/`),
                    className: `text-sm text-gray-400 hover:text-white transition-colors cursor-pointer`,
                    children: t(`backToSite`)
                })]
            })
        }), (0,
        X.jsxs)(`div`, {
            className: `max-w-7xl mx-auto px-4 md:px-6 py-6`,
            children: [(0,
            X.jsx)(`div`, {
                className: `grid grid-cols-2 md:grid-cols-4 gap-4 mb-8`,
                children: [{
                    label: t(`totalOrders`),
                    value: f.totalOrders,
                    icon: (0,
                    X.jsx)(cr, {
                        size: 20
                    }),
                    color: `text-[#9d7bff]`,
                    bg: `bg-[#9d7bff]/10`
                }, {
                    label: t(`todayOrders`),
                    value: f.todayOrders,
                    icon: (0,
                    X.jsx)(Dr, {
                        size: 20
                    }),
                    color: `text-green-400`,
                    bg: `bg-green-400/10`
                }, {
                    label: t(`revenue`),
                    value: `${f.revenue.toFixed(2)} ${t(`currency`)}`,
                    icon: (0,
                    X.jsx)(dr, {
                        size: 20
                    }),
                    color: `text-yellow-400`,
                    bg: `bg-yellow-400/10`
                }, {
                    label: t(`activeRestaurants`),
                    value: f.activeRestaurants,
                    icon: (0,
                    X.jsx)(Ar, {
                        size: 20
                    }),
                    color: `text-blue-400`,
                    bg: `bg-blue-400/10`
                }].map( (e, t) => (0,
                X.jsxs)(`div`, {
                    className: `bg-[#12121a] rounded-xl p-4 border border-white/[0.06]`,
                    children: [(0,
                    X.jsx)(`div`, {
                        className: `w-10 h-10 rounded-lg ${e.bg} ${e.color} flex items-center justify-center mb-3`,
                        children: e.icon
                    }), (0,
                    X.jsx)(`p`, {
                        className: `text-2xl font-bold mb-1`,
                        children: e.value
                    }), (0,
                    X.jsx)(`p`, {
                        className: `text-xs text-gray-400`,
                        children: e.label
                    })]
                }, t))
            }), (0,
            X.jsx)(`div`, {
                className: `flex gap-2 mb-6 border-b border-white/[0.06] pb-1 overflow-x-auto`,
                children: m.map(e => (0,
                X.jsxs)(`button`, {
                    onClick: () => a(e.key),
                    className: `flex items-center gap-2 px-5 py-3 text-sm font-medium transition-all border-b-2 cursor-pointer whitespace-nowrap ${i === e.key ? `text-[#9d7bff] border-[#9d7bff]` : `text-gray-400 border-transparent hover:text-white`}`,
                    children: [e.icon, e.label]
                }, e.key))
            }), i === `orders` && (0,
            X.jsx)(`div`, {
                className: `bg-[#12121a] rounded-2xl border border-white/[0.06] overflow-hidden`,
                children: (0,
                X.jsx)(`div`, {
                    className: `overflow-x-auto`,
                    children: (0,
                    X.jsxs)(`table`, {
                        className: `w-full text-sm`,
                        children: [(0,
                        X.jsx)(`thead`, {
                            className: `bg-white/[0.03] text-gray-400`,
                            children: (0,
                            X.jsxs)(`tr`, {
                                children: [(0,
                                X.jsx)(`th`, {
                                    className: `${u ? `text-right` : `text-left`} px-4 py-3 font-medium`,
                                    children: t(`trackingCode`)
                                }), (0,
                                X.jsx)(`th`, {
                                    className: `${u ? `text-right` : `text-left`} px-4 py-3 font-medium`,
                                    children: t(`restaurant`)
                                }), (0,
                                X.jsx)(`th`, {
                                    className: `${u ? `text-right` : `text-left`} px-4 py-3 font-medium`,
                                    children: t(`fullName`)
                                }), (0,
                                X.jsx)(`th`, {
                                    className: `${u ? `text-right` : `text-left`} px-4 py-3 font-medium`,
                                    children: t(`items`)
                                }), (0,
                                X.jsx)(`th`, {
                                    className: `${u ? `text-right` : `text-left`} px-4 py-3 font-medium`,
                                    children: t(`total`)
                                }), (0,
                                X.jsx)(`th`, {
                                    className: `${u ? `text-right` : `text-left`} px-4 py-3 font-medium`,
                                    children: t(`status`)
                                }), (0,
                                X.jsx)(`th`, {
                                    className: `${u ? `text-right` : `text-left`} px-4 py-3 font-medium`,
                                    children: t(`orderTime`)
                                }), (0,
                                X.jsx)(`th`, {
                                    className: `${u ? `text-right` : `text-left`} px-4 py-3 font-medium`,
                                    children: t(`actions`)
                                })]
                            })
                        }), (0,
                        X.jsx)(`tbody`, {
                            className: `divide-y divide-white/[0.04]`,
                            children: o.map(e => (0,
                            X.jsxs)(`tr`, {
                                className: `hover:bg-white/[0.02] transition-colors`,
                                children: [(0,
                                X.jsx)(`td`, {
                                    className: `px-4 py-4 font-mono text-[#9d7bff]`,
                                    children: e.trackingCode
                                }), (0,
                                X.jsx)(`td`, {
                                    className: `px-4 py-4`,
                                    children: e.restaurantName
                                }), (0,
                                X.jsx)(`td`, {
                                    className: `px-4 py-4`,
                                    children: e.customerName
                                }), (0,
                                X.jsx)(`td`, {
                                    className: `px-4 py-4`,
                                    children: e.items
                                }), (0,
                                X.jsxs)(`td`, {
                                    className: `px-4 py-4 font-bold`,
                                    children: [e.total.toFixed(2), ` `, t(`currency`)]
                                }), (0,
                                X.jsx)(`td`, {
                                    className: `px-4 py-4`,
                                    children: (0,
                                    X.jsxs)(`span`, {
                                        className: `inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${d[e.status].bg} ${d[e.status].color}`,
                                        children: [d[e.status].icon, d[e.status].label]
                                    })
                                }), (0,
                                X.jsx)(`td`, {
                                    className: `px-4 py-4 text-gray-400`,
                                    children: e.createdAt
                                }), (0,
                                X.jsx)(`td`, {
                                    className: `px-4 py-4`,
                                    children: (0,
                                    X.jsx)(`select`, {
                                        value: e.status,
                                        onChange: t => p(e.id, t.target.value),
                                        className: `bg-[#0a0a0f] border border-white/[0.08] rounded-lg px-3 py-1.5 text-xs focus:outline-none focus:border-[#9d7bff]/30 cursor-pointer`,
                                        children: h.map(e => (0,
                                        X.jsx)(`option`, {
                                            value: e,
                                            children: d[e].label
                                        }, e))
                                    })
                                })]
                            }, e.id))
                        })]
                    })
                })
            }), i === `restaurants` && (0,
            X.jsxs)(`div`, {
                className: `space-y-4`,
                children: [(0,
                X.jsxs)(`div`, {
                    className: `flex justify-between items-center`,
                    children: [(0,
                    X.jsx)(`h2`, {
                        className: `text-lg font-bold`,
                        children: t(`adminRestaurants`)
                    }), (0,
                    X.jsxs)(`button`, {
                        onClick: () => l(!c),
                        className: `flex items-center gap-2 px-4 py-2 rounded-lg bg-[#9d7bff] text-white text-sm font-medium hover:bg-[#b79fff] transition-colors cursor-pointer`,
                        children: [(0,
                        X.jsx)(xr, {
                            size: 16
                        }), ` `, t(`addRestaurant`)]
                    })]
                }), c && (0,
                X.jsxs)(`div`, {
                    className: `bg-[#12121a] rounded-xl p-5 border border-white/[0.06] mb-4`,
                    children: [(0,
                    X.jsx)(`h3`, {
                        className: `font-bold mb-4`,
                        children: t(`addRestaurant`)
                    }), (0,
                    X.jsxs)(`div`, {
                        className: `grid grid-cols-1 md:grid-cols-2 gap-4`,
                        children: [(0,
                        X.jsx)(`input`, {
                            placeholder: t(`name`),
                            className: `bg-[#0a0a0f] border border-white/[0.08] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#9d7bff]/30`
                        }), (0,
                        X.jsx)(`input`, {
                            placeholder: t(`category`),
                            className: `bg-[#0a0a0f] border border-white/[0.08] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#9d7bff]/30`
                        }), (0,
                        X.jsx)(`input`, {
                            placeholder: `Delivery time (e.g. 25-35)`,
                            className: `bg-[#0a0a0f] border border-white/[0.08] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#9d7bff]/30`
                        }), (0,
                        X.jsx)(`input`, {
                            type: `number`,
                            step: `0.1`,
                            max: `5`,
                            placeholder: `Rating (0-5)`,
                            className: `bg-[#0a0a0f] border border-white/[0.08] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#9d7bff]/30`
                        })]
                    }), (0,
                    X.jsxs)(`div`, {
                        className: `flex gap-3 mt-4`,
                        children: [(0,
                        X.jsx)(`button`, {
                            className: `px-5 py-2 rounded-lg bg-[#9d7bff] text-white text-sm font-medium hover:bg-[#b79fff] transition-colors cursor-pointer`,
                            children: t(`save`)
                        }), (0,
                        X.jsx)(`button`, {
                            onClick: () => l(!1),
                            className: `px-5 py-2 rounded-lg bg-white/[0.05] text-gray-400 text-sm font-medium hover:bg-white/10 transition-colors cursor-pointer`,
                            children: t(`cancel`)
                        })]
                    })]
                }), (0,
                X.jsx)(`div`, {
                    className: `bg-[#12121a] rounded-2xl border border-white/[0.06] overflow-hidden`,
                    children: (0,
                    X.jsx)(`div`, {
                        className: `overflow-x-auto`,
                        children: (0,
                        X.jsxs)(`table`, {
                            className: `w-full text-sm`,
                            children: [(0,
                            X.jsx)(`thead`, {
                                className: `bg-white/[0.03] text-gray-400`,
                                children: (0,
                                X.jsxs)(`tr`, {
                                    children: [(0,
                                    X.jsx)(`th`, {
                                        className: `${u ? `text-right` : `text-left`} px-4 py-3 font-medium`,
                                        children: t(`restaurant`)
                                    }), (0,
                                    X.jsx)(`th`, {
                                        className: `${u ? `text-right` : `text-left`} px-4 py-3 font-medium`,
                                        children: t(`category`)
                                    }), (0,
                                    X.jsx)(`th`, {
                                        className: `${u ? `text-right` : `text-left`} px-4 py-3 font-medium`,
                                        children: t(`rating`)
                                    }), (0,
                                    X.jsx)(`th`, {
                                        className: `${u ? `text-right` : `text-left`} px-4 py-3 font-medium`,
                                        children: t(`deliveryTime`)
                                    }), (0,
                                    X.jsx)(`th`, {
                                        className: `${u ? `text-right` : `text-left`} px-4 py-3 font-medium`,
                                        children: t(`status`)
                                    }), (0,
                                    X.jsx)(`th`, {
                                        className: `${u ? `text-right` : `text-left`} px-4 py-3 font-medium`,
                                        children: t(`actions`)
                                    })]
                                })
                            }), (0,
                            X.jsx)(`tbody`, {
                                className: `divide-y divide-white/[0.04]`,
                                children: Z.map(e => (0,
                                X.jsxs)(`tr`, {
                                    className: `hover:bg-white/[0.02] transition-colors`,
                                    children: [(0,
                                    X.jsx)(`td`, {
                                        className: `px-4 py-4`,
                                        children: (0,
                                        X.jsxs)(`div`, {
                                            className: `flex items-center gap-3`,
                                            children: [(0,
                                            X.jsx)(`img`, {
                                                src: e.image,
                                                alt: Q(e.name, r),
                                                className: `w-10 h-10 rounded-lg object-cover`
                                            }), (0,
                                            X.jsx)(`span`, {
                                                className: `font-medium`,
                                                children: Q(e.name, r)
                                            })]
                                        })
                                    }), (0,
                                    X.jsx)(`td`, {
                                        className: `px-4 py-4`,
                                        children: t(`category_` + e.category)
                                    }), (0,
                                    X.jsx)(`td`, {
                                        className: `px-4 py-4`,
                                        children: (0,
                                        X.jsxs)(`span`, {
                                            className: `inline-flex items-center gap-1 text-yellow-400`,
                                            children: [(0,
                                            X.jsx)(`div`, {
                                                className: `w-3.5 h-3.5 flex items-center justify-center`,
                                                children: (0,
                                                X.jsx)(`i`, {
                                                    className: `ri-star-fill text-xs`
                                                })
                                            }), e.rating]
                                        })
                                    }), (0,
                                    X.jsxs)(`td`, {
                                        className: `px-4 py-4`,
                                        children: [e.deliveryTime, ` `, t(`deliveryTime`)]
                                    }), (0,
                                    X.jsx)(`td`, {
                                        className: `px-4 py-4`,
                                        children: (0,
                                        X.jsxs)(`span`, {
                                            className: `inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${e.isOpen ? `bg-green-400/10 text-green-400` : `bg-red-400/10 text-red-400`}`,
                                            children: [(0,
                                            X.jsx)(`div`, {
                                                className: `w-3.5 h-3.5 flex items-center justify-center`,
                                                children: (0,
                                                X.jsx)(`i`, {
                                                    className: `${e.isOpen ? `ri-checkbox-circle-line` : `ri-close-circle-line`} text-[10px]`
                                                })
                                            }), e.isOpen ? t(`restaurantOpen`) : t(`restaurantClosed`)]
                                        })
                                    }), (0,
                                    X.jsx)(`td`, {
                                        className: `px-4 py-4`,
                                        children: (0,
                                        X.jsxs)(`div`, {
                                            className: `flex gap-2`,
                                            children: [(0,
                                            X.jsx)(`button`, {
                                                className: `p-1.5 rounded-md bg-white/[0.05] text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer`,
                                                children: (0,
                                                X.jsx)(yr, {
                                                    size: 14
                                                })
                                            }), (0,
                                            X.jsx)(`button`, {
                                                className: `p-1.5 rounded-md bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors cursor-pointer`,
                                                children: (0,
                                                X.jsx)(Er, {
                                                    size: 14
                                                })
                                            })]
                                        })
                                    })]
                                }, e.id))
                            })]
                        })
                    })
                })]
            }), i === `menu` && (0,
            X.jsxs)(`div`, {
                className: `space-y-4`,
                children: [(0,
                X.jsxs)(`div`, {
                    className: `flex justify-between items-center`,
                    children: [(0,
                    X.jsx)(`h2`, {
                        className: `text-lg font-bold`,
                        children: t(`menuItems`)
                    }), (0,
                    X.jsxs)(`button`, {
                        className: `flex items-center gap-2 px-4 py-2 rounded-lg bg-[#9d7bff] text-white text-sm font-medium hover:bg-[#b79fff] transition-colors cursor-pointer`,
                        children: [(0,
                        X.jsx)(xr, {
                            size: 16
                        }), ` `, t(`addProduct`)]
                    })]
                }), (0,
                X.jsx)(`div`, {
                    className: `bg-[#12121a] rounded-2xl border border-white/[0.06] overflow-hidden`,
                    children: (0,
                    X.jsx)(`div`, {
                        className: `overflow-x-auto`,
                        children: (0,
                        X.jsxs)(`table`, {
                            className: `w-full text-sm`,
                            children: [(0,
                            X.jsx)(`thead`, {
                                className: `bg-white/[0.03] text-gray-400`,
                                children: (0,
                                X.jsxs)(`tr`, {
                                    children: [(0,
                                    X.jsx)(`th`, {
                                        className: `${u ? `text-right` : `text-left`} px-4 py-3 font-medium`,
                                        children: t(`product`)
                                    }), (0,
                                    X.jsx)(`th`, {
                                        className: `${u ? `text-right` : `text-left`} px-4 py-3 font-medium`,
                                        children: t(`restaurant`)
                                    }), (0,
                                    X.jsx)(`th`, {
                                        className: `${u ? `text-right` : `text-left`} px-4 py-3 font-medium`,
                                        children: t(`category`)
                                    }), (0,
                                    X.jsx)(`th`, {
                                        className: `${u ? `text-right` : `text-left`} px-4 py-3 font-medium`,
                                        children: t(`price`)
                                    }), (0,
                                    X.jsx)(`th`, {
                                        className: `${u ? `text-right` : `text-left`} px-4 py-3 font-medium`,
                                        children: t(`status`)
                                    }), (0,
                                    X.jsx)(`th`, {
                                        className: `${u ? `text-right` : `text-left`} px-4 py-3 font-medium`,
                                        children: t(`actions`)
                                    })]
                                })
                            }), (0,
                            X.jsx)(`tbody`, {
                                className: `divide-y divide-white/[0.04]`,
                                children: zr.map(e => {
                                    let n = Z.find(t => t.id === e.restaurantId);
                                    return (0,
                                    X.jsxs)(`tr`, {
                                        className: `hover:bg-white/[0.02] transition-colors`,
                                        children: [(0,
                                        X.jsx)(`td`, {
                                            className: `px-4 py-4`,
                                            children: (0,
                                            X.jsxs)(`div`, {
                                                className: `flex items-center gap-3`,
                                                children: [(0,
                                                X.jsx)(`img`, {
                                                    src: e.image,
                                                    alt: Q(e.name, r),
                                                    className: `w-10 h-10 rounded-lg object-cover`
                                                }), (0,
                                                X.jsxs)(`div`, {
                                                    children: [(0,
                                                    X.jsx)(`p`, {
                                                        className: `font-medium`,
                                                        children: Q(e.name, r)
                                                    }), (0,
                                                    X.jsx)(`p`, {
                                                        className: `text-xs text-gray-500 line-clamp-1`,
                                                        children: Br(e.description, r)
                                                    })]
                                                })]
                                            })
                                        }), (0,
                                        X.jsx)(`td`, {
                                            className: `px-4 py-4`,
                                            children: n ? Q(n.name, r) : `-`
                                        }), (0,
                                        X.jsx)(`td`, {
                                            className: `px-4 py-4`,
                                            children: t(`category_` + e.category)
                                        }), (0,
                                        X.jsxs)(`td`, {
                                            className: `px-4 py-4 font-bold text-[#9d7bff]`,
                                            children: [e.price, ` `, t(`currency`)]
                                        }), (0,
                                        X.jsx)(`td`, {
                                            className: `px-4 py-4`,
                                            children: (0,
                                            X.jsxs)(`span`, {
                                                className: `inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${e.isAvailable ? `bg-green-400/10 text-green-400` : `bg-red-400/10 text-red-400`}`,
                                                children: [(0,
                                                X.jsx)(`div`, {
                                                    className: `w-3.5 h-3.5 flex items-center justify-center`,
                                                    children: (0,
                                                    X.jsx)(`i`, {
                                                        className: `${e.isAvailable ? `ri-checkbox-circle-line` : `ri-close-circle-line`} text-[10px]`
                                                    })
                                                }), e.isAvailable ? t(`available`) : t(`notAvailable`)]
                                            })
                                        }), (0,
                                        X.jsx)(`td`, {
                                            className: `px-4 py-4`,
                                            children: (0,
                                            X.jsxs)(`div`, {
                                                className: `flex gap-2`,
                                                children: [(0,
                                                X.jsx)(`button`, {
                                                    className: `p-1.5 rounded-md bg-white/[0.05] text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer`,
                                                    children: (0,
                                                    X.jsx)(yr, {
                                                        size: 14
                                                    })
                                                }), (0,
                                                X.jsx)(`button`, {
                                                    className: `p-1.5 rounded-md bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors cursor-pointer`,
                                                    children: (0,
                                                    X.jsx)(Er, {
                                                        size: 14
                                                    })
                                                })]
                                            })
                                        })]
                                    }, e.id)
                                }
                                )
                            })]
                        })
                    })
                })]
            })]
        })]
    })
}
var ci = s({
    default: () => li
})
  , li = [{
    path: `/`,
    element: (0,
    X.jsx)(Rr, {})
}, {
    path: `/restaurant/:id`,
    element: (0,
    X.jsx)(ti, {})
}, {
    path: `/checkout`,
    element: (0,
    X.jsx)(ni, {})
}, {
    path: `/track`,
    element: (0,
    X.jsx)(ai, {})
}, {
    path: `/admin`,
    element: (0,
    X.jsx)(si, {})
}, {
    path: `*`,
    element: (0,
    X.jsx)(Mr, {})
}];
export {xt as a, oe as c, p as d, o as f, G as i, _ as l, l as m, li as n, j as o, s as p, kn as r, se as s, ci as t, h as u};
//# sourceMappingURL=config-CQXB639S.js.map
