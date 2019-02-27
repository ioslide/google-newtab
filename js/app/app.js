
!
function(e) {
    var t = {};
    function a(o) {
        if (t[o]) return t[o].exports;
        var i = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(i.exports, i, i.exports, a),
        i.l = !0,
        i.exports
    }
    a.m = e,
    a.c = t,
    a.d = function(e, t, o) {
        a.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        })
    },
    a.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    },
    a.t = function(e, t) {
        if (1 & t && (e = a(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (a.r(o), Object.defineProperty(o, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var i in e) a.d(o, i,
        function(t) {
            return e[t]
        }.bind(null, i));
        return o
    },
    a.n = function(e) {
        var t = e && e.__esModule ?
        function() {
            return e.
        default
        }:
        function() {
            return e
        };
        return a.d(t, "a", t),
        t
    },
    a.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    },
    a.p = "",
    a(a.s = 65)
} ([function(e, t, a) {
    "use strict";
    var ssss=(function(){return($('#searchEn').find("option:selected").attr("name"))})();
    e.exports = a(64)
},
function(e, t, a) {
    "use strict";
    a.r(t);
    var o = a(0),
    i = a(3),
    r = a.n(i),
    n = a(4);
    a(5);
    function c() {
        var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "store",
        a = arguments[1] || t + "Subscription",
        i = function(e) {
            function i(a, o) { !
                function(e, t) {
                    if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
                } (this, i);
                var r = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return ! t || "object" != typeof t && "function" != typeof t ? e: t
                } (this, e.call(this, a, o));
                return r[t] = a.store,
                r
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            } (i, e),
            i.prototype.getChildContext = function() {
                var e;
                return (e = {})[t] = this[t],
                e[a] = null,
                e
            },
            i.prototype.render = function() {
                return o.Children.only(this.props.children)
            },
            i
        } (o.Component);
        return i.propTypes = {
            store: n.a.isRequired,
            children: r.a.element.isRequired
        },
        i.childContextTypes = ((e = {})[t] = n.a.isRequired, e[a] = n.b, e),
        i
    }
    var s = c(),
    f = a(6),
    l = a(8);
    a.d(t, "Provider",
    function() {
        return s
    }),
    a.d(t, "createProvider",
    function() {
        return c
    }),
    a.d(t, "connectAdvanced",
    function() {
        return f.a
    }),
    a.d(t, "connect",
    function() {
        return l.
    default
    })
},
function(e, t, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.initStorage = function(e) {
        var t = {
            bookmarks: [],
            todos: [],
            notes: [{
                id: 0,
                text: "",
                timestamp: Date.now()
            }],
            gallery: [],
            mondayFirst: !0,
            is24HoursMode: !0,
            theme: "light",
            colors: c.COLORS,
            aWallpaper: n.DEFAULT_WP,
            apps: s.APPS.map(function(e) {
                return e.title
            }),
            sessions: [],
            searchEngine: "google",
            showSearchbar: !0,
            searchbarColor: "searchbar_light",
            roundedSearchbar: !0,
            showHabOn: "icon",
            pinnedBookmarkColor: "dark"
        };
        chrome.storage.local.get(t,
        function(t) {
            console.log("init storage", t),
            r.
        default.dispatch({
                type:
                "INIT_STORAGE",
                data: t
            }),
            e && e()
        })
    },
    t.setActiveWallpaper = function(e) {
        r.
    default.dispatch({
            type:
            "SET_WP",
            data: e
        }),
        f()
    },
    t.pushToGallery = function(e) {
        var t = r.
    default.getState().storage.gallery.slice();
        t.unshift(e),
        t = t.slice(0, 21),
        r.
    default.dispatch({
            type:
            "SAVE_GALLERY",
            data: t
        }),
        f()
    },
    t.pushToColors = function(e) {
        var t = r.
    default.getState().storage.colors.slice();
        t.unshift(e),
        t = t.slice(0, 21),
        r.
    default.dispatch({
            type:
            "SAVE_COLORS",
            data: t
        }),
        f()
    },
    t.setItemBookmarkModal = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        r.
    default.dispatch({
            type:
            "SET_ITEM_FOR_BOOKMARK_MODAL",
            data: e
        })
    },
    t.setItemBookmarkConfirmModal = function(e) {
        r.
    default.dispatch({
            type:
            "SET_BOOKMARK_FOR_CONFIRM_MODAL",
            data: e
        })
    },
    t.saveBookmark = function(e) {
        var t = r.
    default.getState().storage.bookmarks.slice(),
        a = t.map(function(e) {
            return e.id
        }).indexOf(e.id);
        t[a] ? t[a] = e: t.push(e);
        r.
    default.dispatch({
            type:
            "SAVE_BOOKMARKS",
            data: t
        }),
        f()
    },
    t.removeBookmark = function(e) {
        var t = r.
    default.getState().storage.bookmarks.slice(),
        a = t.map(function(e) {
            return e.id
        }).indexOf(e.id);
        t.splice(a, 1),
        r.
    default.dispatch({
            type:
            "SAVE_BOOKMARKS",
            data: t
        }),
        f()
    },
    t.pinBookmark = function(e) {
        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        a = r.
    default.getState().storage.bookmarks.slice(),
        o = a.map(function(e) {
            return e.id
        }).indexOf(e.id);
        a[o] && (a[o].pin = t);
        r.
    default.dispatch({
            type:
            "SAVE_BOOKMARKS",
            data: a
        }),
        f()
    },
    t.setItemUnpinConfirm = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        r.
    default.dispatch({
            type:
            "SET_PIN_BOOKMARK_FOR_CONFIRM_MODAL",
            data: e
        })
    },
    t.setItemTodoModal = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        r.
    default.dispatch({
            type:
            "SET_ITEM_FOR_TODO_MODAL",
            data: e
        })
    },
    t.setItemTodoConfirmModal = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        r.
    default.dispatch({
            type:
            "SET_TODO_FOR_CONFIRM_MODAL",
            data: e
        })
    },
    t.saveTodo = function(e) {
        var t = r.
    default.getState().storage.todos.slice(),
        a = t.map(function(e) {
            return e.id
        }).indexOf(e.id);
        t[a] ? t[a] = e: t.push(e);
        r.
    default.dispatch({
            type:
            "SAVE_TODOS",
            data: t
        }),
        f()
    },
    t.removeTodo = function(e) {
        var t = r.
    default.getState().storage.todos.slice(),
        a = t.map(function(e) {
            return e.id
        }).indexOf(e.id);
        t.splice(a, 1),
        r.
    default.dispatch({
            type:
            "SAVE_TODOS",
            data: t
        }),
        f()
    },
    t.changeTodoStatus = function(e, t) {
        var a = r.
    default.getState().storage.todos.slice(),
        o = a.map(function(e) {
            return e.id
        }).indexOf(e.id);
        a[o].checked = t,
        r.
    default.dispatch({
            type:
            "SAVE_TODOS",
            data: a
        }),
        f()
    },
    t.setItemNoteConfirmModal = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        r.
    default.dispatch({
            type:
            "SET_NOTE_FOR_CONFIRM_MODAL",
            data: e
        })
    },
    t.saveNote = function(e) {
        var t = r.
    default.getState().storage.notes.slice(),
        a = t.map(function(e) {
            return e.id
        }).indexOf(e.id);
        t[a] ? t[a] = e: t.unshift(e);
        r.
    default.dispatch({
            type:
            "SAVE_NOTES",
            data: t
        }),
        f()
    },
    t.removeNote = function(e) {
        var t = r.
    default.getState().storage.notes.slice(),
        a = t.map(function(e) {
            return e.id
        }).indexOf(e.id);
        t.splice(a, 1),
        r.
    default.dispatch({
            type:
            "SAVE_NOTES",
            data: t
        }),
        f()
    },
    t.changeAppsSet = function(e) {
        r.
    default.dispatch({
            type:
            "SAVE_APPS_SET",
            data: e
        }),
        f()
    },
    t.setItemSessionModal = l,
    t.setItemSessionConfirmModal = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        r.
    default.dispatch({
            type:
            "SET_SESSION_FOR_CONFIRM_MODAL",
            data: e
        })
    },
    t.setItemCopyToSessionModal = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        r.
    default.dispatch({
            type:
            "SET_ITEM_FOR_COPY_TO_SESSION",
            data: e
        })
    },
    t.setItemMoveToSessionModal = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        r.
    default.dispatch({
            type:
            "SET_ITEM_FOR_MOVE_TO_SESSION",
            data: e
        })
    },
    t.duplicateSession = function(e) {
        var t = JSON.parse(JSON.stringify(e));
        t.id = null,
        t.name = t.name + "-2",
        l(t)
    },
    t.copyItemToSession = u,
    t.moveItemToSession = function(e) {
        var t = e._window,
        a = e.oldSessionId,
        o = e.newSessionId;
        p(u({
            _window: t,
            oldSessionId: a,
            newSessionId: o
        }), t.id)
    },
    t.saveOneWindowToSession = function(e, t) {
        var a = JSON.parse(JSON.stringify(e));
        a.windows = e.windows.filter(function(e) {
            return e.id === t
        }),
        l(a)
    },
    t.removeWindowFromSession = p,
    t.removeTabFromSession = function(e, t, a) {
        var o = JSON.parse(JSON.stringify(e)),
        i = o.windows.find(function(e) {
            return e.id === t
        }),
        r = i.tabs.map(function(e) {
            return e.id
        }).indexOf(a);
        i.tabs.splice(r, 1),
        d(o)
    },
    t.saveSession = d,
    t.removeSession = function(e) {
        var t = r.
    default.getState().storage.sessions.slice(),
        a = t.map(function(e) {
            return e.id
        }).indexOf(e.id);
        t.splice(a, 1),
        r.
    default.dispatch({
            type:
            "SAVE_SESSIONS",
            data: t
        }),
        f()
    },
    t.changeSetting = function(e, t) {
        r.
    default.dispatch({
            type:
            "SAVE_SETTING",
            name: e,
            value: t
        }),
        f()
    };
    var o, i = a(11),
    r = (o = i) && o.__esModule ? o: {
    default:
        o
    },
    n = a(10),
    c = a(49),
    s = a(9);
    function f() {
        chrome.storage.local.set(r.
    default.getState().storage)
    }
    function l() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        r.
    default.dispatch({
            type:
            "SET_ITEM_FOR_SESSION_MODAL",
            data: e
        })
    }
    function u(e) {
        var t = e._window,
        a = e.oldSessionId,
        o = e.newSessionId,
        i = r.
    default.getState().storage.sessions,
        n = JSON.parse(JSON.stringify(i)),
        c = JSON.parse(JSON.stringify(t));
        c.id = Math.round(1e9 * Math.random());
        var s = n.find(function(e) {
            return e.id === a
        }),
        l = n.find(function(e) {
            return e.id === o
        });
        return l ? s ? (l.windows.push(c), r.
    default.dispatch({
            type:
            "SAVE_SESSIONS",
            data: n
        }), f(), s) : console.error("oldSession not found", s, n) : console.error("newSession not found", l, n)
    }
    function p(e, t) {
        var a = JSON.parse(JSON.stringify(e));
        a.windows = e.windows.filter(function(e) {
            return e.id !== t
        }),
        d(a)
    }
    function d(e) {
        var t = r.
    default.getState().storage.sessions.slice(),
        a = t.map(function(e) {
            return e.id
        }).indexOf(e.id);
        t[a] ? t[a] = e: t.push(e),
        r.
    default.dispatch({
            type:
            "SAVE_SESSIONS",
            data: t
        }),
        f()
    }
},
function(e, t, a) {
    e.exports = a(55)()
},
function(e, t, a) {
    "use strict";
    a.d(t, "b",
    function() {
        return r
    }),
    a.d(t, "a",
    function() {
        return n
    });
    var o = a(3),
    i = a.n(o),
    r = i.a.shape({
        trySubscribe: i.a.func.isRequired,
        tryUnsubscribe: i.a.func.isRequired,
        notifyNestedSubs: i.a.func.isRequired,
        isSubscribed: i.a.func.isRequired
    }),
    n = i.a.shape({
        subscribe: i.a.func.isRequired,
        dispatch: i.a.func.isRequired,
        getState: i.a.func.isRequired
    })
},
function(e, t, a) {
    "use strict";
    function o(e) {
        "undefined" != typeof console && "function" == typeof console.error && console.error(e);
        try {
            throw new Error(e)
        } catch(e) {}
    }
    a.d(t, "a",
    function() {
        return o
    })
},
function(e, t, a) {
    "use strict";
    var o = a(21),
    i = a.n(o),
    r = a(7),
    n = a.n(r),
    c = a(0);
    var s = null,
    f = {
        notify: function() {}
    };
    var l = function() {
        function e(t, a, o) { !
            function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
            } (this, e),
            this.store = t,
            this.parentSub = a,
            this.onStateChange = o,
            this.unsubscribe = null,
            this.listeners = f
        }
        return e.prototype.addNestedSub = function(e) {
            return this.trySubscribe(),
            this.listeners.subscribe(e)
        },
        e.prototype.notifyNestedSubs = function() {
            this.listeners.notify()
        },
        e.prototype.isSubscribed = function() {
            return Boolean(this.unsubscribe)
        },
        e.prototype.trySubscribe = function() {
            var e, t;
            this.unsubscribe || (this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange), this.listeners = (e = [], t = [], {
                clear: function() {
                    t = s,
                    e = s
                },
                notify: function() {
                    for (var a = e = t,
                    o = 0; o < a.length; o++) a[o]()
                },
                get: function() {
                    return t
                },
                subscribe: function(a) {
                    var o = !0;
                    return t === e && (t = e.slice()),
                    t.push(a),
                    function() {
                        o && e !== s && (o = !1, t === e && (t = e.slice()), t.splice(t.indexOf(a), 1))
                    }
                }
            }))
        },
        e.prototype.tryUnsubscribe = function() {
            this.unsubscribe && (this.unsubscribe(), this.unsubscribe = null, this.listeners.clear(), this.listeners = f)
        },
        e
    } (),
    u = a(4);
    a.d(t, "a",
    function() {
        return b
    });
    var p = Object.assign ||
    function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (e[o] = a[o])
        }
        return e
    };
    var d = 0,
    m = {};
    function h() {}
    function b(e) {
        var t, a, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = o.getDisplayName,
        s = void 0 === r ?
        function(e) {
            return "ConnectAdvanced(" + e + ")"
        }: r,
        f = o.methodName,
        b = void 0 === f ? "connectAdvanced": f,
        y = o.renderCountProp,
        g = void 0 === y ? void 0 : y,
        w = o.shouldHandleStateChanges,
        v = void 0 === w || w,
        x = o.storeKey,
        E = void 0 === x ? "store": x,
        O = o.withRef,
        M = void 0 !== O && O,
        j = function(e, t) {
            var a = {};
            for (var o in e) t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (a[o] = e[o]);
            return a
        } (o, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef"]),
        k = E + "Subscription",
        D = d++,
        _ = ((t = {})[E] = u.a, t[k] = u.b, t),
        S = ((a = {})[k] = u.b, a);
        return function(t) {
            n()("function" == typeof t, "You must pass a component to the function returned by " + b + ". Instead received " + JSON.stringify(t));
            var a = t.displayName || t.name || "Component",
            o = s(a),
            r = p({},
            j, {
                getDisplayName: s,
                methodName: b,
                renderCountProp: g,
                shouldHandleStateChanges: v,
                storeKey: E,
                withRef: M,
                displayName: o,
                wrappedComponentName: a,
                WrappedComponent: t
            }),
            f = function(a) {
                function i(e, t) { !
                    function(e, t) {
                        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    } (this, i);
                    var r = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return ! t || "object" != typeof t && "function" != typeof t ? e: t
                    } (this, a.call(this, e, t));
                    return r.version = D,
                    r.state = {},
                    r.renderCount = 0,
                    r.store = e[E] || t[E],
                    r.propsMode = Boolean(e[E]),
                    r.setWrappedInstance = r.setWrappedInstance.bind(r),
                    n()(r.store, 'Could not find "' + E + '" in either the context or props of "' + o + '". Either wrap the root component in a <Provider>, or explicitly pass "' + E + '" as a prop to "' + o + '".'),
                    r.initSelector(),
                    r.initSubscription(),
                    r
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                } (i, a),
                i.prototype.getChildContext = function() {
                    var e, t = this.propsMode ? null: this.subscription;
                    return (e = {})[k] = t || this.context[k],
                    e
                },
                i.prototype.componentDidMount = function() {
                    v && (this.subscription.trySubscribe(), this.selector.run(this.props), this.selector.shouldComponentUpdate && this.forceUpdate())
                },
                i.prototype.componentWillReceiveProps = function(e) {
                    this.selector.run(e)
                },
                i.prototype.shouldComponentUpdate = function() {
                    return this.selector.shouldComponentUpdate
                },
                i.prototype.componentWillUnmount = function() {
                    this.subscription && this.subscription.tryUnsubscribe(),
                    this.subscription = null,
                    this.notifyNestedSubs = h,
                    this.store = null,
                    this.selector.run = h,
                    this.selector.shouldComponentUpdate = !1
                },
                i.prototype.getWrappedInstance = function() {
                    return n()(M, "To access the wrapped instance, you need to specify { withRef: true } in the options argument of the " + b + "() call."),
                    this.wrappedInstance
                },
                i.prototype.setWrappedInstance = function(e) {
                    this.wrappedInstance = e
                },
                i.prototype.initSelector = function() {
                    var t = e(this.store.dispatch, r);
                    this.selector = function(e, t) {
                        var a = {
                            run: function(o) {
                                try {
                                    var i = e(t.getState(), o); (i !== a.props || a.error) && (a.shouldComponentUpdate = !0, a.props = i, a.error = null)
                                } catch(e) {
                                    a.shouldComponentUpdate = !0,
                                    a.error = e
                                }
                            }
                        };
                        return a
                    } (t, this.store),
                    this.selector.run(this.props)
                },
                i.prototype.initSubscription = function() {
                    if (v) {
                        var e = (this.propsMode ? this.props: this.context)[k];
                        this.subscription = new l(this.store, e, this.onStateChange.bind(this)),
                        this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription)
                    }
                },
                i.prototype.onStateChange = function() {
                    this.selector.run(this.props),
                    this.selector.shouldComponentUpdate ? (this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate, this.setState(m)) : this.notifyNestedSubs()
                },
                i.prototype.notifyNestedSubsOnComponentDidUpdate = function() {
                    this.componentDidUpdate = void 0,
                    this.notifyNestedSubs()
                },
                i.prototype.isSubscribed = function() {
                    return Boolean(this.subscription) && this.subscription.isSubscribed()
                },
                i.prototype.addExtraProps = function(e) {
                    if (! (M || g || this.propsMode && this.subscription)) return e;
                    var t = p({},
                    e);
                    return M && (t.ref = this.setWrappedInstance),
                    g && (t[g] = this.renderCount++),
                    this.propsMode && this.subscription && (t[k] = this.subscription),
                    t
                },
                i.prototype.render = function() {
                    var e = this.selector;
                    if (e.shouldComponentUpdate = !1, e.error) throw e.error;
                    return Object(c.createElement)(t, this.addExtraProps(e.props))
                },
                i
            } (c.Component);
            return f.WrappedComponent = t,
            f.displayName = o,
            f.childContextTypes = S,
            f.contextTypes = _,
            f.propTypes = _,
            i()(f, t)
        }
    }
}]);
