"use strict";

module.exports = function (t) {
  var e = {};

  function n(r) {
    if (e[r]) return e[r].exports;
    var o = e[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
  }

  return n.m = t, n.c = e, n.d = function (t, e, r) {
    n.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: r
    });
  }, n.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, n.t = function (t, e) {
    if (1 & e && (t = n(t)), 8 & e) return t;
    if (4 & e && "object" == typeof t && t && t.__esModule) return t;
    var r = Object.create(null);
    if (n.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: t
    }), 2 & e && "string" != typeof t) for (var o in t) n.d(r, o, function (e) {
      return t[e];
    }.bind(null, o));
    return r;
  }, n.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t.default;
    } : function () {
      return t;
    };
    return n.d(e, "a", e), e;
  }, n.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, n.p = "", n(n.s = 10);
}([function (t, e) {
  t.exports = require("react");
}, function (t, e) {
  t.exports = require("prop-types");
}, function (t, e, n) {
  "use strict";

  t.exports = function (t) {
    var e = [];
    return e.toString = function () {
      return this.map(function (e) {
        var n = function (t, e) {
          var n = t[1] || "",
              r = t[3];
          if (!r) return n;

          if (e && "function" == typeof btoa) {
            var o = (i = r, s = btoa(unescape(encodeURIComponent(JSON.stringify(i)))), c = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s), "/*# ".concat(c, " */")),
                a = r.sources.map(function (t) {
              return "/*# sourceURL=".concat(r.sourceRoot || "").concat(t, " */");
            });
            return [n].concat(a).concat([o]).join("\n");
          }

          var i, s, c;
          return [n].join("\n");
        }(e, t);

        return e[2] ? "@media ".concat(e[2], " {").concat(n, "}") : n;
      }).join("");
    }, e.i = function (t, n, r) {
      "string" == typeof t && (t = [[null, t, ""]]);
      var o = {};
      if (r) for (var a = 0; a < this.length; a++) {
        var i = this[a][0];
        null != i && (o[i] = !0);
      }

      for (var s = 0; s < t.length; s++) {
        var c = [].concat(t[s]);
        r && o[c[0]] || (n && (c[2] ? c[2] = "".concat(n, " and ").concat(c[2]) : c[2] = n), e.push(c));
      }
    }, e;
  };
}, function (t, e, n) {
  var r,
      o,
      a = {},
      i = (r = function r() {
    return window && document && document.all && !window.atob;
  }, function () {
    return void 0 === o && (o = r.apply(this, arguments)), o;
  }),
      s = function s(t, e) {
    return e ? e.querySelector(t) : document.querySelector(t);
  },
      c = function (t) {
    var e = {};
    return function (t, n) {
      if ("function" == typeof t) return t();

      if (void 0 === e[t]) {
        var r = s.call(this, t, n);
        if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement) try {
          r = r.contentDocument.head;
        } catch (t) {
          r = null;
        }
        e[t] = r;
      }

      return e[t];
    };
  }(),
      l = null,
      u = 0,
      f = [],
      p = n(7);

  function d(t, e) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n],
          o = a[r.id];

      if (o) {
        o.refs++;

        for (var i = 0; i < o.parts.length; i++) o.parts[i](r.parts[i]);

        for (; i < r.parts.length; i++) o.parts.push(g(r.parts[i], e));
      } else {
        var s = [];

        for (i = 0; i < r.parts.length; i++) s.push(g(r.parts[i], e));

        a[r.id] = {
          id: r.id,
          refs: 1,
          parts: s
        };
      }
    }
  }

  function m(t, e) {
    for (var n = [], r = {}, o = 0; o < t.length; o++) {
      var a = t[o],
          i = e.base ? a[0] + e.base : a[0],
          s = {
        css: a[1],
        media: a[2],
        sourceMap: a[3]
      };
      r[i] ? r[i].parts.push(s) : n.push(r[i] = {
        id: i,
        parts: [s]
      });
    }

    return n;
  }

  function h(t, e) {
    var n = c(t.insertInto);
    if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
    var r = f[f.length - 1];
    if ("top" === t.insertAt) r ? r.nextSibling ? n.insertBefore(e, r.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), f.push(e);else if ("bottom" === t.insertAt) n.appendChild(e);else {
      if ("object" != typeof t.insertAt || !t.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
      var o = c(t.insertAt.before, n);
      n.insertBefore(e, o);
    }
  }

  function b(t) {
    if (null === t.parentNode) return !1;
    t.parentNode.removeChild(t);
    var e = f.indexOf(t);
    e >= 0 && f.splice(e, 1);
  }

  function v(t) {
    var e = document.createElement("style");

    if (void 0 === t.attrs.type && (t.attrs.type = "text/css"), void 0 === t.attrs.nonce) {
      var r = function () {
        0;
        return n.nc;
      }();

      r && (t.attrs.nonce = r);
    }

    return y(e, t.attrs), h(t, e), e;
  }

  function y(t, e) {
    Object.keys(e).forEach(function (n) {
      t.setAttribute(n, e[n]);
    });
  }

  function g(t, e) {
    var n, r, o, a;

    if (e.transform && t.css) {
      if (!(a = "function" == typeof e.transform ? e.transform(t.css) : e.transform.default(t.css))) return function () {};
      t.css = a;
    }

    if (e.singleton) {
      var i = u++;
      n = l || (l = v(e)), r = j.bind(null, n, i, !1), o = j.bind(null, n, i, !0);
    } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function (t) {
      var e = document.createElement("link");
      return void 0 === t.attrs.type && (t.attrs.type = "text/css"), t.attrs.rel = "stylesheet", y(e, t.attrs), h(t, e), e;
    }(e), r = O.bind(null, n, e), o = function o() {
      b(n), n.href && URL.revokeObjectURL(n.href);
    }) : (n = v(e), r = E.bind(null, n), o = function o() {
      b(n);
    });

    return r(t), function (e) {
      if (e) {
        if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
        r(t = e);
      } else o();
    };
  }

  t.exports = function (t, e) {
    if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
    (e = e || {}).attrs = "object" == typeof e.attrs ? e.attrs : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = i()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
    var n = m(t, e);
    return d(n, e), function (t) {
      for (var r = [], o = 0; o < n.length; o++) {
        var i = n[o];
        (s = a[i.id]).refs--, r.push(s);
      }

      t && d(m(t, e), e);

      for (o = 0; o < r.length; o++) {
        var s;

        if (0 === (s = r[o]).refs) {
          for (var c = 0; c < s.parts.length; c++) s.parts[c]();

          delete a[s.id];
        }
      }
    };
  };

  var x,
      w = (x = [], function (t, e) {
    return x[t] = e, x.filter(Boolean).join("\n");
  });

  function j(t, e, n, r) {
    var o = n ? "" : r.css;
    if (t.styleSheet) t.styleSheet.cssText = w(e, o);else {
      var a = document.createTextNode(o),
          i = t.childNodes;
      i[e] && t.removeChild(i[e]), i.length ? t.insertBefore(a, i[e]) : t.appendChild(a);
    }
  }

  function E(t, e) {
    var n = e.css,
        r = e.media;
    if (r && t.setAttribute("media", r), t.styleSheet) t.styleSheet.cssText = n;else {
      for (; t.firstChild;) t.removeChild(t.firstChild);

      t.appendChild(document.createTextNode(n));
    }
  }

  function O(t, e, n) {
    var r = n.css,
        o = n.sourceMap,
        a = void 0 === e.convertToAbsoluteUrls && o;
    (e.convertToAbsoluteUrls || a) && (r = p(r)), o && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
    var i = new Blob([r], {
      type: "text/css"
    }),
        s = t.href;
    t.href = URL.createObjectURL(i), s && URL.revokeObjectURL(s);
  }
}, function (t, e) {
  t.exports = require("react-dom");
}, function (t, e, n) {
  var r = n(6);
  "string" == typeof r && (r = [[t.i, r, ""]]);
  var o = {
    hmr: !0,
    transform: void 0,
    insertInto: void 0
  };
  n(3)(r, o);
  r.locals && (t.exports = r.locals);
}, function (t, e, n) {
  (e = n(2)(!1)).push([t.i, ".fast-map-loading__container {\n  opacity: 1;\n  transition: opacity 1.5s;\n  pointer-events: none;\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  /* &.hidden {\n        opacity: 0;\n    } */\n}\n.fast-map-loading__container.hidden {\n  opacity: 0;\n}\n\n.fast-map-loading__animation {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 30px;\n  -webkit-perspective: 200px;\n  -moz-perspective: 200px;\n  -ms-perspective: 200px;\n  perspective: 200px;\n}\n.fast-map-loading__animation:before,\n.fast-map-loading__animation:after {\n  position: absolute;\n\n  width: 12px;\n  height: 12px;\n\n  content: '';\n  animation: jumping 0.5s infinite alternate;\n\n  background: #050e1f;\n}\n.fast-map-loading__animation:before {\n  left: 0;\n}\n.fast-map-loading__animation:after {\n  right: 0;\n\n  animation-delay: 0.15s;\n}\n@-webkit-keyframes jumping {\n  0% {\n    -webkit-transform: scale(1) translateY(0px) rotateX(0deg);\n    -ms-transform: scale(1) translateY(0px) rotateX(0deg);\n    -o-transform: scale(1) translateY(0px) rotateX(0deg);\n    transform: scale(1) translateY(0px) rotateX(0deg);\n\n    -webkit-box-shadow: 0 0 0 #050e1f;\n    box-shadow: 0 0 0 #050e1f;\n  }\n  100% {\n    -webkit-transform: scale(1.2) translateY(-25px) rotateX(45deg);\n    -ms-transform: scale(1.2) translateY(-25px) rotateX(45deg);\n    -o-transform: scale(1.2) translateY(-25px) rotateX(45deg);\n    transform: scale(1.2) translateY(-25px) rotateX(45deg);\n\n    background: #324262;\n    -webkit-box-shadow: 0 25px 40px #324262;\n    box-shadow: 0 25px 40px #324262;\n  }\n}\n\n@keyframes jumping {\n  0% {\n    -webkit-transform: scale(1) translateY(0px) rotateX(0deg);\n    -ms-transform: scale(1) translateY(0px) rotateX(0deg);\n    -o-transform: scale(1) translateY(0px) rotateX(0deg);\n    transform: scale(1) translateY(0px) rotateX(0deg);\n\n    -webkit-box-shadow: 0 0 0 #050e1f;\n    box-shadow: 0 0 0 #050e1f;\n  }\n  100% {\n    -webkit-transform: scale(1.2) translateY(-25px) rotateX(45deg);\n    -ms-transform: scale(1.2) translateY(-25px) rotateX(45deg);\n    -o-transform: scale(1.2) translateY(-25px) rotateX(45deg);\n    transform: scale(1.2) translateY(-25px) rotateX(45deg);\n\n    background: #324262;\n    -webkit-box-shadow: 0 25px 40px #324262;\n    box-shadow: 0 25px 40px #324262;\n  }\n}\n", ""]), t.exports = e;
}, function (t, e) {
  t.exports = function (t) {
    var e = "undefined" != typeof window && window.location;
    if (!e) throw new Error("fixUrls requires window.location");
    if (!t || "string" != typeof t) return t;
    var n = e.protocol + "//" + e.host,
        r = n + e.pathname.replace(/\/[^\/]*$/, "/");
    return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (t, e) {
      var o,
          a = e.trim().replace(/^"(.*)"$/, function (t, e) {
        return e;
      }).replace(/^'(.*)'$/, function (t, e) {
        return e;
      });
      return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a) ? t : (o = 0 === a.indexOf("//") ? a : 0 === a.indexOf("/") ? n + a : r + a.replace(/^\.\//, ""), "url(" + JSON.stringify(o) + ")");
    });
  };
}, function (t, e, n) {
  var r = n(9);
  "string" == typeof r && (r = [[t.i, r, ""]]);
  var o = {
    hmr: !0,
    transform: void 0,
    insertInto: void 0
  };
  n(3)(r, o);
  r.locals && (t.exports = r.locals);
}, function (t, e, n) {
  (e = n(2)(!1)).push([t.i, ".fast-map__map {\n  width: 100%;\n  height: 100%;\n}\n", ""]), t.exports = e;
}, function (t, e, n) {
  "use strict";

  n.r(e), n.d(e, "Map", function () {
    return w;
  }), n.d(e, "useMap", function () {
    return m;
  }), n.d(e, "withMap", function () {
    return b;
  });
  var r = n(0),
      o = n.n(r),
      a = n(1),
      i = n.n(a);
  n(5);

  var s = t => {
    const e = t.style,
          n = t.className,
          r = t.value;
    return o.a.createElement("div", {
      style: e,
      className: ["fast-map-loading__container", r ? "hidden" : "", n].filter(Boolean).join(" ")
    }, o.a.createElement("div", {
      className: "fast-map-loading__animation"
    }));
  },
      c = n(4),
      l = n.n(c);

  var u = t => {
    const e = Object(r.useRef)(null),
          n = Object(r.useRef)(null),
          a = document.querySelector("div[map-id='".concat(t.mapId, "']"));
    return a ? e.current = a : (e.current = document.createElement("div"), e.current.setAttribute("map-id", t.mapId), e.current.setAttribute("style", "display:none"), document.body.appendChild(e.current)), Object(r.useEffect)(() => {
      const r = n.current,
            o = e.current,
            a = (t, e) => {
        for (; e.length > 0;) t.appendChild(e[0]);
      };

      o.childNodes && o.childNodes.length > 0 ? a(n.current, o.childNodes) : l.a.render(t.children, n.current);
      const i = setTimeout(() => {
        t.mount && t.mount();
      }, 0);
      return () => {
        a(e.current, r.childNodes), clearTimeout(i);
      };
    }, []), o.a.createElement("span", {
      ref: n
    });
  };

  var f = {
    _state: {},
    eventList: {},

    set(t, e) {
      this._state[t] = e;
    },

    get(t) {
      return this._state[t];
    },

    on(t, e) {
      const n = this.eventList[t] || [];
      n.find(t => t === e) || n.push(e), this.eventList[t] = n;
    },

    off(t, e) {
      const n = this.eventList[t] || [],
            r = n.findIndex(t => t === e);
      r > -1 && (n.splice(r, 1), this.eventList[t] = n);
    },

    trigger(t) {
      (this.eventList[t] || []).forEach(t => t());
    }

  };

  function p(t, e) {
    return function (t) {
      if (Array.isArray(t)) return t;
    }(t) || function (t, e) {
      if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
      var n = [],
          r = !0,
          o = !1,
          a = void 0;

      try {
        for (var i, s = t[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !e || n.length !== e); r = !0);
      } catch (t) {
        o = !0, a = t;
      } finally {
        try {
          r || null == s.return || s.return();
        } finally {
          if (o) throw a;
        }
      }

      return n;
    }(t, e) || function (t, e) {
      if (!t) return;
      if ("string" == typeof t) return d(t, e);
      var n = Object.prototype.toString.call(t).slice(8, -1);
      "Object" === n && t.constructor && (n = t.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(t);
      if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(t, e);
    }(t, e) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }

  function d(t, e) {
    (null == e || e > t.length) && (e = t.length);

    for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];

    return r;
  }

  const m = (t = "DEFAULT") => {
    const e = p(Object(r.useState)(f.get(t) || []), 2),
          n = e[0],
          o = e[1];
    return Object(r.useEffect)(() => {
      const e = () => {
        o(f.get(t));
      };

      return f.on(t, e), () => {
        f.off(t, e);
      };
    }, []), n;
  },
        h = t => {
    const e = t.children,
          n = m();
    return o.a.cloneElement(e, {
      map: n
    });
  },
        b = t => e => o.a.createElement(h, null, o.a.createElement(t, e));

  n(8);

  function v(t, e) {
    return function (t) {
      if (Array.isArray(t)) return t;
    }(t) || function (t, e) {
      if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
      var n = [],
          r = !0,
          o = !1,
          a = void 0;

      try {
        for (var i, s = t[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !e || n.length !== e); r = !0);
      } catch (t) {
        o = !0, a = t;
      } finally {
        try {
          r || null == s.return || s.return();
        } finally {
          if (o) throw a;
        }
      }

      return n;
    }(t, e) || function (t, e) {
      if (!t) return;
      if ("string" == typeof t) return y(t, e);
      var n = Object.prototype.toString.call(t).slice(8, -1);
      "Object" === n && t.constructor && (n = t.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(t);
      if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return y(t, e);
    }(t, e) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }

  function y(t, e) {
    (null == e || e > t.length) && (e = t.length);

    for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];

    return r;
  }

  const g = t => {
    const e = t.mapId,
          n = t.onLoaded,
          a = t.className;
    return Object(r.useEffect)(() => {
      const t = (...t) => {
        f.set(e, t), n();
      };

      if (x.initialize && "function" == typeof x.initialize) {
        const n = x.initialize();
        n[e] ? n[e].apply(null, [t]) : console.error("找不到".concat(e, "的初始化方法"));
      } else console.error("找不到Map.initialize初始化方法");
    }, []), o.a.createElement("div", {
      id: e,
      className: ["fast-map__map", a].filter(Boolean).join(" ")
    });
  },
        x = t => {
    const e = t.mapId,
          n = void 0 === e ? "DEFAULT" : e,
          a = t.Loading,
          i = t.className,
          c = v(Object(r.useState)(!1), 2),
          l = c[0],
          p = c[1];
    return o.a.createElement(o.a.Fragment, null, o.a.createElement(u, {
      mapId: n,
      mount: function mount() {
        f.get(n) && (p(!0), f.trigger(n));
      }
    }, o.a.createElement(g, {
      mapId: n,
      className: i,
      onLoaded: function onLoaded() {
        p(!0), f.trigger(n);
      }
    })), a ? o.a.createElement(o.a.Fragment, null, "function" == typeof a ? a(l) : o.a.cloneElement(a, {
      complete: l
    })) : o.a.createElement(s, {
      value: l
    }));
  };

  x.useMap = m, x.withMap = b, x.propTypes = {
    mapId: i.a.string,
    Loading: i.a.oneOfType([i.a.func, i.a.element])
  }, x.defaultProps = {
    mapId: "DEFAULT"
  };
  var w = x;
  e.default = w;
}]);