(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [5],
  {
    iUf1: function(e, t, a) {
      e.exports = { pre: 'antd-pro-pages-welcome-pre' };
    },
    paSq: function(e, t, a) {
      'use strict';
      var l = a('g09b');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('IzEo');
      var r = l(a('bx4M'));
      a('fOrg');
      var n = l(a('+KLJ'));
      a('tU7J');
      var o = l(a('wFql')),
        c = l(a('q1tI')),
        u = a('Hx5s'),
        d = a('Y2fQ'),
        s = l(a('iUf1')),
        f = function(e) {
          var t = e.children;
          return c.default.createElement(
            'pre',
            { className: s.default.pre },
            c.default.createElement(
              'code',
              null,
              c.default.createElement(o.default.Text, { copyable: !0 }, t),
            ),
          );
        },
        p = function() {
          return c.default.createElement(
            u.PageHeaderWrapper,
            null,
            c.default.createElement(
              r.default,
              null,
              c.default.createElement(n.default, {
                message:
                  'umi ui \u73b0\u5df2\u53d1\u5e03\uff0c\u70b9\u51fb\u53f3\u4e0b\u89d2 umi \u56fe\u6807\u5373\u53ef\u4f7f\u7528',
                type: 'success',
                showIcon: !0,
                banner: !0,
                style: { margin: -12, marginBottom: 24 },
              }),
              c.default.createElement(
                o.default.Text,
                { strong: !0 },
                c.default.createElement(
                  'a',
                  {
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    href: 'https://pro.ant.design/docs/block',
                  },
                  c.default.createElement(d.FormattedMessage, {
                    id: 'app.welcome.link.block-list',
                    defaultMessage:
                      '\u57fa\u4e8e block \u5f00\u53d1\uff0c\u5feb\u901f\u6784\u5efa\u6807\u51c6\u9875\u9762',
                  }),
                ),
              ),
              c.default.createElement(f, null, ' npm run ui'),
              c.default.createElement(
                o.default.Text,
                { strong: !0, style: { marginBottom: 12 } },
                c.default.createElement(
                  'a',
                  {
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    href: 'https://pro.ant.design/docs/available-script#npm-run-fetchblocks',
                  },
                  c.default.createElement(d.FormattedMessage, {
                    id: 'app.welcome.link.fetch-blocks',
                    defaultMessage: '\u83b7\u53d6\u5168\u90e8\u533a\u5757',
                  }),
                ),
              ),
              c.default.createElement(f, null, ' npm run fetch:blocks'),
            ),
            c.default.createElement(
              'p',
              { style: { textAlign: 'center', marginTop: 24 } },
              'Want to add more pages? Please refer to',
              ' ',
              c.default.createElement(
                'a',
                {
                  href: 'https://pro.ant.design/docs/block-cn',
                  target: '_blank',
                  rel: 'noopener noreferrer',
                },
                'use block',
              ),
              '\u3002',
            ),
          );
        };
      t.default = p;
    },
  },
]);
