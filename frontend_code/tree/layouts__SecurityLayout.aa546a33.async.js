(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [2],
  {
    L9NX: function(e, t, r) {
      'use strict';
      var n = r('g09b');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var u = n(r('2Taf')),
        a = n(r('vZ4D')),
        o = n(r('l4Ni')),
        s = n(r('ujKo')),
        i = n(r('MhPg')),
        c = n(r('q1tI')),
        d = r('Hg0r'),
        l =
          (r('Hx5s'),
          r('ArA+'),
          r('s4NR'),
          (function(e) {
            function t() {
              var e, r;
              (0, u.default)(this, t);
              for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
                a[i] = arguments[i];
              return (
                (r = (0, o.default)(this, (e = (0, s.default)(t)).call.apply(e, [this].concat(a)))),
                (r.state = { isReady: !1 }),
                r
              );
            }
            return (
              (0, i.default)(t, e),
              (0, a.default)(t, [
                {
                  key: 'componentDidMount',
                  value: function() {
                    this.setState({ isReady: !0 });
                    var e = this.props.dispatch;
                    e && e({ type: 'user/fetchCurrent' });
                  },
                },
                {
                  key: 'render',
                  value: function() {
                    var e = this.props,
                      t = e.children;
                    e.loading, e.currentUser;
                    return t;
                  },
                },
              ]),
              t
            );
          })(c.default.Component)),
        f = (0, d.connect)(function(e) {
          var t = e.user,
            r = e.loading;
          return { currentUser: t.currentUser, loading: r.models.user };
        })(l);
      t.default = f;
    },
    o2JA: function(e, t, r) {
      'use strict';
    },
  },
]);
