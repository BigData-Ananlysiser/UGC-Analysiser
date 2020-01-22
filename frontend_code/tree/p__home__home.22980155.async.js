(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [6],
  {
    '92lj': function(e, t, a) {
      'use strict';
      var o = a('tAuX'),
        r = a('g09b');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var i = r(a('2Taf')),
        n = r(a('vZ4D')),
        l = r(a('l4Ni')),
        s = r(a('ujKo')),
        c = r(a('MhPg')),
        d = o(a('q1tI')),
        m = r(a('MT78')),
        f = r(a('xez2')),
        u = (function(e) {
          function t(e) {
            var a;
            return (
              (0, i.default)(this, t),
              (a = (0, l.default)(this, (0, s.default)(t).call(this, e))),
              (a.getEchartWidth = function() {
                (a.PieRef.current.style.width = a.PieRef.current.offsetWidth),
                  (a.PieRef.current.style.height = a.PieRef.current.offsetHeight),
                  (a.LineRef.current.style.width = a.LineRef.current.offsetWidth),
                  (a.LineRef.current.style.height = a.LineRef.current.offsetHeight),
                  (a.RectRef.current.style.width = a.RectRef.current.offsetWidth),
                  (a.RectRef.current.style.height = a.RectRef.current.offsetHeight),
                  a.resized(),
                  a.resizedLine(),
                  a.resizedRect();
              }),
              (a.resized = function() {
                var e = a.state.myEchart;
                e.resize();
              }),
              (a.resizedLine = function() {
                var e = a.state.myEchartLine;
                e.resize();
              }),
              (a.resizedRect = function() {
                var e = a.state.myEchartRect;
                e.resize();
              }),
              (a.state = { myEchart: null, myEchartLine: null, myEchartRect: null }),
              (a.PieRef = d.createRef()),
              (a.LineRef = d.createRef()),
              (a.RectRef = d.createRef()),
              a
            );
          }
          return (
            (0, c.default)(t, e),
            (0, n.default)(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  var e = m.default.init(document.getElementById('pieChart'), f.default),
                    t = {
                      title: {
                        text: '\u67d0\u7ad9\u70b9\u7528\u6237\u8bbf\u95ee\u6765\u6e90',
                        left: 'left',
                        textStyle: { fontSize: (this.PieRef.current.offsetWidth / 1082) * 28 },
                      },
                      tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c} ({d}%)',
                        textStyle: { fontSize: (this.PieRef.current.offsetWidth / 1082) * 16 },
                      },
                      legend: {
                        data: [
                          '\u76f4\u63a5\u8bbf\u95ee',
                          '\u90ae\u4ef6\u8425\u9500',
                          '\u8054\u76df\u5e7f\u544a',
                          '\u89c6\u9891\u5e7f\u544a',
                          '\u641c\u7d22\u5f15\u64ce',
                        ],
                        padding: [30, 100],
                        textStyle: { fontSize: (this.PieRef.current.offsetWidth / 1082) * 16 },
                      },
                      series: [
                        {
                          name: '\u8bbf\u95ee\u6765\u6e90',
                          type: 'pie',
                          radius: [30, 110],
                          roseType: 'radius',
                          center: ['50%', '60%'],
                          data: [
                            { value: 335, name: '\u76f4\u63a5\u8bbf\u95ee' },
                            { value: 310, name: '\u90ae\u4ef6\u8425\u9500' },
                            { value: 234, name: '\u8054\u76df\u5e7f\u544a' },
                            { value: 135, name: '\u89c6\u9891\u5e7f\u544a' },
                            { value: 1548, name: '\u641c\u7d22\u5f15\u64ce' },
                          ],
                          emphasis: {
                            itemStyle: {
                              shadowBlur: 10,
                              shadowOffsetX: 0,
                              shadowColor: 'rgba(0, 0, 0, 0.5)',
                              textStyle: { fontSize: (this.PieRef.current.offsetWidth / 1082) * 1 },
                            },
                          },
                        },
                      ],
                    };
                  this.setState({ myEchart: e }), e.setOption(t);
                  var a = m.default.init(document.getElementById('LineChart'), f.default),
                    o = {
                      title: {
                        text: '\u5806\u53e0\u533a\u57df\u56fe',
                        textStyle: { fontSize: (this.PieRef.current.offsetWidth / 1082) * 28 },
                      },
                      tooltip: {
                        trigger: 'axis',
                        axisPointer: { type: 'cross', label: { backgroundColor: '#6a7985' } },
                      },
                      legend: {
                        data: [
                          '\u90ae\u4ef6\u8425\u9500',
                          '\u8054\u76df\u5e7f\u544a',
                          '\u89c6\u9891\u5e7f\u544a',
                          '\u76f4\u63a5\u8bbf\u95ee',
                          '\u641c\u7d22\u5f15\u64ce',
                        ],
                        padding: [30, 100],
                        textStyle: { fontSize: (this.PieRef.current.offsetWidth / 1082) * 16 },
                      },
                      grid: { left: '3%', right: '4%', bottom: '3%', containLabel: !0 },
                      xAxis: [
                        {
                          type: 'category',
                          boundaryGap: !1,
                          data: [
                            '\u5468\u4e00',
                            '\u5468\u4e8c',
                            '\u5468\u4e09',
                            '\u5468\u56db',
                            '\u5468\u4e94',
                            '\u5468\u516d',
                            '\u5468\u65e5',
                          ],
                        },
                      ],
                      yAxis: [{ type: 'value' }],
                      series: [
                        {
                          name: '\u90ae\u4ef6\u8425\u9500',
                          type: 'line',
                          stack: '\u603b\u91cf',
                          areaStyle: {},
                          data: [120, 132, 101, 134, 90, 230, 210],
                        },
                        {
                          name: '\u8054\u76df\u5e7f\u544a',
                          type: 'line',
                          stack: '\u603b\u91cf',
                          areaStyle: {},
                          data: [220, 182, 191, 234, 290, 330, 310],
                        },
                        {
                          name: '\u89c6\u9891\u5e7f\u544a',
                          type: 'line',
                          stack: '\u603b\u91cf',
                          areaStyle: {},
                          data: [150, 232, 201, 154, 190, 330, 410],
                        },
                        {
                          name: '\u76f4\u63a5\u8bbf\u95ee',
                          type: 'line',
                          stack: '\u603b\u91cf',
                          areaStyle: {},
                          data: [320, 332, 301, 334, 390, 330, 320],
                        },
                        {
                          name: '\u641c\u7d22\u5f15\u64ce',
                          type: 'line',
                          stack: '\u603b\u91cf',
                          label: { normal: { show: !0, position: 'top' } },
                          areaStyle: {},
                          data: [820, 932, 901, 934, 1290, 1330, 1320],
                        },
                      ],
                    };
                  this.setState({ myEchartLine: a }), a.setOption(o);
                  for (
                    var r = m.default.init(document.getElementById('RectChart'), f.default),
                      i = [],
                      n = [],
                      l = [],
                      s = 0;
                    s < 30;
                    s++
                  )
                    i.push('\u7c7b\u76ee'.concat(s)),
                      n.push(5 * (Math.sin(s / 5) * (s / 5 - 10) + s / 6)),
                      l.push(5 * (Math.cos(s / 5) * (s / 5 - 10) + s / 6));
                  var c = {
                    title: {
                      text: '\u67f1\u72b6\u56fe\u52a8\u753b\u5ef6\u8fdf',
                      textStyle: { fontSize: (this.PieRef.current.offsetWidth / 1082) * 28 },
                    },
                    legend: {
                      data: ['bar', 'bar2'],
                      padding: [30, 100],
                      textStyle: { fontSize: (this.PieRef.current.offsetWidth / 1082) * 16 },
                    },
                    tooltip: {},
                    xAxis: { data: i, splitLine: { show: !1 } },
                    yAxis: {},
                    series: [
                      {
                        name: 'bar',
                        type: 'bar',
                        barWidth: '10px',
                        itemStyle: {
                          normal: {
                            color: new m.default.graphic.LinearGradient(
                              0,
                              0,
                              0,
                              1,
                              [
                                { offset: 0, color: '#41E1D4' },
                                { offset: 1, color: '#10A7DB' },
                              ],
                              !1,
                            ),
                            barBorderRadius: [30, 30, 0, 0],
                            shadowColor: 'rgba(0,255,225,1)',
                            shadowBlur: 4,
                          },
                        },
                        data: n,
                        animationDelay: function(e) {
                          return 10 * e;
                        },
                      },
                      {
                        name: 'bar2',
                        type: 'bar',
                        barWidth: '10px',
                        itemStyle: {
                          normal: {
                            color: new m.default.graphic.LinearGradient(
                              0,
                              0,
                              0,
                              1,
                              [
                                { offset: 0, color: '#fc97af' },
                                { offset: 1, color: '#f7f494' },
                              ],
                              !1,
                            ),
                            barBorderRadius: [30, 30, 0, 0],
                            shadowColor: 'rgba(0,255,225,1)',
                            shadowBlur: 4,
                          },
                        },
                        data: l,
                        animationDelay: function(e) {
                          return 10 * e + 100;
                        },
                      },
                    ],
                    animationEasing: 'elasticOut',
                    animationDelayUpdate: function(e) {
                      return 5 * e;
                    },
                  };
                  this.setState({ myEchartRect: r }), r.setOption(c);
                },
              },
              {
                key: 'componentDidUpdate',
                value: function() {
                  var e = this;
                  setTimeout(function() {
                    e.getEchartWidth();
                  }, 200);
                },
              },
              {
                key: 'render',
                value: function() {
                  return d.createElement(
                    d.Fragment,
                    null,
                    d.createElement('div', {
                      id: 'pieChart',
                      ref: this.PieRef,
                      className: 'common_Echarts',
                      style: { height: 400, marginBottom: 20 },
                    }),
                    d.createElement('div', {
                      id: 'LineChart',
                      ref: this.LineRef,
                      className: 'common_Echarts',
                      style: { height: 400, marginBottom: 20 },
                    }),
                    d.createElement('div', {
                      id: 'RectChart',
                      ref: this.RectRef,
                      className: 'common_Echarts',
                      style: { height: 400, marginBottom: 20 },
                    }),
                  );
                },
              },
            ]),
            t
          );
        })(d.Component),
        h = u;
      t.default = h;
    },
    T7cl: function(e, t, a) {
      var o, r, i;
      (function(n, l) {
        (r = [t, a('MT78')]),
          (o = l),
          (i = 'function' === typeof o ? o.apply(t, r) : o),
          void 0 === i || (e.exports = i);
      })(0, function(e, t) {
        var a = function(e) {
          'undefined' !== typeof console && console && console.error && console.error(e);
        };
        t
          ? t.registerMap
            ? t.registerMap('china', {
                type: 'FeatureCollection',
                features: [
                  {
                    id: '710000',
                    type: 'Feature',
                    geometry: {
                      type: 'MultiPolygon',
                      coordinates: [
                        ['@@\xb0\xdc\xaf\xdb'],
                        [
                          '@@\u019b\u0134\xd5\u018a\xc9\u027c\u0123\xba\xf0\u0280\\\u018es\xc6N\u014c\xd4\u011a\xe4\x9cn\xdc\u01a4\u024a\u0102\u01c0\u0106\u0134\x9e\u0124\u01ca\u0168x\u011a\u012e\u01c2\u01ba\xf2\u018c\x82\x96\xe2\xd4\xae\u012eX\u0166\u0163\u01b8\x7fZ\xfb\xd0\x8b\u0195\u0191G\u0111\xa8\u012dM\xf3\xb7\u0119c\xeb\u019d\u0249l\xdd\u01af\u05b9\xc5\u0143^\xd3\xb7\x8f\x9d\u015b\u0143\u01cb\u018f\u010f\x8d\xed\xe5\u025bG\u0249\x99\xbf@\u0103\u0191\x8e\xa5\u0118W\u01ec\xcf\u0136\u0141\xe2',
                        ],
                        ['@@\\p|WoYG\xbf\xa5I\x86j@\xa2'],
                        ['@@\x85\xa1\x89@\x81\x88V^Rq\x88B\x81bA\x8cnTXeRz\xa4L\x9e\xab\xb3I'],
                        ['@@\xc6EE\x97\x84kWq\xeb\xa0@\x9c'],
                        ['@@fced'],
                      ],
                      encodeOffsets: [
                        [[122886, 24033]],
                        [[123335, 22980]],
                        [[122375, 24193]],
                        [[122518, 24117]],
                        [[124427, 22618]],
                        [[124862, 26043]],
                      ],
                    },
                    properties: { cp: [121.509062, 25.044332], name: '\u53f0\u6e7e', childNum: 6 },
                  },
                  {
                    id: '130000',
                    type: 'Feature',
                    geometry: {
                      type: 'MultiPolygon',
                      coordinates: [
                        [
                          '@@o~\x86Z]\x82\xaar\x89\xbac_\u0127\xb2G\xbcs`j\xce\u0178n\xfcs\xc2\x9c\u0142NX_\x93M`\xc7\xbd\xd3nUK\x85\u011c\x81\u0113s\xa4\xad\xa9yr\xfd\xa7u\u0123\x8c\x8fc\x7f\x86J\x8a\x9be',
                        ],
                        ['@@U`Ts\xbfm\xc2\x82'],
                        [
                          '@@o\xba\u018b\xc4d\x96eV\x8eDJj\xa3\x80J|\xc5dz\xc2\x95Ft~\x9eK\u0168\xb8I\xc6v|\x94\x87\xa2r}\xe8\x86\x8eonb\x98}`R\xce\xc4n\xb0\xd2d\xde\xb2\x84^\xae\x92ln\xd0\xe8\u0104l\xf0\xd3\x9c\xd7]\xaa\xc6}\x90\x8dLi\u0102\xb1\xd6\x8f`^\xb0\xc7\xb6p\xae\u0111Dc\x9c\u014b`\x8d\x96Z\xd4\x7f\x92\xb6\xeaqvF\xc6\x9a\x86N\xae\u0106TH\xae\xa6O\x92\xbe\x8aIb\xd0\xe3\xb4B\u0110\u0262\u0174\xc6\xed\u0226p\x96\u0110\xdeXR\x80\xb7nndO\x9e\xa4\x92O\xc0\u0108\u0192\xadQg\x98\xb5Fo|g\u0212\u0119SWb\xa9osx|hYh\x95g\u0143fm\xd6\u0129n\xba\x80T\xcc\x92Sp\x9b\xa2dY\u0124\xb6U\u0108jl\x92\u01d0p\xe4\xec\xeb|\xb3k\xdbfw\xb2Xj\x7fz~\xc2qbT\x8a\xd1\x84\u011b\u0168@|oM\x87\x92zv\x7f\xa2Zr\xc3Vw\xac\u0167\u0116\xb8f\x8c\xb0\xd0T\x80\xaaq\x8es{S\x9e\xafr\xa0\xe6\xddlNd\xae\xb2\u011e\xa0\u01c6iG\u0118\x82J\x99\xbclr}~K\xa8\u0178\u0190\xccW\xf6\x80\x99\xc6\x8azR\x9a\xa4l\xeam\u011eL\xce\x84\x92\x9d@\xa1|q]SvK\x80\xd1cwp\xcf\xcf\x81\x86\u013f\x8f\u0107\xe8n\u012aW\x90l\u0104kT}\x88J\x94\xa4~\x83\xc8T\x81\x84d\x84\x99pdd\u02be\u012c\x8a\x94\x8eBVt\x84E\xc0\xa2\xf4P\u010e\u0197\xe8@~\x82k\x96\xfc\\r\xca\u0114\xd6\xe6W_\xa7\xbcF\x98\x86\xb4\xa9\xf2D\xf2j\x90\x92\x88Y\xc8rb\u011e\u0101\xf8\u0140G{\u0180|\xa6\xf0rb|\xc0H`p\u029ekv\x82GpuARh\xde\xc6\u01f6g\u0118\x8aT\x8f\u01fc\u01b9S\xa3\xa8\xa1\xf9\xb3\u0158\xcd]\xbf\xc2y\x8d\x99\xf4EP\xa0xX\xb6\x8f\xb9\x7f\xdc\x87O\xa1\x93g\xda\xa1Iw\xc3\xe9\x91\xa6\xc5B\x87\xcf|\xc7\xb0\x85N\xab\xfamH\xaf\x9d\x8b\xe2\x9fD\xf9\x8ey\u015c\x9e\u0172I\xc4u\u0110\xa8D\x81\x9e\x95\xb8d\u0242\x87\x90\x82F\x9f\x83\x95\x9bOh\x87\u0111\xa9O\x9f\x9bi\xc3`ww^\x83\xcck\x9f\x91\xd1H\xab\u0187\u01e4\u0157\u013atFu\x85{Z}\xd6@U\x87\xb4\x85\u029aLg\x7f\xae\xafO\u0131\xb0\xc3w\x9f\xa0^\x98\x97\x80Vb\xc9s\x87\x88mA\x85\xea]]w\x84\xa7\x9bRRl\xa3\x87\u022d\xb5u\xafb{\xcdD\u011b\xef\xff\u0227\x8euT\xa3\u0121\x83\u011b\u0157\u0183\u011d\x93Q\xa8fV\x86\u018b\x95\u0185n\xada@\x91\xb3@\x9a\u010f\x84y\xc3\xbd\x8fI\u0139\xcaK\x9a\u016df\u010b\u0170\xf3\x8cxV@t\x8d\x88\u01af\x8cJ\x94]e\x83R\xbefe|rHA\x98|h~\u0116\u018dl\xa7\xcf\x7f\x8alT\xedb\xa0\xd8o\x88\xc5bbx\xb3^z\x90\xc3\u0136\x9a\xb6Sj\xaeA\x94y\xc2h\xf0k`\x9a\xabP\x80\x94\xcb\x88\xb5EF\x86\xdb\xacY\xa8\u013br\xf5qi\xbc\x89Wi\xb0\xa7\x90\x92\xd0\xb1\xb4\xb0^[\x88\xc0|\u0120O@\xc6xO\\t\x8ea\\t\u0115t\xfb{\u0121\x8c\u0227X\xfd\u012a\xd3j\xf9\xceRb\x9b\x9a^\xce\x9bf\x7fK[\xdd\x8fd\u011bYf\xed\xd9Ty\x8euUSy\u014c\u014f\u016f@Oi\xbd\x92\xe9\u0145\xadaVc\u0159\xa7ax\xb9X\u017b\xe1c\x87\x9eWU\xa3\xf4\xe3\xbaQ\xa8\xf7\xd1ws\xa5qEH\x89\xd9|\x89\x9b\u0161YQo\u0155\xc7y\xe1\u0102\xa3M\xc3\xb0o\u0165\x8f\xca\x89P\xa1m\x8f\x9aWO\xa1\x80v\x86{\xf4v\xee\u0113\xdcISp\xcchp\xa8\xa0\x91j\x86de\u0154Q\xd6j\x98\x7fX\xb3\xe0\x99\u0108[n`Yp\x7f@U\x9e\x96cM`\x92RKh\x8cEb\x9c\x94p\u015e\x7flNut\xaeEtq\x82ns\xc1\x8agA\x9d\x8bi\xfa\x81\x8boH\x87qCX\x87\x94hfgu\x93~\xcf\x8bWP\xbd\xa2G^}\xaf\xc5\u012bGC\x9f\x9d\xd1^\xe3ziM\xe1\u013cMT\xc3\u0198rMc|O_\x8f\x9e\xaf\u014e\xb4|\x87morDkO\\m\u0106Jfl@c\u0122\xac\xa2a\u0126tR\u0131\xd2\x99\xbe\xf9\u0180^ju\u0173\u0153K\xad\x83UFy\x99\x97\u019d\x85\x9b\u012b\xdb\xf7\u0105V\xd7q\u01a5V\xbfa\u0209d\xb3\x9dB\x9bqPBm\x9ba\xcb\u0111\u017b\u0123m\x93\xc5\xaeV\x8a\xb9d^K\x87Ko\x9fnYg\x93\xafXhqa\x7f\x94Ldu\xa5\x95\xcdp\u01c5\xa1K\u0105\xc5\x83k\u011d\u0119\u011bhq\x87}Hy\xc3\x93]\xb9\u01e7\xa3\x85\xcd\xf7\xbfq\xe1\xb5\xa7\x9a\x99g\x91\xa4o^\xe1\xbeZE\x87\xa4i`\u0133{n\x95\x83Ol\x8f\xbb\x9fW\xdd\u0114\u012fhg\x8d\x9bF[\xbf\xa1\x97\xdfkO\xfc\u0161_\x89\x80\u016b\x8bi\x84\u01f1\xe0Ut\u0117Gyl\x83}\x8d\x8c\xd3M}\x80jp\x7fEC~\xa1FtoQi\x91\x9aHk\x9dk{\x90\xc3m\xef\x82',
                        ],
                      ],
                      encodeOffsets: [[[119712, 40641]], [[121616, 39981]], [[116462, 37237]]],
                    },
                    properties: { cp: [114.502461, 38.045474], name: '\u6cb3\u5317', childNum: 3 },
                  },
                  {
                    id: '140000',
                    type: 'Feature',
                    geometry: {
                      type: 'Polygon',
                      coordinates: [
                        '@@\xde\u0129\xd2\x83S\x89ra}\xc1\x80yWix\xb1\xdce\xb4l\xe8\x93\xdf\xd3\u01cfok\x91\u0107i\xb5VZ\u0123\xa1co\x9c\x91TS\xcb\xb9\x7f\u012amn\xd5\u0144e\x96hZg{gtw\xaapXa\u011aTh\u0211p{\xb6Eh\x97\xaeR\u0107\u0191P\xbf\xa3\x91P\x9dmc\xb8mQ\x7f\xddW\x95\u010f\u0225o\xc5\xee\u0261\u0173A\u010f\xe4\xb3a\xcf\x89J\x91\xbd\xa5PG\xad\u0105SM\xad\x99\x85E\xc5ru\xb5\xe9\x80\x91Y\xd3\x8e\x95\u014c_d\x9b\u0112Co\xad\xc8\xb5]\xaf\x90_\xb2\xd5j\u0101\x8eK~\x8f\xa9\xc5\xd8^\xd4\x9bk\xef\xe7\u0103m\xcf\x91k]\xad\xb1\x83c\xdd\xaf\xd1\xc3mQ\xcd~_a\x97pm\x85\x8d~\xe7\xa1q\x93\x88u{J\xc5\u0167\xb7\x9dLs}\x96Ey\xc1\xc6cI{\xa4\x7fIi\x8dCfUc\x95\u018c\xc3p\xa7]\u011b\x9b\xabvD@\x7f\xa1S\xc0\x91\xb5M\x82\xc5wu\x8eYY\x87\xa1Db\xd1c\xa1h\x83\xd7]nkoQdaM\xe7~eD\x95\xdbtT\x89\xa9\xb1@\xa5\xf9@\xc9\xa1\x89ZcW|WqOJm\u0129l\xab\u0127\u015fvO\xd3\xabIq\x8d\u0103V\x97\xa5\x9fD[mI~\xd3\xa2cehi\xcd]\u0193~\u0125qX\x8a\xb7e\u01b7\x9cn\xb1\x93}v\x95[\u011b\u010f\x8e\u0155]_\x91\u0153\x95`\x89\xb9\x83\xa7\xd5\u014dI\x99o\xa9b\xads\x7f^}\x7f\xc9t\x8d\xb1\u016b\xab\xb3p\xa3\xff\xb7W\xb5|\xa1\xa5\u0103F\xcfs\xd7\x8c\xa5\x7f\u0145x\x9f\xcad\xd2{\xbav\u0134\xce\xea\xcc\u024a\xb2\xb6\x80\xfc\xa8|\xde\u01b8\xb5\u0232\x91LL\xfa\xc9\u018e\xa4\u03ca\u0119\u0114V`\x84_b\xaa\x8bS^|\x9fd\x8azY|dz\xa5p\x86Zb\xc6\xa3\xb6\xd2K}t\u0126\xd4\u0146\u01a0\x82PYzn\x80\xcdvX\xb6\u011an\xa0\u0120\x81\xd4\x84z\xfd\xa6\xaa\x98\xf7\x9e\xd1\u0138\xd9\x8eU\u020c\xb8\x82d\xf2\xdcJ\xf0\xb4\x92\xec\xfaNM\xac\x8cXZ\xb4\x91\xa4\u014a\u01f8_tldI\x9a{\xa6\u0180\xf0\u0120\u0224\xa5NehXn\x81YG\x82\x87R\xb0\xa0\u01acDj\xac\xb8|C\u011e\x84Kq\x82\xbaf\u0190i\u013a\xa9\xaa~\u0106OQ\xaa\xa0\xa4@\xec\u01e6\u024c\xb2\xe6B\x8c\xca\x94T\x9c\u0178\x98\u0282\u014d\u0116\x92\x9a\u0134\u015e\x96\u0200\x9c\xc6\xff\u0204l\u0164\u0112\xf6\x84t\x94\xce\xbd\xee\xbc\u0128Xh\x8c\x91\x98|\xaaM\xa4\xd0z',
                      ],
                      encodeOffsets: [[116874, 41716]],
                    },
                    properties: { cp: [112.549248, 37.857014], name: '\u5c71\u897f', childNum: 1 },
                  },
                  {
                    id: '150000',
                    type: 'Feature',
                    geometry: {
                      type: 'MultiPolygon',
                      coordinates: [
                        [
                          '@@\u010c^\xe2\xa3\u0102h\x96\x9a\u0116M\xc8\xc4w\x82\\f\u0166\xb0W\xa0\xa2\xbelu\u0178D\x84w\x8a\\\u0300\u0289\xcc\xdbM\x85\u0100[b\xd3\x9eEn}\xb6Vc\x85\xea\x93s\x83\x96\x9b\xaf\x8dPq\x83FB\x85\x89|S\x95\xb3C|k\xf1\x95H\x8b\x8fd\x91i\xc4\xa5\x8ds\x88\u0149\xc5\x91\x85P\xf3\xd1\xd1E^\x91\xc5Ppy_YtS\x99\x8dhQ\xb7aHwsOn\x7f\u0149\xc3\x9as\xa9iqj\x9b\x89\x80USi\xba]\xefW\x9a\x89\xabgW\x81\xa1A\x96\x81R\xeb\u015b\x9b\u0133\u0118\x95\x85\x8c\x81\u016f`\xe7\xf5h]y\xbb\u01c3\x9f\u01db\u04a4x\xd2m~zf}pf|\xdcro\xc8zrK\xc8\u0135S\u01a7\x84\u017c\u061c\u0120u\xa6\xf6',
                        ],
                        [
                          '@@sKC\x9a\x85GS|\xfa\xfeX\x94gp\x9b{\xc1X\xbf\x9f\u0107{\u01b1\u020f\xf1Z\xe1\u0114yo\xc1hA\x8f\x99}\u0145\u0106fd\u0149\x84_\xb9\x84Y\xb0\u0117\u01e9\xd1\xa1H\xaf\xb6oMQq\xf0\xa1\xcb\x99|\x91\xd1`\u01ad\u0141X\xbd\xb7\xf3\xdb\x93\x8dx\u011f\u012f\xc5cQ\x87\x88\x93\x83s\xabt\u020b\u01c5F\x93\x9f\x81\x9d\xf9^i\x8d\x91t\xab\u010c\xaf[\x9bh\x81\x81Ai\xa9\xe1\xa5\xc7\u011a\xd7l|\xb9y\xafY\u0235\u0193\x8b\xf1\x90\u01d9\xb5\xef\x82\u010b\x99\u013b|D\x9c\x99\xfc\u022d\xb6\xa1\x98\x9bo\u017d\xe4\xd5G\\\xc4\x8fT\xbf\xd2\xf5r\xaf\x9c\x9fLgu\xcfY\u0119R\u01a9\x9a\u0277\u014cO\\\u0130\xd0\xa2\xe6^\u014a\xa0\u0132\u0236\u0206b\xdcG\x8e\u011d\xac\xbf\u011aV\u010eg\xaa\x8d^\xedu\xbdj\xff\u0115\u0119j\u0131k@\u013d\x83]\u0117l\xa5\xcb\x87\u012d\xfb\xc1\x84\x83\u0117\xe9V\xa9\xb1\u0107n\xa9\xad\u0207\x9e\xcdq\xaf\xbd\x95Y\xc3\xd4\u0149\x93\xc9N\xd1\x9d\xc5\xddy\xb9Nq\xe1\u0285D\u01e1\xcb\xf1\xad\u0181Y\xc5y\u0331os\xa7\u020b\xb5\u02bd\u01d8\u01cf\u01ac\u0271\xe0\x91\u01b0N\xa2\u0194\xcau\u013e\xfd\u013e\u03ce\u022a\u01ba\u0242\u013c\x9ex\x9cZ\u0108}\xcc\u0149\u016a\x98\u013a\u0153\x8e\u012dF\u041b\u013d\u0305\u0223\u037d\xd2\u0175\xec\u01a9\xc7\u03cb\xff\u022e\u01e1\u014f\xe7\u0191\u016f\u0115~\xc7\x8d\x9b\xbc\u0233\xd0Uf\x86dIx\xff\\G\xa0\x8f\x88z\xe2\u024f\xd9O\xba\xb7pqy\xa3\x86@\x90\x8c\x8aq\xfe@\u01de\u02fdIB\xe4\u01a3zs\xc2Z\x86\xc1\xe0\u013bd\xf1\xb0\u0155z\xe9\xd8\u0171z\u0219C\xecD\u0210\u0134\u013af\xae\x8e\xc0\u013e\u01b0\xf8@\u025c\xd6\xdeK\u010a\u0147\u0184\xa7\x82\u0351t\u011b\xef\u0361VA\u0121\xd1\xd1\xbbd\xb3\xf6\u01cd\xddX\u0109\u0115\xd6{\xfe\u0109u\xb8\xcb\u0285\u011fU\u030e\xe9h\u0279\u0186\u0317\u032e\u0218\u01ca\u05a5\u095c\u0870\u0163\u0abe\xed\u03f2\xe4\u02aeW\xac\xae\u048ce\u05e8\u016b\u0220k\u026c\u027b\u033c\xe3\xfcf\u01a0S\u05e6\u0269\u03c2\xe5\u0208H\u03da\xceK\u01f3\u0372O\xf0\xcf\u0206\u0198\xbcC\u03da\u01da\u089a\u02fc\u0424\xd4\x82\xa4\u018c\x9e\u011e\x9d\u032aQ\u02a4\xb4\xbcm\u0220J\u02c0\x9f\u01b2\xc0\u0260m\u01d0n\u01d4\u010e\u0206\xde\u01e0N~\x80\u02a2\u011c\x82\xb6\u018c\u0106\u0118\u017a\u0286\u022c\u02ea\u011a\u0112\xb8\u011eG\u0216\u01b4\u0180j`\u0122\xe7\u0136\u0101\xe0\u0143\xba\u0113\u0122\x83\u0116\u0107\x9aY\x8c\xc0\u014e\xfc\xf4Q\xd0\xc2\u014e\u015e\u01c6\u015e\xea\u0196\x9a\x98o\u02c6D\u0124\xd5\xba\xd1\u01d8\xdb\u02e4\xb3\u0340g\u0144\x81\u0198\u0114\xc0^\x9e\xaa\u0182`\xaat\xbe\xe4\u019a\xea\u0126\u0100\xbc\xd0\x80\u0114\u01ce\xa8\u0214\xbb\u0360^\u02ee\xca\u0226\u01a4\xf8xRr\u015cH\xa4\xb8\xc2xD\xc4\x9d\x8c|\xf8\u02c2\u02dc\u01ae\x90\xd0\xac\u025aw\u0272Fj\u0114\xb2\xc4w\xb0\u01c6d\xc0\xc9\x9e_\u0138d\xee\xe0\u014ej\xca\x9c\xeaT\u011e\xaa\u014c\x87\u015cW\xc8|tq\u0122UB~\xb4\xb0\xceFC\x95\x8eU\xbcp\u0100\u0113\u0184N\xa6\x8d\xbeO\xb6\x8a\u0142K\u010aOj\x93\u011a\x94j\xb4\u011cYp\x98{\xa6\x84\x88S\u011a\xcd\\T\x9a\xd7\xaaV\x96\xf7\u0160\xed\xa8\xc5DK\xb0\xdft\u0147\u0114\x7fK\x9a\xa8\u01f5\xc2c\u013e\u0323\u011a\u01e3\u0204\u013dF\x87l\u0121U\u0135\x9c\u0147\x8b\u0223F\u0289\u0241\x83M\u011f\u012f\u028f\u01b6\u0277\xd8\u016dO\u01fd\xab\u01bd\x90\u016b\xb9\u01b1\u0151\u031d\u0228\xa7\u021e\u0298\u0116i\u025c\u0276\u02a6}\xa8\u05aa\u081c\u0300\u0187\u01ec\xb9\u01e8E\u02e6\u0125\xaa\xd4\xeaF\x8ex\xfaQ\x90\x84Er\xb4W\x84rh\xa4\u0190\xa0\\tal\u0108DJ\x98\xdc|[Pll\u031a\xb8\u018eG\xfa\xb4P\x9e\xacW\xa6\x86^\xa6\x96H]prR\x93n|\x90or\xbe\x90wLVn\xc7Iujkmon\xa3cX^\x8fBh`\xa5V\x94\x84\xa6U\xa4\xb8}\x80xRj\x96[^xN[~\xaa\x8axQ\x84\x82[`\xaaH\xc6\xc2Exx^w\x9aN\xb6\xca\x98|\xa8\xec\x86\x98\x80Mr\x9cdYp\x82\x90oRzNy\x98\xc0Ds~\x80bcf\xcc`L\x96\xben\x8b|\xbeT\x82\xb0c\xa8\xc8\xa2a\x82r\xa4\x96`[|\xf2D\u015e\u0114\xf6xEl\xd6dH\x84\xc0I`\x84\u010e\\\xc0\xec\x81~\xc6\x8eR\xbctf\x95\xa6^\xa2\u0137\xb6e\x94\xd0\xdaM\x8cptgj\x96\x84\u0261\u010c\xc5y\u0121L\xfb\x99\u0147V\x7f\xae\x8a\xc4\x8f\xc8\u0180\x86\u010e\xb0P|\xaaVV\x86\xaaj\x96\xac\u011a\xd2\xeap\xac\x96E|\u016c\xc2c|\xc0t\u0190K\xa0f\x88{\u0118F\u0112\x9c\u018cX\u01b2\u0105o\xbd\u0118\x91\\\xa5\x96o}\x9b\xdbu\xa3\xe7\xadkX\x91{u\u0129\xab\u0101\xed\xd3U\u0145\xdf\u0162q\x80\x8f\u0164\xa5ly\u0148[\x80oi{\xa6\x8bL\x87\u0144\x87\xf0F\u022a\u0216\x94\x9d\u0112L\x84\xbf\xcc\x8b\x88f\x8c\xa3K\xa3\u02ba\x99oqN\x9f\x83w\u011fc`ue\x97tOj\xd7\xb0KJ\xb1q\x83\xc6\u0121m\x89\u011a\u0157os\xac\x85qehqsu\x9c\x83H{\xb8kH\xa1\x8a\x85\xcaR\u01ea\xc7\u018cb\u0206\xa2\xb4\xe4\xdc\x8d\xa2N\xec\xc9\u0296\xa6\xe2\xa9\u017b\u061b\xc7@Vu\xbbA\x97yl\xdf\xed\xb9\u0135\xea\x85\xddlIS\x7f\xf2\xb3C\xb9\xcc\x8f\xe2\x84\xb2i\xb6\x92\xcco\xfa^H\x93\xb2C\u01dc\u04a3\u01c4\xa0z\xbcg^\xe8\xf6\u0170_\x8b\x82\x96\x86\u0132\u0115\xea\x84\x9c}g\xc1nUI\xabm\x89\x85\x84\x8b]j\x87vV\xbc\x8deuhwqA\x84\x8faW\x98\x83_\xb5j\x85\xbb\xe7jioQR\xb9\u0113\xc3\xdft@r\xb3[\xdbl\u0107\xcb^\xcd\xc9\xe1G\x93\x9bOU\xdb\x97OB\xb1\x95\x7fX\x9fk\xc5\x87\xb9\xa3k|e]ol\x99\x9fkV\xcd\xbc\xd5q\x7fta\xcf\xf5jg\xc1\xa3\xa7U^\x8c\x94RL\x88\xcbnX\xb0\xc7\x92Bz\x8d\x86^~wfv\x88ypV\xa0\xaf\x84\u01ab\u0109\u02ed\u022b\u0197\u0177\u027f\xff\u013f\u0191\u02c3\u011d\xff\xc3\u01c3\xdf\xcb\u0151\xf3\xa9\u01d0\u020d\u0152\x9d\u0116M\xd7\xcdEyx\x8b\xfep]\xc9v\xef\xe8\x91v\x9d\u0180n\xc2\u0134\xd6@\x82\x89\x86V~\u0108\x99\x8a\xb3ME\x88\u0138\xc5\u0116t\x97\u0113jy\xc4DX\xc4xGQuv_\x9bi\xa6aB\xe7w\x91\u02dbwD\x99\xa9{\x9ft\u0101mQ\x80{EJ\x8f\xa7KP\u015b\u0198\u01bf\xa5\x8d@\x89sCT\x95\xc9}\u0243w\x88\u0187y\xb1\x9fg\x90\xd1\x93}T[\xf7k\x7f\xd0\xe7\xa6\xab\x85S\xd2\xa5\xb8\xebBX\xbd\x89H\xe1\xc5\xb5\xc0\u011ftS\x90\xdd\xc2a[\u01a3\xb0\xaf\x81\xa6\x81P\xef\xa1\x81]\xa3\u0121\x93\x96\x93\xd2k\xaeG\xb2\x84\xe8Q\xb0\xf3Mq}E\x8a\xf3\u0190\xc7\\\x81\x83\x87@\xe1\xfcgQ\xcd\x8bu\xa5F\x83\x93T\xd5\x9b\xbfJ\xfb\x87]|mv\u0101\xceYua\x81^Wo\xc0a\xb7\xadz\u0105\xd2ot\xd7\xb6CL\u0197i\xaf\xa4m\u018eH\u01ca\xa4\xee\xec\u027e\u014a\xecTd\xe5wsR\x8d\xd6g\u0112\u0173\xfa\x81\xcd\u0121\xe4\xd5}Q\xb6\x97\x88\xbfA\x95\x86\x8b[\xa1\x8c{d\xd7uQA\x83\x9bM\x95xV\x8bvMOm\u0103l\xabct\x7f[w\xba_\x9a\xc7\xca\x8a\x8e\x9fjb\xc2\xa3\u0126S_\xe9\x93QZ\x93\x7f_lwgOi\xfd\x7fe`Y\x7fYLq\xa7I\xc1\x88\u01f3\xa3\xd9\xcb[\xd5\xaau\u018f\xb3\xcdT\x97s\xb7b\x81\xc1\u013d\xe4\u0117[\x9bb[\x88\u0157f\xe3cn\xa5\xeeC\xbf\xf7\xb5[\u014f\xc0Q\xad\u014d\x9a\u0109m\xbf\xc1^\xa3mJVm\x87\x97\x8fL[{\xcf_\x9d\xa3\x9bF\xa5\xd6\x8d{\u0179A}\x85\xd7Wu\xa9\xc5a\u0173\u0133\u01b3hB{\xb7TQq\xd9I\u0137\xcb\x91Z\u0111\xa9Yc|M\xa1\x85L\x95\x9deVU\xf3K_\x9d\x9dQWk\x92_\u0125\x91\xbf\xe3Z\x8f\x95\x81\xbbX\\\u0134uU\x83\xe8\x87lG\xae\u011b\u0142T\u0120\u011fD\u0143\x94Or\xcdd\x82\xc6\xcdz]\x8b\xb1\x85\u016d\xa9\x9f\xc5\x92]\x8c\xc5\xd0}U\xcb\xa5\xa9T\u010b\x99\xefxgckfWgi\\\xcf\u0112\xa5Hk\xb5E\x98\xeb{\xbb\xcfetcG\xb1ahUi\xf1iWs\u0241\x88\xb7c\x9d\x96C\x82\xd5k]w\u0211|\u0107a}w\x85Va\u011a\xe1\xa0\x9e\x8cG\xb0\xf9nM\xac\xaf\x86{\xc8\x88\xd0\xc6A\x92\xa5\xc4\xeaJx\xd9\xa2\x94hP\xa2\xdb\x88\xba\x80\xb5\x90wWO\x9f\xf3F\x8e\x9a\xc1z^\xc0\u0157\xce\xfa\xb4\xa7\xa2T\xa4\u01fb\u01baS\x90\u0117\x89\u01f5h\xdd\xc5QgvBHou\x81\u029dl_o\xbfGa{\xefq{\xa5|\u017f\u013fH\u0102\xf7a\u011d\xc7q\x87Z\x8f\x91\xf1i\xf1C\xb3\xaa\x97\x85\xbbE`\xa8\xe5X\u0113\xd5q\xc9\xfb[l\x95}\x81\xe7@\u010d\u0198\xf3O\xbf\xa1\x83FUs\x8dA\x89\x93\u02bd\u012bcc\x9aoc\x83\x82\x83\xc7S}\x84\x93\xa3\x87IS~\u0103l\x8fk\u0129X\xe7m\x90\u0108\x85\u0140\xd0\x82o\xd0dx\x7f\xd2uL^T{r@\xa2\x91\x9e\xcd\x83\u011dK\xe9n\xa3kQ\x99\x89y\x9a\xc5\xf5\x7f\xcbX\u0177\u018fL\xa7~}kq\x9a\xbb\x81IH\u0117\u01c5j\u011d\x9f\xbb\xd1\xdeo\x9f\xe5\xb0qT\x9dt|r\x8d\x7f\xa9\xcfS\x8b\xaf\xb7e\u0168\u0115x\xab\xc8[eM\x88\xbfyu\x88\x91pN~\xb9\xcfyN\xa3{\xa9\x92\x97g\x8b\u0127W\xed\xbb\xcd\xbes\x93\u0259\u0161\u01c5_\xc3\u0100\u0257\xb1\u0105\x7f\x99\u0133\u0109\x8f\u028d\u014c\u0177\x97S\x9b\xc9\x93A\x8b\xb1\xe5\u01e5\u024b@\xeb\x9f\xa3R\xa9\u0105P\xa9}\u0139\xaa\u018fj\xb9er\x81\x83LD\u011d\xb7{i\xab\u01abC\xa3\xb5',
                        ],
                      ],
                      encodeOffsets: [[[127444, 52594]], [[113793, 40312]]],
                    },
                    properties: {
                      cp: [111.670801, 40.818311],
                      name: '\u5185\u8499\u53e4',
                      childNum: 2,
                    },
                  },
                  {
                    id: '210000',
                    type: 'Feature',
                    geometry: {
                      type: 'MultiPolygon',
                      coordinates: [
                        ['@@L\x96\x8e@@s\x99a'],
                        ['@@MnNm'],
                        ['@@\x81d\x82c'],
                        ['@@e\xc0\x82C@b\x82\x93\x9d\x89'],
                        ['@@f\x87\x85Xw\x7fkbr\x96\xc4`qg'],
                        ['@@^jtW\x91Q'],
                        ['@@\x81~\xa0Y]c'],
                        ['@@G`\u0114N^_\xbf\x81Z\x82\xc3M'],
                        ['@@iX\xb6B\x8bY'],
                        ['@@\x84Y\x83Z'],
                        ['@@L_{Epf'],
                        ['@@^WqCT\\'],
                        ['@@\\[\x93\x8b\xa7t|\x94\xa4_'],
                        ['@@m`n_'],
                        ['@@\xcfx\u01cc{q_\xd7^Giip'],
                        [
                          '@@@\x9c\xe9^B\x86\x87nt\x88a\xca\x7fU\x97\x98\x9f]x\xa0\xaf\xc4P\u0132\xad\xb0h\x80\u0299K\xb3\x86V\x88\xd5@Y~\x86|Ev\u0139s\xc7\x84\x8d\xa6\xadL^p\xc3\x82\xb2\u0178\xd2G\xa0\x92\xcbl]\x84xx\xc4_\x98fT\xa4\u010e\xa4c\x8e\x9cP\x84\x96C\xa8\xb8TVjbgH\xb2sd\xcedH\x90t`B\x88\x97\xb2\xacGJj\u0119\xb6[\xd0hjeXdlwh\x9a\xf0S\u010c\xa6\xaaV\xca\xcf\x80\x8b\xc6\x91Z\x98\xc6\u0176\xae\xb2\x86^\x8c\xcey\x81\xc5\xcecPq\u0144\x93\u011aDM\u0127\u011c\u0141H\xad\x88k\x84\xe7vV[\u0133\xbcW\x96\x82Y\x90\xc0\xe4\u0126\x92\x91`Xl\x9eR`\x9e\xf4LUV\x9efK\x96\xa2\x86{NZd\u0112\xaa\x92Y\u0138\xcc\xdaJRr\xb8SA|\u01b4g\u0174\u0134\xc6bv\xaa\xd8X~\x86\u017aB\x8e|\xa6\xd5\x9cE\x9e\xa4\xd0`\\|\x90K\x88\x98UnnI]\xa4\xc0\xc2\u010an\u014e\x99R\xae\u0150\xbf\xb6\\\xc0\xf8\xedDm\xa6\xceb\u0168ab\x89\x9ca\u0118\\\u013e\xe3\x82\xc2\xb8a\x98t\xceS\u0190\xb4\xa9v\\\xd6\xda\xcc\u01f4\xa4\xc2\x87\xa8JKr\x80Z_Z\x80fj\xfehPkx\x80`Y\x94\x92RI\x8cjJcVf~sCN\xa4\xa0\x88E\x82\x9ch\xe6\x8fm\x89\x96sHy\xa8S\xf0\xd1\xcc\\\\\x9f\u0110RZk\xb0IS\xa7fq\u0152\xdf\xfd\xe1\u011e\x8d\xd9\xc9\xd6[^\xaf\u01e4\u0172\x84\xea\xb4\\\xa6\xac\u0106PM\xaf\xa3\x9f\x88\xbbu\xefp\xf9zEx\x80\x9ean\xb5yoluqe\xa6W^\xa3\xcaL}\xf1rkqW\u0148\xfbP\x99\x89UP\xa1\xf4J\x8aoo\xb7\x8cU}\xa3\x8c\x84[\xb7\xa8@X\x8c\u0138\x9f\x93\x8b\x8bDXm\xad\xdb\xdd\x8f\xba\x87\x9bGU\x8bC\xc1\xaa\xbd{\xed\u0102^\x90cj\x87k\x93\xb6\xc3[q\xa4\x93L\xc9\xf6\xb3cux\xabzZf\x83\xb2BW\xc7\xaeY\xdf\xbdve\xb1\xc3C\x95\xfd\xa3W{\xda^\x92q^s\xd1\xb7\xa8\x8b\xcdO\x81t\x93\xb9\xb7C\x81\xa5\x87GD\x8f\x9br\xed@w\x8d\xd5K\u0163\xc3\x9d\x8b\x98\x9f\xabV\xb7i}x\xcb\xcd\xf7\x91i\xa9\u011d\x87\u025d\u01e1]\x83\x88{c\x99\xb1OW\x8b\xb3Ya\xb1\x9f\x89_\xe7\xa9\x82H\x9e\u0115o\u01ab\x80\u0147q\x83r\x9d\xb3\x89Lys[\x84\xf1\xb3\xafOS\x96\u010fOMisZ\x86\xb1\xc5FC\x7f\xa5Pq{\x8f\x82\xc3[Pg}\\\x97\xbfgh\u0107O\x85\x95k^\u0123\xc1\x8dF\u0131\u0109\u0125M\xadoEqqZ\xfb\u011b\u0149\xb3F\x91\xa6o\u0135\x97h\x9f\xd5P{\x8f\xaf~T\x9d\xcdl\xaa\x89N\x89\xdfY\x93\xd0{Ps{\xc3VU\x99\x99e\u010ewk\xb1\u0149V\xd3\xbd\u017dJ\xe3\x81\xc7\xc7\xbbJm\xb0dhc\xc0ff\x91dF~\x88\x80\u0100e\u0116\x80d`sx\xb2\xa0\x9a\x83\xaeE\u017c\u0100dQ\x8d\x8b\xc2d^~\u0103\xd4H\x88\xa6\\\x9bLKp\u0104Vez\xa4NP\xa0\u01f9\xd3\x97R\x99\xc6\u0105JSh\xada[\xa6\xb4\xc2ghwm\x7f\x80B\x90\xd0\xa8\u017ahI|\x9eVV\x8e\x97\x8e|p]\xa0\xc2\xbc\xe8N\xe4\xb6\xdcB\xd6\xbc\x93L`\x82\xbcb\xd8\xe6\x8cKV\x94\x9fpo\x9c\xfaNZ\xde\xd2Kxpw|\xcaEMnzEQ\x9a\x8eIZ\x94\x8eZ\x87NB\x88\u010d\xdaF\xdc\xe7m\u0129\x82W\u012a\xf1t\x91\xde\u0135\xc7\xf1Z\xabuD\x82\xb1|\u018fl\u0133\xa5\xe3n\xb7\xb1Pm\xcda\x89\x96d\x8fa\x87\xa0CL\x87\u01d1\x7fk\xf9\xf3\xa1\xb3\xcf\xabQa\u010b\xcf\x91O\xc3\xa5\xd5\u0111Q\u0225\u010b\u01ady\x8b\xb3\xc3A',
                        ],
                      ],
                      encodeOffsets: [
                        [[123686, 41445]],
                        [[126019, 40435]],
                        [[124393, 40128]],
                        [[126117, 39963]],
                        [[125322, 40140]],
                        [[126686, 40700]],
                        [[126041, 40374]],
                        [[125584, 40168]],
                        [[125453, 40165]],
                        [[125362, 40214]],
                        [[125280, 40291]],
                        [[125774, 39997]],
                        [[125976, 40496]],
                        [[125822, 39993]],
                        [[125509, 40217]],
                        [[122731, 40949]],
                      ],
                    },
                    properties: { cp: [123.429096, 41.796767], name: '\u8fbd\u5b81', childNum: 16 },
                  },
                  {
                    id: '220000',
                    type: 'Feature',
                    geometry: {
                      type: 'Polygon',
                      coordinates: [
                        '@@\x91p\xe4\x94\xb3PCl\x83Fbb\xcdz\x9a\x80wBG\x92\u012d\x80Z\x84\xc5i\x93\xbb\x83lY\xad\u010b\xb2Sg\x8ek\xc7\xa3\x97^S\x89\x93qd\xaf\x95\x8bR\x85\xa9\xe9\x8e\xa3\xafS\x86\\cZ\xb9i\u0171\u018fCu\u018d\xd3X\x7f\x87oR}\x93M^o\x95\xa3\x85R}o\xaaU\xadF\x85uuXHl\x8fE\xc5\x95\x87\x80\xcf\x7f\xa9\xa4\xdbmT\x8e\xfe\xa4D\x96\xb2\xc4uf\xe0\xc0\xadXX\xc8\xb1Ae\x84yYw\xacdv\xf5\xb4K\xca\xa3\x94\\r\xb5\xc4l\x94i\x88\x8fd\u0101]|\xee\xa9\xbeD\xc2V\x8c\x9cH\xb9\x88\xde\x90\xae\xdcWn\x8cC\x94\x8c\u0137\xa0W\x8b\xa7@\\\xb8\x8b\x83~\xa4\x8bVp\xb8\x89p\xf3IO\xa2\x8aVO\x9a\u0147\xfcrXql~\xf2\xc9K]\xa4\xa5Xrfkvzpm\xb6\x9dbw\x7fyFo\xfav\xf0\x87\xbc\xa4\xa0N\xb0\u0105O\xa5\xab\xb3[\x83\xe9\u01e1\u0171_\xb0\xd5\\\xda\xca\u011d\x8e\xfe\xe2\u0151\xe0erR\xa8\xadJYl\u010fQ[\xa0\xcfY\xeb\xd0\xa7TGz\x95tn\x8a\xdf\x90\xa1gF\x81\x8fkM\x9f\u0101G\xc1\xa4ia\x8d\xa0\xc9\x89\x99\xc8\xb9`\\xs\x80\xacd\u0106kNnuNU\x8a\x96u\x9eP@\x82vRY\xbe\x95\x96\\\xa2\x85\x8cG\xaa\xf3\u0104~R\xe3\xd6\xce\u0122\xf9\x82\u0111\u0174\xd5hQ\x8extc\xe6\xebS\u027d\u0149\xed\xeb\u01c9\xa3\u018dG\xa3nj\xb0K\u0198\xb5Ds\xd8\xd1py\u0106\xb8\xae\xbfbXp\x82]vb\xcdZu\u0102{n\x88^I\xfc\x9c\xc0S\xd6\x84\x94\xa6E\x8cvR\xce\xfbh@\xe2\x84\x88[\x82\u018f\xc8\x89\xf4~FNr\xaf\xf4\xe7R\xb1\x83\xadH\xd1l\x95\x92\u0122\x96^\xa4\xa2\x82O\xf0\x9f\x8c\xe6vxs\u0152]\xde\xc1T\x8f\u0120s\xb6\xbf\xe2\xc6\x8aGW\xbe\xecA\xa6\xb7T\xd1\xac\x86\xe8\xa5\x80\xcf\xd0J\xa8\xbc\x8f\xd2\xd6\xbc\x83\u01a6\u0244x\xca~S\x96tD@\x8a\u0102\xbc\u0174\xa1jl\xbaW\x9ev\xd0\x89\x88z\u01a6Z\xd0\x8e\xb2CH\x97\xa0\x84A\x9dxiukd\x8b\x8cGgetqmc\x9e\xdb\xa3Ozy\xa5cE}|\x85\xbecZ\x85\x8dk\x82\x89\xbfu\u0150\xe3[oxGikfe\xe4T@\x85\x9aSUwpi\xdaFM\xa9\x92\xa3\xe8^\xda\x9f\x82`@v\xb6e\u0148\x86f\x81\xa0h\x98eP\xb6\x90\x9et\x93\xe4Ol\xc3\x94Ug\x83\xdez\u0178U`l\x9c}\xd4\xc6Uv\xd8_\u014c\xac\xd6i^\u0109i\xa7\xb2\xc3\x8aB~\xa1\u0108\x99\xdaEgc|DC_\u0226m\xb2rBx\xbcM\xd4\xa6\u016ed\u0128\xc3\xe2Yx\x91\u0198DV\xc7\u013a\u013fg\x8d\xbfcw\xc5\\\xb9\x98\xa5Y\u012dl\x81\x9c\xa4\x9eOv\x86\x9aLjM_a\xa0W`z\u013cM\u017e\xb7\\swq\xddSA\x87\x9a\x97q\x89\u015a\u0133\x7f\xaf\x8a\x91\xb0k\x90\x8aR\u0113\xb0wx^\u0110k\u01c2\xd2\x93\x84\x9c\x9e\x93\x9c\x8e\x84\x8b\\]\x98nr\u0102}\xb2\u010a\u0172\xd2\xf8\xe3h\xb7M{yMzys\u011bn\x9d\u0112\u0121V\xb7\xb0\x93G\xb3\xbcX\xc0\x93\x93\x99\xa4\xb9\x8di\xb4o\xa4\u0143\x9a\x9f\xc8`\xcc\x83\u01f2\xc4U\u011ed\\i\xd6\x9a\x8c\x88m\xc8B\u0124\xdc\u0272DEh\xa0LG\xbe\u0180\xc4\xbe{Wa\x8c\x8dY\xcd\xc8\x8f\u0122\u0118\xd4R\xee\u0110j\x8b}\xc7\x9e\x93ccj\x87oUb\xbd\x9a\x8d{\x93h\xa7\u01fe{K\x8b\u0196\xb5\xce\xf7\x9eG\u0100\xd6\u0160\xe5\u01b0\xces\xadl\x9b\x95yi\u0113\xab\x8b`\xe5\xa7\x9dH\x7f\xa5Ae\x9d^\xa7\x84GK\x81}i\xe3\\c]v\xa9\u0123Z\x93m\xc3|\x93[M}\u0123T\u025f\u0135\xc2\x91\xc2`\xc0\x7f\x96\xe7m\x89\x91FK\xa5\xda\xed\xc1bX\x9a\xb3\xccQ\xd2\x91Ho\x81f{\x89]e\x80pt\xb7G\u014b\u011cY\xfcn\u010e\u0173VY^\x92\x98yd\xf5k\xc5ZW\x84\xabWUa~U\xb7Sb\x95wG\xe7\u01d1\x82\x93iW^q\x8bF\x82\x93\x9buN\u011d\x8d\x97\xb7Ew\x84\x8bUtW\xb7\xdd\u010f\xe6\xa9PuqEzwAV\x95\x97XR\x89\xe3Q`\xad\xa9G\x8cM\x87ehc\x9bc\x94\x9d\u010f\xcf\x9dd\x87\xa9\xd1W_\xcf\x97Y\u0185\x8c\xbb\x85\xe9\\\x8d\x83\u0279~\u01d9G\xb3m\xd8\xa9B\u0161\x90uT\xa7\u0124\xbd\xa2\xc3_\xc3\xbd\x91L\xa1\x8d\x91\xfd\x9fqT^rme\x99\\Pp\x95ZZb\x83y\x9f\x92uy\x81bQ\x97ef\xb5]Uh\u013fDCm\xfbva\x9a\xd9NSk\x9dCwn\x89c\u0107fv~\x85Y\x8b\x84\xc7G',
                      ],
                      encodeOffsets: [[130196, 42528]],
                    },
                    properties: { cp: [125.3245, 43.886841], name: '\u5409\u6797', childNum: 1 },
                  },
                  {
                    id: '230000',
                    type: 'Feature',
                    geometry: {
                      type: 'MultiPolygon',
                      coordinates: [
                        [
                          '@@\u01a8\x83\u0136TL\xc7yqp\xc7\xdbqe{~oyen}s\x89`q\x87i\x8dXG\x94\xf9]\xcbp\xbd\x93\xa9l\xc9\x87\xc1p]\xde\xf1\xb4F\u0102\x94^f\x91\xe4\x8f\xee\xbak\xe0\x98z\xbcBUv\xc8@',
                        ],
                        [
                          '@@U\x83\xb5N\xff\xa5\u012b\xe8\xe7\x81\x8b\x95\x9dH\xcd\xf8\u0195\xb6L\x8c\u01fd|g\xa8|\x94\x99\x8ea\xbepVi\x88dd\x9d\x94~\xc8i\x8c\xed\u010f\xd3Q\u0121\u0117\xc7\x90Z\xce\x8b\x8eXb\xbd|\u017f\xc3H\xbd\x9fKFg\u0271C\u0123\xdb\xc7A\x87n\x99\x8bj\xd5c[V\u011d\u01f1\xc3\xcb\x84\xc7_\x99\xa0\xa3\u0144\xb3p\x8ej\xa3\xba\x94\x9a\xbf\x94\xbbWH\xb4\xaf\x94U\xb8\u0111\u0122m\x9et\u011cyzzNN|g\xb8\xf7\xe4\u0171\xd1\xb1\u0109\u0101~mq^\x97\x8c[\x8d\x83\x94\x9b\x9b\x9d\x94\x83\u01c1\xd1\u010flw]\xafxQ\u0114\x8f\x89\xafl\x89\x92\x80\xb0\u0159\u0134r\x8a\x99\x98B\x88\xdeTxr[t\u017d\xb8\u013bN_y\x9fX`biN\x99Ku\x85\x9dP\x9b\xa3k\x82Z\u012e\x97\xa6[\xbax\xc6\xc0dh\x8e\u0139\u0140U\xc8\u0197Cw\x92\xe1Z\u0127\xc4\u016dc\xd3\xa5\xbbNAw\xb1q\u0225nD`{Chd\xd9F\u0107\x9a}\xa2\x89A\xb1\xc4j\xa8]\u010a\xd5j\u014b\xab\xd7`Vu\xd3\xc5\x9b~_k\u0177V\xddyh\x84\x93Vk\xc4\xe3Ps\x94\x8f\x9dO\xb5\x97f\x9fge\x82\u0147\x85\xb5f@u\x81_\xd9\xa0\xd9c\x9f\xaaN\xaa\xd9EojVx\x99T@\x86\xe3SefjlwH\\p\u014f\xe4\xc0v\x81\x8a\x8elY\x86\xbdd{\x86F~\xa6dyz\xa4P\x9d\xdcndsrhf\x8bHc\x8cvlwjF\x9c\xa3\x81G\x98\xb1D\xcf\x8d\u01a5Y\x87y\xcf\x8a\x9du\xb9Xik\u013f\xa6\xcfq\u0197\u01c0O\u015c\xa8LI\x90|FR\x7f\u0102n\xa0s\xaa|C\x9a\u02dczx\x90A\xe8\xa5b\x9cfudTr\x7fFW\xc1\xb9Am|\x98\u0114\u0115s\u0137\xc6F\x87\xb4N\x9a\x89}\u0107\x85U\x81\x8a\xd5@\xc1\u0133\u017fmu\x9e\xe7\x92u\xf0^\xca\xfdow\x8cFz\xd8\xce\u0115N\u0151\x9e\u01cf\u020e\xf4\xaa\xcc\u0152\u01c4\xe0\u0100\xc4\u02c4\u011e\u0140\u0192\u0280\u0100\u0198\u0178\u02ee\u022c\u01ac\u010a\xb0\x83U\x9fzou\x87xe]}\x8e\x85Ay\xc8\x91W\xaf\xccmK\x87\x93Q]\x8b\u012a\xbaif\xb8\xc4X|sZt|\xbd\xdaU\xce\xa0lk\x9a^p{f\xa4l\x88\xbal\xc6W\xa0\x96\x80A\xb2\x98PV\xdc\x9cPH\x94\xca\xe2]\xce\u0108\xcc\xdck\xb4\\@q\xe0s\u0114\xc4Q\xbapRij\xbc\xe8i\x86`\xb6\x97\x84bX\x83\x90rBgxfv\xbb\x8euUi\x88\x8c^v\x8d~\x94J\xacmVp\xb4\xa3\x8c\xb4VWrnP\xbd\xec\xa2BX\x82\xach\x99\x8a\xf0X\xb9^Tj\x7fV\x9c\x8ari\xaaj\x99t\u014a\xc4m\x80tPGx\xb8bgR\x9a\x8esT`Zoz\xc6O]\x92\xd2F\xf4\xd2\x86O\xc6\x92\x87\u014a\x8cv\xc5\x9e\x94p\x92cG\x8c\xea\x8asx\xb4DR\x96\x8c{A\x86\x84EOr\xb0\x8c\x95\x9ex|\xed\x9cb\x88\xb3Wm~\x9dDVj\x8d\xba\xe9NN\x86\xcb\xdc\u02db\u0276\xadG\x83x\u0177CSt\x9f}]\xfb\u014d\x95Smtu\xc7\xc3\u0115N\x95\x99\u0101g\xbb\x9a\xedT\xabu}\xe7\xbdB\u0135\xde\u02a3\xa5\xeb\xca\xa1M\xdb\x8e\xb3\xe3\u0205\xa1\u018ba\u01e9\xc8\xc9Q\x89\x86G\xa2\xb7lG|\x9b\x84tvgrrf\xab\x86pt\u0119\u0158n\x8a\xc5\u0122r\x84I\xb2\xafLi\xd8sPf\x98_v\u0120d\x84xM\xa0pr\u02b9\x9aL\xa4\x8b\xa4\x87e\xcb\x8c\x83\xc0\u0111K\x93\x9e\xef\xd9VY\xa7]I\x87\xf3\xe1\u0125]\u0137\x86K\x88\xa5\x8cj|\x7fp\u0147\\kz\u0163\xa6\x7f\x90\u0161n\u0146\xe4\xd4V\u0102\xee\u012a\xac|vW\x92\xael\xa4\xe8\xd8r\x82\x98\x95xm\xb6\u0103~l\xc4\u01af\u0104\u0344\xf6\u0204E\xd4\xa4\xd8Q\u0104\x96\u0104\xbb\u01a2j\u0226O\u01fa\xa8\xecS\u0156\xc6\u01acy\x94\x8dQ\x9cv`\x96cw\x83ZS\xcc\xae\xfc\xb1\u01c4]\u0140\xe7\xacB\xac\xa9\u0144z\u01ba\u0177\u0244e\x90eO\x81\u0128S\x92\x9d\x8cfm\xa0\u010a\x82\u0180P\u030e\u0113z\xa9\u010a\x82\xc4\xd5\xcamg\x9f\xc7sJ\xa5\u0194\x88\u014a\u015b\xe6\x92\xce\x81\xd1qv\xbf\xedUO\xb5\xaa\x89\xc2n\u0126\xc1_\xbd\xe4@\xea\xed\x85\xa3P}\u0120[@g\u0121}g\x93\u024a\xd7\x93\xfb\xcfWX\xe1\xa2u\u017e\u01bb\xccsN\xcd\xbd\x9d\u018e\xc1\xa7\u010d\u0150\x9bA\x8f\u0113eL\xb3\xe0ydl\x9b\xa6\u0118V\xe7\u0141p\u015b\u01c6\u013d\u013a\u017f\xca\x83Q\xed\xdc\xe7\xdb\u0121\xd4\x8fs\u0115\xac\x97\u01f8\xafY\xdf\u010b\u0121H\xb5\xa0\xa1e\xe5`\x9d\u013c\x83r\u0109\u0158\xf3\u01a2F\xec\x93\u010eW\xf8x\xcak\x86\x94\u0188d\u01ac\x8fv|\x96I|\x7f\xb7\xa9Nq\u0144R\u0140\x83\xa4\xe9\x94e\u014a\x9c\u0140\x9b\x88\xe0\u0140U\xb2\u0155\u0180B\x82\x7fQ\xa3\u010e}L\xb9\xcek@\xa9\u0108u\u01f0\u0173\u01e8\x94\xda\xa7\u0188nT\x7f\xcb\xc7\xe9\u019f\xcacf\u010d\u0164^Xm\x87\x97H\x8d\u010a\u0115\xcb\xabW\xb7\u010b\xebx\xb3\u01d4\u0137\xd0\u010bJ\u0101\x82w\u0130_\u0138\x98\u0200^\xf4Wr\xad\xb0o\xfa\xac\u0126\x85\u0168K~\x94\u0230C\u0110\xb4\u01f6\xa3\x92fN\xce\xe8\xe2w\xa2Xn\u016ee\xc2\xc6\u0136\x8e\x90\xbe\xbex\xe4L\u0134\x81\u0118l\u013cO\xa4\xd2\u0128A\xa2\xca\u025a\xa8\xae\x82\xd8C\xd4\xa0\u016cG\u01a0\x94\u01a6Y\u011c\x87\u0118\xdc\u01acDJ\x97g_\u0365\u0153@\u010d\u0145\u013bA\x93\xb6\xaf@w\xceqC\xbd\u0108\xbbN\x9f\u0103\xebK\x99\u010f\xcdQ\x93\xd9\x7f\u01ab[\xab\xc3\xed\x95g\xdf\xd4\xc7O\xdd\xe1W\x91\xf1\x8fuZ\x93\xaf\u0125\x80\x9f\x8d\u0155\u0101\xa1\xd1\u0137Ju\xa4E\xa0\x9f\xe5\xaf\xb0WK\xc9\xb1_d_}}\x8dvy\x9f\xf5u\xac\xef\xb9\xd3U\xb1\xbd@g\xcf\xbfr\xc3\xbdD\x89\x86g\x85Cd\x89\xb5\x97\xb0MF\x81\x8fYxw\xbfCG\xa3\x8bR\u019b\xbd\x7f\xd5{]L\xa7{qq\u0105\x9a\xbfB\xc7\u01bb\u011f\xeb\x9a\u072d\u01ca\xcb|c\xb2}F\xb5}\x9b\xd9Rs\xd3p\x8fg\x7f\xb1\x8aQNq\u01eb\u014bRw\u0155n\xe9\xd1\xc9K\x9f\x86\xabSeYR\x85\u014b\x8b@{\xa4SJ}\x9aD\xa0\xdb\u01d6\u058d\x9f]g\x9dr\xa1\xb5\u0177jqW\xdbham\xb3~S\xab\x93\x84\x9b\xde]',
                        ],
                      ],
                      encodeOffsets: [[[127123, 51780]], [[134456, 44547]]],
                    },
                    properties: {
                      cp: [126.642464, 45.756967],
                      name: '\u9ed1\u9f99\u6c5f',
                      childNum: 2,
                    },
                  },
                  {
                    id: '320000',
                    type: 'Feature',
                    geometry: {
                      type: 'Polygon',
                      coordinates: [
                        '@@c\xfe\xc5Pi\x8a`Z\x9fRu\xa5\xc9\\]~\xb0\x8eY`\xb5\x86\xd3\x7f\x83^ph\xc1bn\xc0\u015f\xfa\x8e\xf2a\x96\u012c\xbaT\xd6\u0152b\x82\x98e\xa6\xa6\x80{\xb8Z\xe2\u0107Np\x8c\xa9\x9eHr|^\x88mjh\x8aSEb\\afv`sz^lk\x8elj\x8b\xc4tg\x8b\xa4D\x98\xad\xbeX\x9a\xbf\xc0\x92|\u0110\x94iZ\x84\x9d\u0200\xe5B\xb7\xee}GL\xa2\xf5c\xdfja\x9fyBF\xb5\xcfC^\u012d\x95c\xd9t\xbfs\u011fH]j{s\xa9HM\xa2\x83Q\x7fnD\xc0\xa9Da\xdc\xde\x8c\xb7jg\xe0iDbPufjDk`dPO\xee\x83hw\xa1\u0125\x87\xa5\x9aG\x98\x9fP\xb2\u0110ob\xbarY\x86\x84\xee\xb6aH\u0162\xb4\xa0]\xb4\x82r\u0131l\x9dw\xb3r_{\xa3DB_\xdbd\xe5uk|\x88\u0168\xafF\x7f\xa0C\xbayr{XFy\x99e\xb3\xde\u010b\x87\xbf\xc2\x99k\u012dB\xbf\x84Mv\xdbpm`r\xda\xe3\x94@\u0118\xb9h\xe5g\xcb\xd6\u01bfxnl\u010d\xb6\xc5\xec\xbdOt\xbe\x7fdJl\x8aVJ\u0102\x8a\x9c\u01c0\x9c\u015eqvnO\x8a^\x9fJ\x94Z\x91\u017c\xb7Q}\xea\xcd\x8e\xc5m\xb5\xd2]\x8e\u018d\xa6Dq}\xacR^\xe8\u0102\xb4\u0140\u013b\u010aI\xd4\x92t\x9e\u0132yQ\u0150\u0120MNt\x9cR\xae\x7f\xf2Lh\x8f\x89\x9b\u011as\xa9\xbb\x9c}O\xd3\x8cGZz\xb6A\\j\u0128F\x88\xe4O\u0124\x98HY\x9a\x86Jv\x90\xdeHNi\xdca\u010e\x9a\xc9\x96nFQl\x9aNM\xa4\x88B\xb4\u0104N\xf6\u0242tp\x96\u016cdf\xe5\x85\x88\x8bqm\xbfQ\xfb\x8a\xf9\u015e\x87\xdab\xa4u\u0143J\u0174u\xbb\xb9\u0104\x95l\x81\u0216\u0127\u0174w\u030c\u0175\xb2\u01f9\u01e0\u035bh\u012d\u0142\u0195r\xe7\xfc\xb1Y\x99xci\x87t\u011f\xae\x9dj\u0171\xa2KO\u0137\x95Coy`\xe5\xaeVTa\xad_\u0100]\u0150\xdd\u025e\xef\xb2\u02af\xca^]afY\u01f8\xc3\u0106\u0113\u012a\u0223J\u0111\u034d\xf4\u018b\xc4\x9d\xc4\xcd\x8e\u012b\x89\xe7\xdb\u0248\u01e5\xa3\xad\xdbmY`\xf3\xa3Z\x8d\xab\xa7\xb0\xd3\xb3QafusN\u0131\u01c5_k}\xa2m[\xdd\xf3D\xb5\x97\xa1RL\u010diXy\x87\xc5N\xef\u0103\xa1\xb8i\u0114\xcf\x91N\xcc\u0155o\u0113d\u014d\xee\xe5\u0164\xfbHcs}~\xdbw\x7fb\xf9\xb9\xa3\xa6\xd3C\x81t\x8bOPr\x83E^\xd2o\x8ag\x99\u0109I\xb5\x9e\xdb\xc5\u02b9K\x85\xa4\xbdphM\x8a\xfc`o\xe6\x80\x86\u0140',
                      ],
                      encodeOffsets: [[121740, 32276]],
                    },
                    properties: { cp: [118.767413, 32.041544], name: '\u6c5f\u82cf', childNum: 1 },
                  },
                  {
                    id: '330000',
                    type: 'Feature',
                    geometry: {
                      type: 'MultiPolygon',
                      coordinates: [
                        ['@@E^dQ]K'],
                        ['@@\x81jX^j\x87'],
                        ['@@sf\x8abU\x87'],
                        ['@@qP\\xz[ck'],
                        ['@@\x91R\x83\xa2\x82FX}\xb0[s_'],
                        ['@@Cb\x9c\\\x97}'],
                        ['@@e|v\\la{u'],
                        ['@@v~u}'],
                        ['@@Qx\xc2F\xaf}'],
                        ['@@\xb9n\x8cv\xdes\xafo'],
                        ['@@rSkUEj'],
                        ['@@bi\xadZ\x8cP'],
                        ['@@p[}INf'],
                        ['@@\xc0\x7f\xbf\x80'],
                        ['@@\xb9dnb\x8c\x85'],
                        ['@@rS\x9fBnR'],
                        ['@@g~h}'],
                        ['@@FlEk'],
                        ['@@OdPc'],
                        ['@@v[u\\'],
                        ['@@Fj\xe2L~wyoo~\x9bs\xb5L\x96\\'],
                        ['@@\xace\xb9aN\x88'],
                        ['@@\\n\xd4\xa1q]L\xb3\xeb\\\xff\xae\x8cQ\xd6\x8e'],
                        ['@@\xcaA\xad\xa9[\xac'],
                        ['@@Kx\x8cv\x7f\xad'],
                        ['@@@hlIk]'],
                        ['@@pW{\x8do||j'],
                        ['@@Md|_mC'],
                        ['@@\xa2\x85X\xa3\xcf\x8dylD\xbcX\x88tH'],
                        ['@@hl\xdc[LykAvy\x8f\x81fw\x8d^E\x9e\x9b\xa4'],
                        ['@@fp\xa4Mus\x93R'],
                        ['@@\xae_ma~\x8f\x95L\xc1\xac\x9aZ'],
                        ['@@i\x9dM\x84xZ'],
                        ['@@ZcYd'],
                        ['@@Z~dOSo|A\xbfqZv'],
                        ['@@@`\x94EN\x8f\xa1v'],
                        ['@@|\x96TY\x8f{'],
                        ['@@@n@m'],
                        ['@@XWkCT\\'],
                        ['@@\xbaw\x9aZRk\u0115WO\xa2'],
                        ['@@\x99X\x7f\xae\xb1Gr\xc6\xaa\\\xd4\xe1Xq{\x8b'],
                        ['@@\u016fTG\xb0\u0104LHm\xb0UC\x8b'],
                        [
                          '@@\xa4\x8e\x80a\xdcx~}dt\xfcG\xe6\u0163\u014e\xed\u0114c\u0156pM\xcb\xd0\x92j\u0113\xa2\xb7\xf0\u0104\xc6Mz\x88jWK\u010e\xa2Q\xb6\x98\xc0_\xea\x92\x94_B\u0131\x80i\x7f\xabpZ\x80gf\x80\xa4Nrq]\xa7\u0102N\xae\xabH\xb1\x87y\u01b3\xed\xbe\xd7\u0178\u012b\xe0L\u0142\u010d\u0174\u01dd\u0102\xed\xc0B\u0156\xd5\xaa\x88\x8a\xc1\u0156H\u0157\u0149\xe5q\xfb\xf5\x90i\xa8h\xdc\xb7\x83\xf1t\xbb\xb9\xfdv_[\xab\xb8m\x89YL\xaf\x89Q\xaa\x85m\u0109\xc5dM\x88\x95g\xc7jc\xba\xab\x95\u0119\x9c\xac\xadK\xad\xb4\x83B\xab\xc2\u0105co\u010b\\xKd\xa1g\u011b\u0167\xab\xae\xe1\x92[~\u0131xu\xb7\xc5\x94Ks\xcb\xc9\x8fc\xa2\xd9\\\u012d\u019b\xebbf\xb9\x9d\xad\u0123S\x83\u011c\x9dk\xe1\u0189\xd4\xad\u0108ZB{\x8aaM\x91\xb5\x89fz\u0149f\xe5\xc2\u0167\u012f\u018b\u01dd\xca\u0115\x81\u0121\u0107\xa3g\xb3ne\xad\u0105\xbb@\xad\xa6S\xae\x82\\\xdf\xf0C\x9a\x7fh\x99iq\xaa\u012diAu\x87A\x9d\xad\xb5\x94\x8d_W\xa5\u01a3O\\l\u010b\u0122ttC\xa8\xa3t`\x88\x99PZ\xe4uX\xdfB\x8ds\x87\u013byek\x80\x9dO\u0111\u0121\u0135HuXB\x9a\xb5]\xd7\x8c\x87\xad\xad\\\x9b\xb0\xae\xacF\xa2\x8f\xbep\x90\xb5\xbck\u0158\xf3\xacW\xe4t\x92\xb8|@\x9e\x95L\xa8\xb8\xb5r\x93\xba\xf9\xb3\xd9~\xa7WI\x8b\x9fZW\x8e\xae\x92\xb1\xd0\xa8\xd2\xc9x\x80`\x89\xb2p\u011c\x95rO\xf2gt\xc1Z}\xfe\xd9]\x84\x92\xa1\x8c\x9fFK\x82wsPlU[}\xa6Rv\x8dn`hq\xac\\\x94\x90nQ\xb4\u0118RWb\x94\x82_\xa0rt\u010cFI\xd6\x8ak\x8a\x8a\u0126PJ\xb6\xd6\xc0\xd6J\u0108\u0104T\u011a\xf2\x9eC\xa0\xb2@P\xfa\x85\xd8z\x9c\xa9P\xee\xa2\xa3\x9cC\xc8\xda\x9c\u0112\xb1\x84h\u0156\x87l\xac\xe2~nm\xa8f\xa9\x96i\u013c\xabm\x87nt\x96u\x86\xd6Z\xdc\xc4j\x93\x8aL\x8e\xaeE\xcc\x9cF\xaa\xb2i\xcax\xd8\xa8\x9eI\xc8hhst',
                        ],
                        ['@@o\\V\x92zRZ}y\x81'],
                        [
                          '@@\x86@\xb0\xa1m\xdb\x9bG\u0115\xa8\xa7Ian\xe1[\xfd\u01a4jf\xe6\x87\xd8L\x96\x95\xe4Gr\x99',
                        ],
                      ],
                      encodeOffsets: [
                        [[125592, 31553]],
                        [[125785, 31436]],
                        [[125729, 31431]],
                        [[125513, 31380]],
                        [[125223, 30438]],
                        [[125115, 30114]],
                        [[124815, 29155]],
                        [[124419, 28746]],
                        [[124095, 28635]],
                        [[124005, 28609]],
                        [[125e3, 30713]],
                        [[125111, 30698]],
                        [[125078, 30682]],
                        [[125150, 30684]],
                        [[124014, 28103]],
                        [[125008, 31331]],
                        [[125411, 31468]],
                        [[125329, 31479]],
                        [[125626, 30916]],
                        [[125417, 30956]],
                        [[125254, 30976]],
                        [[125199, 30997]],
                        [[125095, 31058]],
                        [[125083, 30915]],
                        [[124885, 31015]],
                        [[125218, 30798]],
                        [[124867, 30838]],
                        [[124755, 30788]],
                        [[124802, 30809]],
                        [[125267, 30657]],
                        [[125218, 30578]],
                        [[125200, 30562]],
                        [[124968, 30474]],
                        [[125167, 30396]],
                        [[124955, 29879]],
                        [[124714, 29781]],
                        [[124762, 29462]],
                        [[124325, 28754]],
                        [[123990, 28459]],
                        [[125366, 31477]],
                        [[125115, 30363]],
                        [[125369, 31139]],
                        [[122495, 31878]],
                        [[125329, 30690]],
                        [[125192, 30787]],
                      ],
                    },
                    properties: { cp: [120.153576, 30.287459], name: '\u6d59\u6c5f', childNum: 45 },
                  },
                  {
                    id: '340000',
                    type: 'Feature',
                    geometry: {
                      type: 'MultiPolygon',
                      coordinates: [
                        ['@@^iuLX^'],
                        ['@@\x82e\xa9Ehl'],
                        [
                          '@@\xb0Z\xc6\xeb\u010e\xb5mk\u01c0w\xcc\xd5\xe6h\xbagB\u011d\xe2\x8dq\xd9\u010a\x8fz\x9b\xd6g\u0146t\xc0\xc1\u0102\x8a\xc6\xe1\x92hEz|WzqD\xb9\x80\x9f\xb0E\x87\u0167l{\xe6v\xdccA`\xa4C`|\xb4q\x9ex\u0132k\x81q^\xb3\xb3\x9fG\u0161\xb5b\x83\xedZ\x85\xb9qpa\xb1\u010f\xa0OH\x97\xa6\x99\u0126\x88x\xa2\x84gP\xedcOl_iCveaOjCh\xdf\xb8i\xdd\x8bb\xdb\xaaCC\xbf\x80m\x84RV\xa7\xa2A|t^i\u0120G\xc0t\xdas\x96d]\u012e\xd0DE\xb6zAb\xa0\xe0i\xf6dK\xa1~H\xb8\xed\xe6A\x9e\u01ffY\x83\x93j{\u010f\xbf\x91\x99\xc0\xbdW\x97\xae\xa3Ch\x8c\xc3si\x8c\x8dkkly]_teu[bFa\x89Tig\x87n{]Gq\xaa\x9do\x8b\u0108MY\xe1|\xb7\xa5\x7ff\xa5\x81\x97\u0151aS\xd5\u0117\x99N\xb5\x8d\xf1\u011e\xabIm\x8c_m\xbf\xc2a]u\u011cp\xa0\x85Z_\xa7{C\x83\xe4g\xa4\xb0r[_Yj\x89\xc6Od\xfd\x93[\x8eI[\xe1\xb7\xa5\x93Q_n\x87\xf9gL\xbemv\x99\u02caB\xdc\xc6\xb6\x9d\u010aJh\x9ap\x93c\xb9\x98O]i\u0160]\x9c\xa5\xa0jtsggJ\xc7\xa7\x9dw\xd7j\xc9\xa9\xb1\x9bEF\xcb\x8d\xad\x89Ki\x94\xdb\xc3\xd5Yv\x85s\x95\x88m\xacnj\u013b\xaa\x95\xa7emn\xe1}k\xab\u0155\x88\x83g\u0111\xb2\xd9\x9bD\xc7\xa4\x9b\xed\xa1\xaaOy\x9b\x86\xd7O\xf9\xb1@D\x9f\xf1\x9dS\u0119\u0107\u0103\xd5I\xd5\xbfI\xb5\u0125O\x89\x89\x8fjN\xd5\xcbT\xa1\x8d\xbftN\xe6\u0147\xe0\xe5y\u0137r\u0115q\xa7\xc4\u0129sW\xc6\xdf\x8eF\xb6\x9d\x9eX\xae\xbf\x89m\x8c\x99w\x85RI\xde\x93f\xdfoG\x91\xb3\x7f\xbe\xa9uyH\x91\u012f{\u0181\u0127\xafAFnuP\x8f\x85\xcd\xd4z\x9a\x8cV\x97d\xe0\xf4\xba^\xd0\xe6d\xb4\x7f\x80\x87oG\xa4{S\x89\xac\u0107x\xe3}\x9b\u0167\xd7K\u01e5\u0129\xab\x9e\xd5OE\xd0\xb7\xd6d\xd6s\u0198\xd1\xa8[\x92\xdb^Xr\x7f\xa2\xbc\x98\xa7xv\xc4\x9b\xc6\xb5`K\x94\xa7\xa0t\xd2\xb4Cvlo\xb8fz\u0168\xf0\xbeNY\xb4\u0131~\xc9\u0114\u0113\x85\xdf\xfa\x9dL\xc3\xc3\x8f\x96_\xc8\xcf|]\xc2\xcfFl\x94g`b\x9ae\x9e\x9e\x80n\xbe\xa2pU\x82h~\u01b4\u0116\xb6_\x82r\xa0s\u0104~c\x9e\x94\u0188]|r\xa0c~`\xbc{\xc0{\u0212iJjz\x8f`\xee\xc0\x8dT\xa5\xdb\xb3\x85]\x92u}\x9bf\x85\xefQl{skl\x93oNd\x9fj\x9f\xe4\xcbzDv\u010doQ\x8a\u010fHI\xa6rb\x93tH\u0114~BmlR\x9a\x97V_\x84\u0127TLn\xf1H\xb1\x92D\x9e\x9cL\x91\xbcL\x98\xaal\x90\xa7\u0164a\xb8\x8c\u011alK\xb2\x80\\R\xf2vDc\xce\x7fJbt[\xa4\x80D@\xaehh~kt\xb0\u01fez\x8f\xd6@\xbe\x8d\xaadb\x84Yh\xfc\xf3Z\xa0\u0148\xb6vHr\u013e\\\xca\x97JuxAT|dm\xc0O\x84\x8b[\xc3\xd4\x8bG\xb7\u011a\u0105\u0110l\u016a\xdapSJ\xa8\u0138\x88Lv\xdecP\xe6\u0137\u0168\x8e\xaem\xd0\x90\x88\xe1l\x9fwKh\xefgA\xa2\u0173\xc6\xa9\xde\x96\xa4O\xc8\x9cm\x92\xb0\x8cK\xb4\x90',
                        ],
                      ],
                      encodeOffsets: [[[121722, 32278]], [[119475, 30423]], [[119168, 35472]]],
                    },
                    properties: { cp: [117.283042, 31.86119], name: '\u5b89\u5fbd', childNum: 3 },
                  },
                  {
                    id: '350000',
                    type: 'Feature',
                    geometry: {
                      type: 'MultiPolygon',
                      coordinates: [
                        ['@@\x93zht\xb4\x8f\x87]'],
                        ['@@aj^~\u0106G\x97\x8f\xa9O'],
                        ['@@ed\xa8\x84C}}i'],
                        ['@@@v\x88PGs\x7fQ'],
                        ['@@\x89sBz\x82ddW]Q'],
                        ['@@S\x8e\xa8Q\x93{'],
                        ['@@N\x8eVucW'],
                        ['@@qptBAq'],
                        ['@@\x89\x92\xb8[mu'],
                        ['@@Q\\pD]_'],
                        ['@@jSwUadpF'],
                        ['@@eX\xaa~\x83\x95'],
                        ['@@AjvFso'],
                        ['@@fT\x96\x9b_\xc7\xed\\\x9f\x99\x97v|ba\xa6jZ\xc6y\x80\xb0'],
                        ['@@IjJi'],
                        ['@@wJI\x80\x88x\x9a\xab\xbcA\x7foNe{M\xad\x90'],
                        ['@@K\x89\xb1\xa1\xd3\x88\x94\u010c\xe4eZ\x81'],
                        [
                          '@@k\xa1\xb9Eh~c\xaewBk\x8bUpl\xc0\xa1I\x95~M\u0101\x8de\xa3bN\xa8gZ\xfd\xa1a\xb1\xd6cp\xa9Ph\x9eI\x94\x9f\xa2Qq\x85\xc7Gj\x9d\x9d\x7f\x8b|\xa5U\x99\xa0g[Ky\xac\x8d\x8d\u014f\x8d\x96v@Op\x88t\xc9E\x9f\x90F\x84\x90\\@\xa0\xe5\x7fA\xac\x88V{X\u0123\x89\u0110\x9dBy\x85cp\x81\u011b\x85\xbc\xb3\u0102p\x8f\xb7\xa4\x83\xa5o\x93hqq\xda\xa1\u0145Ls\x81\x83^\xc3\xa1\x97\x9e\xa7ql\x9f\xc0hH\x81\xa8MCe\xbb\xe5\xc7GD\xa5zPO\xa3\u010d\xd9kJA\xbc\xdf\x96\u0117\x8fu\x9b\u0115e\xfb\xd2\x8di\xc1\u0167\x90SW\xa5\x98Q\x8a\xfb\u0157\xbd\xf9\u011bc\xdd\xa7S\xf9\u0129\u0105SW\xf3\xab\xed\u0119AC\xb5\x9beR\x97\xe5\x81\u01c3RC\xd2\xc7Z\xcd\xa2\x8b\u017a\xb1^dls\x8ctjD\xb8\x95\x82Zpu\x9e\xd4\xe2\xc3\x92H\xbeoLU\xea\xc3\xd4jj\u0113\xf2\xb4\u0104W\x82\u019b\x8d\x85^\xd1\xa5\x8b\u0126\x9f@\xc7\xf2\x96\x8am\x8c\x83Ow\xa1\xf5yJ\x86yD}\xa2\u010f\x8f\xd1\xc8\u0121f\x8d\x8aZd\x96a\xa9\xba\xb2z\xa3\x9aN\x96\x83jD\xb0\xd6tj\xb6\xacZS\xce~\xbec\xb0\xb6\xd0m\x98x\x82O\xb8\xa2Pl\xb4\x9eSL|\xa5\x9eA\x86\u022a\u0116M\x92\u0146\u0132g\xae\xe1IJ\u010c\u0112\xfc`\xa0\x8eQF\x87\xach|\u0102\x93J@z\xb5\xa0|\xea\xb3\xc8\xa0\xb8U\xd6\u016c\u016c\xc0Ett\u0138r\x82]\x80\x98\xf0\x8eM\xa4\u0136\u0132Ht\xcf\xa0A\x92\x86\x9e\x7f\u012ckvsq\x87^a\xcebv\x8cd\x96\x99f\xca\xf2SD\x80\xb4Z^\x92xPs\u0102\x9erv\x8b\u019e\u0140\x98\x9djJd\xd7\u0158\xc9\xa0\xaeA\x96\xce\xa6\u0124d\x80x\u0106qA\x8c\x86ZR\x94\xc0M\u017a\x8cn\u010a\xbb\x8c\u0130\xd0Z\x97\xa0YX\x96\xe6J\x8ay\u010a\xb2\x88\xb7\xb6q\xa7\xb7\x96K@\x9d\xb7{s\x91X\xe3\xf4\xabl\u0157\xb6\xbbo\x8f\x90\xbdE\xa1\xad\xab\xa2\xb1\xa8Y\x88\xae\xd8\x8b\xb6^A\x99vW\u0136G\u0112\u0122\x9ePl\x7fzf\x88\u013c\x8et\xe0AvWY\xe3\x9aO_\x87\xa4sD\xa7ss\u010c\u0121[k\u01a4PX\xa6\x8e`\xb6\x93\x9e\xae\x88BBv\u012ajv\xa9\x9ajx[L\xa5\xe0\xef\x81[F\x85\xbc\xcd\xcb\xbb\u011fV`\xab\x95Ip\x99}cc\xc5\u0125ZE\x8b\xe3oP\x85\xb4B@\x7f\x8aD\x7f\x97\xb8m\xb1\x93z\xab\u01b3\x97\xbf\xe5\xb3BR\xd8\xb6\x88\x9cWl\xe2\xfe\xe4\u0105`\x93]Z\x7f\x8f\xa3T\x7f\x81c\x97\xa0\u0139G\xb5\xb6H\x99m@_\xa9\x97k\x8c\x89\xbex\u0128\x87\xf4\u0209\xf0X\xab\xbd\u0111CI\x8f\x7fb\u0107qK\xb3\xc1\x8b\xc4\u0161\xacOA\x8dw\xe3\xbbaL\u0149\x87\xcb\u0125W[\x93\xc2GI\x97\xc2Nx\u0133\xa4D\xa2\x8e\x8f\xee\u010e\xceB\xa7\xb0_J\x7f\x9cGs\x83\xa5E@\x85\xa4u\u0107\x85P\x91\xe5\x86c\x90uMuw\xa2BI\xbf\x87]zG\xb9gu\u012eck\\_',
                        ],
                      ],
                      encodeOffsets: [
                        [[123250, 27563]],
                        [[122541, 27268]],
                        [[123020, 27189]],
                        [[122916, 27125]],
                        [[122887, 26845]],
                        [[122808, 26762]],
                        [[122568, 25912]],
                        [[122778, 26197]],
                        [[122515, 26757]],
                        [[122816, 26587]],
                        [[123388, 27005]],
                        [[122450, 26243]],
                        [[122578, 25962]],
                        [[121255, 25103]],
                        [[120987, 24903]],
                        [[122339, 25802]],
                        [[121042, 25093]],
                        [[122439, 26024]],
                      ],
                    },
                    properties: { cp: [119.306239, 26.075302], name: '\u798f\u5efa', childNum: 18 },
                  },
                  {
                    id: '360000',
                    type: 'Feature',
                    geometry: {
                      type: 'Polygon',
                      coordinates: [
                        '@@\x8f\u0122\u0128\u0190g\u013c\x88\xbc\xc2MD~\u0146\xaae^\\^\xa7\x84\xfd\x9d\xa9j\xd7\x8dcZ\x86\xd8\xa8zd\xd2a\x90\xb6\x88l\xd2\x8dJ\x8c\xec\xf5`oz\xf7@\x9d\xa4u\u015e\xb8\xb4\x86\xf4\u0119\xf6Y\xbc\x89H\u010c\u01b6ajl\xde\u01a9\xa5\xe9Z[\x94|h}^U\xa0\x8c\xa0\xa5p\x84\u0104\u017e\u01a6O\xa0\x7flt\xb8\xc6\xa0\x80Q\\\x80\x8aa\xc6|Cn\xc2Ojt\xad\u011a\u0124d\x92\xc8\x8cF`\x92\xb6\x84@\xd0\xeb\x94\xa0\xa6\u014d\xd2\x9e\xa8S\xeav\x86H\u0122\xfbXD\xae\x85Qg\xc4\x97Wi\xd8P\xde\xec\xbar\xa4\u01c6\x80N\u0120\xa2l\x96\x95\u0104tZo\x9cC\u019e\xd4\xbaCx\x7frp\u0120V\xae\xca{f_Y`_\x83eq\x92\x92\xaeAot`@o\x82DXfkp\xa8|\x8as\xac\\D\x91\xc4Sf\xe8\xa9Hn\xac\x85^Dh\xc6y\xf8Jh\x93\xd8x\u0122\u0100L\xca\x88\x84\u01a0P\u017c\u010b\u0104w\u0220\u011a\xa6G\xae\x8f\u01d2\u0124\xe4T\x90\u0160\xc6~\u0126w\x8a\xab|TF\xa1\x8an\x80\x7fc\xb3\xcf\xe5\xb9]\u0109\u0111xe{\x8f\xce\xd3\x90\x86vOEm\xb0B\u0182\u0128\u0130|G\x92vz\xbd\xaa\xb4\x80H\x92\xe0p\x94eJ\xdd\x86Q\x9axn\x8b\xc0\x8aW\xad\x9e\x9dE\xb5\xe0\x8dX\xc5\u012at\xa8\xc3\u0116r\xc4w\xc0F\xce|\u0148\xd3M\xe5\xbcib\xb5\xaf\xbb\xe5DT\xb1\x8fm[\x93r\xab_g\x8emQu~\xa5V\\OkxtL\x81\xa0E\xa2\x8b\x83\x91\xda^~\xfd\xea\x8bP\xf3\x96qo\u011b\x8a\xb1\x7f_\xcaw\xa7\xd1\xaa\xe5\u0197\u0101\xbc\x8bm\u0109\u0179\x8b\xbfNQ\x93\x85YB\x8b\u0105r\x7fw\u0123c\xcd\xa5B\x95\x9f\xad\u0157\xcac\xd8iI\x97\x9e\u019d\u013fu\x8c\x9dqt\u0101wO]\x91\xb3YC\x7f\xf1Te\xc9\x95\x9a\x8bcaub\xcd\x88]trlu\x80\u012b\x85\x9dB\x91\xd0\x9fGs\u0135\u0131N\xa3\xef\x8d\x7f\x97\x81^\u0137qss\xbfF\u016b\u016bV\xd5\x9f\xb7\xb4\xc7{\xe9\u0108\xfd\x89\xff\x9bOE\x88\x8dR_\x9f\u0111\xfbI\u010b\xe2Jh\xad\u0145\u0131N\x91\u0229\u0115B\x85\xa6\x9dK{\x9dTk\xb3\xa1OP\xb7w\x81n\x97\xb5\xcfd\xaf}\xbdT\xcd\xabYi\xb5\xd5sC\xaf\x84iM\x95\xa4\x99\xad\x95\xa6\x9d\xafP|\xff\x8dUHv\x93he\xa5oFTu\x89\xf5\\\x8f\x8eOSs\x8bM\xf2\u0111\u0187ia\xba\u0107X\x9f\u010a\u0135\xe0\x9d\xb7\xe7h\u0183\xf7\xc7\x9c{\x91\xedgu^\x9b\u0111g\x92m[\xd7zkKN\x9d\x81\x8f\x91\xb6\xd5\x9d\xbbl\u010d\xd3{XS\xc6\x89v\xa9_\x9d\xc8\xebJbVk\x84\u0114V\xc0\xa4P\xbe\xba\xc8M\xd6xl\xf2~\xaa\xda\xe0G\u0102\xa2B\x84\xb1\x92\xcc\x8cK\x98y\x92\xe1V\x87\xbc\xc3~\xad\x9d\x85`g\x9b\x9fs\xd9fI\x9b\u018bl\u0119\xb9e|\x96~udj\x88uTlX\xb5f`\x90\xbfJd\x8a[\\\x98\x84L\x82\x91\xb2',
                      ],
                      encodeOffsets: [[116689, 26234]],
                    },
                    properties: { cp: [115.892151, 28.676493], name: '\u6c5f\u897f', childNum: 1 },
                  },
                  {
                    id: '370000',
                    type: 'Feature',
                    geometry: {
                      type: 'MultiPolygon',
                      coordinates: [
                        ['@@Xjd]{K'],
                        ['@@itbFHy'],
                        ['@@HlGk'],
                        ['@@T\x82\x8cG\x9fy'],
                        ['@@K\xac\x98\x95\x8bU'],
                        ['@@WdXc'],
                        ['@@PtOs'],
                        ['@@\x95LnXhc'],
                        ['@@ppV\x83u]Or'],
                        ['@@cdzAUa'],
                        ['@@udRhnCI\x87'],
                        ['@@\x88oI\x83\x8fpR\x84'],
                        [
                          '@@\u013d\u010d{fz\u01a4\xee\x92K\x9a\x96\xceM\u012e]\x86\x97ZF\x88\xbdY]\xe2\xa3ph\x92\x99\x9a\xb6\xa8r\xe2\xf8\xc0\x86\xce\u01e8\xa4^\xba\xc4\x94Gz\x88~gr\u011a\u011cl\u011e\xc6\x84L\u0106\u01c6\xa2\xceo\xa6\x96cv\x93Kb\x80gr\xb0Wh\x94mZp\xa0\x88L]L\xbacU\x89\xc6\xadn\x94\u017c\u0124\xcc\u0112\x9cbAnrOA\x9c\xb4\x9e\u020ac\xc0b\u01a6U\xd8r\u0106U\xdc\xf8\x9c\u012c\u019e\x86\x9a\x98Ez\x84VL\xae\xf6\xd8Bk\u0156\xdd\u0110\u0116\xb9\u0167\u0304\xb1\xc0b\xce\xc9\x9cnb\xb2\u0126h\u0146B\u0116\x9b\x9e\u012f\u0126\xe5X\u0107\xec@L\xaf\xb4yw\x81\u0195C\xe9\xc3\xb5\u0117\xa0\u01bf\xb8\x91l\xb5\xbeZ|\x86ZWyFY\x9f\xa8Mf~C\xbf`\x80\xe0_R\xc7zw\u018cfQnny\xb4INo\u01ac\x88\xe8\xf4\xba|sT\x84JU\x9a\x9b\x82L\x84\xeeVj\x84\u01ce\xbe\u0112\xd8\x8d\x82Dz\xb2XPn\xb1\x90\u0174P\xe8\xb8\u0154L\u0194\xdc\u01ba_T\x91\xfc\xc3\u0124BB\u010b\xc8\x89\xf6A\xb4fa\x84\x98M\xa8{\xabM`\x87\xb6\x81d\xa1\xf4\x89\xd6\xb0\x9am\u0230B\xd4jj\x8c\xb4PM|\x94c^d\xa4u\x95\x83\xa4\xdb\xb4\x8c\xe4\xab\u01a2fPk\xb6M\xf4l\x88]Lb\x84}su\x8f^\x8fke{lC\x91\x85M\x95rD\x8a\xc7\xad]N\x81\xd1Fsmo\xf5\u013eH\x89yG\u0103{{\xe7rn\x9d\xd3E\x89\x8b\u0195ZG\xaa\xb9Fj\xa2\xef\x8fW\x85u\xf8\x7fC\u01f7\xeb\x8f\xa1\u0105uh\xdb\xa1^Kx\x95C`\x7f\x8fC\\b\xc5x\xec\xb2\u011d\xdd\xbf_N\x89\u012bC\u023d\u013f\xe5B\xa5\xa2\xb7I\u0156\xd5y\x8d\\\x87\xb9kx\x87\xc3\xa3\x8f\u010c\xd7GDy\xc3\x95\xa4\xc1\xe7FQ\xa1\x84Kt\u0175\u018b]Cg\xcfA\x9d\x8f\xf9Sed\x87c\xda\u017a\x97\x8auYf\x83yMmh\x81UWp\x8fS\x8dyG\x8fwMPq\u0140\x97\x9b\xc1\xbczK\x9b\xb6\x86G\x95\xadY\xa7\xcb\x83@\x96\xb4\u015b\xc7\xb5\u0195\x81Bm\x9c\x81@Io\x82g\x97\x97Z\x8f\xafu\x8bTMx\x81}C\x91\x89VK\x82\xef{\xe9\u01b5P\x97\x99_K\xab\x99p\xdb\xd9q\u010btkk\x7f\xf9]g\x8e\x8bT\u011fwo\x95\u0241sM\xf5\xb3\u0103\x87AN\xa3\x99MRkmE\xca\x95\u010d\x99\xdbbMj\xddGu\x8f\x85IZ\x99\x97GP\u0123\x87\xe3\u0127E[i\xb5BEu\x9fDP\xd4\x9b~\xaa\xbc\u0119t\x8a\x9c]\x8c\xfbG\xa7\x80\xa1QMs\u011fNP\u014f\u012fzs\x9d\xa3Ug{\u0111J\u013f\u013c\u0101\xb3]\xe7\xabQr~\xa5C\x8d\u018e\xd1^n\xb6\x8d\xc6\xe9\xceR~\u017b\xb8Y\x92I\x93]\xa0P\x89um\u015dr\u01bf\x9b\x89\x9bI\u0101\x8b[x\x89e\xc7\xb3\x8f\x8bL\x91\xaf\x8fv\xafs\x9d\xac\xc1Y\x85~}\x85\u0165u\u0141\x8cg\x9b\u018bp\xdd\u0104_\u0146\u012b\xb6\xcfSR\xb4\xc1P~\x9e\xbfCy\x9e\u010b\x81\xdfdwk\x9d\xb4Ss\x95X|t\x89`\xc4\xa0\x8d\xc8\xf0\x80A\xaa\xec\xceT\xb0\xa6Dd\x96\x80a^l\u010eD\u0136\xdaY\xb0\x8e`\u012a\u0174\u01d2\x88\x94\xe0\u0160v\\\x90eb\x8cZH\x84\u0156R\xac\u0162\u01b1\xf9\u0119O\x95\x8f\xd1M\xad\x9d\xb3F\xdb\x83Wp[\x83',
                        ],
                      ],
                      encodeOffsets: [
                        [[123806, 39303]],
                        [[123821, 39266]],
                        [[123742, 39256]],
                        [[123702, 39203]],
                        [[123649, 39066]],
                        [[123847, 38933]],
                        [[123580, 38839]],
                        [[123894, 37288]],
                        [[123043, 36624]],
                        [[123344, 38676]],
                        [[123522, 38857]],
                        [[123628, 38858]],
                        [[118260, 36742]],
                      ],
                    },
                    properties: { cp: [117.000923, 36.675807], name: '\u5c71\u4e1c', childNum: 13 },
                  },
                  {
                    id: '410000',
                    type: 'Feature',
                    geometry: {
                      type: 'Polygon',
                      coordinates: [
                        '@@\x95\xfdL\x99\xf9\xb5P\xb3swI\xd3xc\u0162\u011e\xf0\x86\xb4E\xae\x9e\xdaPt\x86\u0134X\xd8x\xc2\xb6\x98@\xab\u0155\u0155QG\x83\x8bYfa[\x8f\u015fu\x93\xdf\u01e9\x99\u0111\u0161\x8d_X\xb3\u0133\xd5\u010dC]k\x7fbc\x95\xa5CS\xaf\xeb\xcdB\xa9\xf7\x8b\x96\xb3\xad\x81Si\x88_}m\x98YTt\x9e\xb3xl\xe0c\u010c\x82z\x9d\xc0D}\x9d\xc2OQ\xb3\xd0T\u0128\xaf\x86\u0197\xf2\xcb\u0156[h\x9c\u0142\x8b\u0166v~\x86\x86}\xc2Z\x9e\xab\xa4lP\xc7\x95\xa3\xaa\xdd\u0174\xc5R\xa7\xd8nhc\x8ct\xe2k\x8f\x87n\xcf\x8d\xad\u013e\u0179U\xd3\xdddKu\u0137\x87I\xa7oT\u0169\xd9\u010fk\u0119\u0106H\xb8\xd3\x8c\\\xc4\x83\x8c\xbfPcnS{wBIv\xc9\x98\u013d[Gq\xb5u\x9f\u0147\xf4Yg\xfb\x83Zca\x8e\xa9@\xbd\x90\xd5\u01fdys\xaf}lgg@\xad\x7fC\\\xa3as\x80Id\xcduCQ\xf1\x7f[L\xb1\u0119k\xb7\x8b\u0163b\x8f\xa8\xa9kK\x97\x92\xbb\x9bKC\x9d\xb2\x91\xf2GKm\u0128S`\x83\x98UQ\x99nk}AG\u0113\x94sqaJ\xa5\u0110GR\x89\u010epCu\xccy\xa0\xe3\xa0iMc\x94plk|tRk\x86\xf0\x9cev~^\x91\xb4\x86\xa6\xdc\x8eS\xed\xbf\x90_iyjI|\u0211|\xbf_\xbbd}q\x9f^{\x93\u0187d\x9d\u0103}\x9ft\x81q\xb5`\u01b3\u0115g}V\x81\xa1om\xbd\x9d\x7ff\x9da\x99\xc7o\xb3TTj\xa5\x84t\u0120\x97Ry\x94\x8fK{\xf9\xd3ju\xb5{t}u\xcbR\x91i\x9fvG\x8a\xe7JFj\xb5\x8a\xcdyq\xce\x98\xe0Q\xc2\x7fFewixGw\xbdY\u0177p\xb5\xfa\xb3X\x9dU\x9b\xbd\u0121y\x99\u0142\xe5\x89k\xdawZX\x88\xb7l\x84\xa2\xc1\xa2K\x94zO\x84\xce\x9b\xce\x80jc\xbchtoDHr\x85|\xadJ\x93\xbd}JZ_\xafiPq{t\u0119\xbd\u0115\xa6Zp\u0135\xf8\xabkQ\x85\u0139\xa4\x83]M\x8d\xdbf\x81aQp\u011b\xb1\u01fd\xbe]u\xadFu\x8b\xf7n\x83\x99\u010d\xc4\xafADp}AjmcE\xc7\x92a\xaa\xb3o\xb3\xc6\xcdS\u0187\u0108\xd9DIz\xcb\x91\u010d\u013e\x9f^\x88KL\x9c\x97i\x97\xde\xf1\x80[\x9c\x83aA\xb2zz\x89\xcc\xf7D\x9c|[\x9a\xed\xc4\xb3gf\x82\xd5\xded\xae|`\x83\u0106~\x84o\u0120\u0191\xf4\xb3\u014a\x91D\xd7\xb0\xafCs\x8a\xf8\xc0\xab\xec\x89UMhT\xba\xa8\xb8\u01e1\xeeS\x96\xd4\x84Dru\xc2\xc7Z\x95\xd6E\x8e\x92v\x8dPZ\x84\x9eW\x94~\xd8\x8b\xd0t\u0104E\xa2\xa6\xd0y\xb8b\x8a\xf4\xb4o\u016c\xac\x8e\xb2\xcas~\x80\x80]\xaet\xaaa\x9ap\u014eJ\xa8\xd6\xba\x84_\x8a\u0154\x96`\x92\u0156^\u0110\x8d\\\u011cu\x96\x94~m\xb2\u01b8\x9b\xb8fW\x89\u0126r\u0194}\xce^gjdf\xd4\xa1J}\\n\xa0C\x98\xa6\xfeWx\x90\xaaJR\xd4\u0160u\xac\u0128\u0128mF\x86dM{\\d\\\x8aY\xca\xa2\xfa@@\xa6\xaa\xb2S\x8a\xdcsC\x96}fN\xe8cbpRml\xd8^g\x84d\xa2a\xd2\xa2CZ\x88\x8dZxv\x81\xc6\xb6N\xbf\x92\xa2T@\x80uC\x9c\xac^\u010a\xf0\x81\xc4n|\x8f\x9elGl\x92\x99Rjsp\xa2ED}\x80Fio~\x7f\xd4N\x8e\x8b\x84~zk\u0118HVs\u01f2\xdfj\x83\u016c\x8c\x8a\x7f\u0162`P\xfb\xe0l\xa2\x98\\\xc0\x9cEh\x8e\u0130g\xde\u0113\xa0X\x90\xbcPk\x96\x84|m',
                      ],
                      encodeOffsets: [[118256, 37017]],
                    },
                    properties: { cp: [113.665412, 34.757975], name: '\u6cb3\u5357', childNum: 1 },
                  },
                  {
                    id: '420000',
                    type: 'Feature',
                    geometry: {
                      type: 'MultiPolygon',
                      coordinates: [
                        ['@@A\x81B\x82'],
                        ['@@lskt'],
                        [
                          '@@\xbe\xab}{ra\xaep\xee\xc3\\\x99\x9b{\xf8C\x8a\xcbyyB\xb1\x84b\\\x9b\xf2\x7f\x98\xdd\x98jK\x9b\x87L\xa0]\u010e\u013d\xcc\x92Jy\xdaC\u0188\u0107\xceT\xb4\xc5\xb4pb\xa9\xc8\x91dFin~BCo\xb0B\u010e\xc3\x84\x9a\xf8mv\x8c\xaeE^v\u01fe\xbd\u011c\xb2Ro\x82b\xdceN\x8e\x84^\u013a\xa3R\x86\xacl\u0136\xf7Yo\u0116\xa5\u011a\xbe|sOr\xb0jY`~I\x94\xbe\xaeI\x86{GqpCgyl{\x87\xa3\x9c\xcd\x83\xcdyPL\x93\xc2\xa1\x83\xa1\xb8kW\x87xYl\xd9\xe6\x8a\x9a\u0141\u0122z\x9c\xbe\x9eV\xb4W\xb6\xf9\u0178o\xbeZHxjwfx\x84GN\xc1\x95\xb3X\xe9\xe6l\xb6\x89Ei\xe8IH\x89\xa0u\x92j\xccQ~v|sv\xb6\xd4i|\xfa\xa2Fh\x8d\x98Qs\u011f\xa6\x83Si\u0160Bg\x99\xd0E^\xc1\xd0{\x96\u010dnO\xc2\xc8\x9eU\xce\xf3\u0114\x86\xca\u0113\u0132}Z\xb3\xbdM\u0167\xefeyp\xb7uk\xb3Ds\xd1\xa8\x9fL\x93\xb6_\x9c\xc5u\xc3\xa8w\xbb\x97\x80\xa1Wq\xdc]\\\x91\xd2\xa7t\u0197c\xd5\xb8\xd5F\xcf\u01dd\u0109\u0103x\u017b\u010c\u019fO\x87\x83K\xc9\u0121\xff\xd7wg\x94\xf7I\xc5zCg\x86]m\xab\xaaGe\xe7\xc3TC\x92\xab[\x89t\xa7{loWe\x81C@ps_Bp\x91\xadr\x91\x84f_``Z|ei\xa1\x97o\u010bMqow\x80\xb9D\u019d\xd3\x9bDYp\xfbs\x95\x96\x8bYk\u0131\u01c3}s\xa5\xe7\xb3[\xa7\x9fcY\x8a\xa7HK\x84\xabQy\x89]\xa2\x93ww\xf6\x80\xb8\xefx\xbc\u0146\xbeXv\xae\xc7\xc0\xb5R\u0120\xd0\x8b\x9e\x81HM\x9e\xb1c\xcfd\x84\u0192\u01cd\u0169\u0205\u0237\xb1DSy\x81\xfa\u011d\xa3\x8d\u0164\u0100\xe0t\xd6\xff\xef[\xeeb\\}p\u012d\xc9I\xb1\xd1y\x85\xbf\xb3x\xafN\x89o\x89|\xb9H\x99\xcf\xdbm\x8b\x9dj\xfa\xcb~T\x9a\x9d\x95u\x98\u0119jC\xf6Aw\u011b\xacR\x92\u0111l\xaf\xa0\xd1b\xad\x89\u0147T\x7f\x86\u013f_[\x8c\x91I\u010d\u0104\u02bfnM\xa6\u011f\\\xc9[T\xb7\x99k\xb9\x9c\xa9o\u0115@A\x8f\xbew\x95ya\xa5\x90Y\\\xa5\xc2az\xaf\xe3\xc1\xa1k\xa5ne\xa3\xdb\x7fw\x86\x9dE\xa9\xca\u014d\xb6\u02d3u\x8foj_U\x83\xa1cF\xb9\xad[Wv\x93P\xa9w\x97hu\xd5yBF\x93\x83`R\x8bqJUw\\i\xa1{j\x9f\x9fEP\xef\xff\xbdf\u0107\x85Q\xd1\xc0\x81Q{\x9e\x82\xb0\x87fL\xd4\x81~wXg\x97\u012b\x81t\xea\xdd\xbe\x96\u013a\x91Hd\x88\xb3fJd]\x8b\x8dHJ\xb2\x85E\x80\x83oU\xa5\x86HhwQs\u0190\xbbXmg\xb1\xe7ve\x9b]Dm\xcd\x82P\x88oCc\xbe\x8b_h\x94\x96h\xf8Yr\u014aU\xb6eD\xb0\u010c_N~\xf8\u0139\u011a\xb7`z\x92]\xc4\xfep\xbc\x85\xe4\xccQ\x8cv\\rC\x8c\xe9\xbeTnk\u017e\u0150\xda\x80\xdca\x87\x93\xbc\xdd\u0186\u0122\xb6\xdbo\x85d\x85\u0114\u0148\xd0\xa2Jq\x92Pb\xa0\xbe|J\x8c\xbefX\x8a\u0190\xee\u0128_Z\xaf\xc0}\xfa\u01b2\x8bN_\u0112\xc4\x8a^\x84\x91\u0108a\u0150yp\xbbC\xc7\xc4\x95K\x8a\x9a\xf1L\xb3\x8a\u0121M\x8c\xb2wrI\xd2\u016dxjb[\x9c\x9en\xab\xf8\x9c\x98\x97\xe6\x88\xe0\x83\xa0^\xb2\xadh\xaf\xda\x80\u0150\xaa\xde\xb8\x80Y\xb2\u0112V\xf8}\u0100^\u0130\x99\xb4\x82L\x8a\xdam\x90\x84\xa5\xc0J\xde{JV\x8c\u0173\xde\u0143x\xd7\x7fsxx\u0188\u0113\xa0\u0123M\u0159\x96\xda\xf0\xf2If\x96\u010a\x93\u0152\\\u01ae\xb1\u0152d\xca\xa7\u0118D\x86v\u010c_\xc0\xe6~D\x8c\u010b\xb4A\xae\xb5\x86\xa8\xd8LV\xa6\xeaH\xd2\xa4',
                        ],
                      ],
                      encodeOffsets: [[[113712, 34e3]], [[115612, 30507]], [[113649, 34054]]],
                    },
                    properties: { cp: [114.298572, 30.584355], name: '\u6e56\u5317', childNum: 3 },
                  },
                  {
                    id: '430000',
                    type: 'Feature',
                    geometry: {
                      type: 'MultiPolygon',
                      coordinates: [
                        ['@@\x97n\x84FTs'],
                        [
                          '@@\xdf\xc5\xc6\xe1\x89\xbd\xd4Xr\x97\x86CO\x99\x90\x93\x85\xcbR\x91\xef\xff\x8d\u0129\xadTooQy\x9a\xd3[\x8b\u0145BE\xac\x96\xce\xd3Xa\x84\u012f\xa7\xc3\xb8G\xa0\xb0ITx\x8dp\x89\xfax\xda\u0133\xa5\xcf\x9a\x96\u0122\xbe\x8aed\x9e\xc4\xa9\u0138\x8fG\x85\x9c\xe0Gh\x82\x80M\xa4\x96\xc2_U}\u010a}\xa2pczf\x8a\xfeg\xa4\x80\x94\xc7\xf2AV\x91\x8bM',
                        ],
                        [
                          '@@\x90\xa9K\x81\x97\x83A\xb7\xb3CQ\xb1\xc1\xab\xb3BU\x8a\u0191\xb9A\x8a\x8dt\u0107Ow\x90\x99D]\x8c\x9dJi\xd8Sm\xafb\xa3\x91yl\x83\x9bX\x85\x8dH\xcb\xd1\xb1H\x95\xab\x81\x96\x91C^\xf5\u013eA\x96\x9d\xc5\xa7\xa4\xc9\x8f\xa5\x84\xefyu\u01d9uA\xa2\x8d^{\xccC\xb4\xad\xa6\u0177J\xa3^[\x86\x8f\x9d\x93\xaa\xbf\x87\u0115~\x95\u0187\x85\x95N\x85\xa0sk\xf3\u0101\x8d\x87\xb9\xbf\x80\xef]\u0103~\xf7O\xa7\xad@\x97\x9dVm\xa1\x8bQ\u0111\xa6\xa2\u0124{\xbaj\xd4\x8f\x8e\x8c\xaa\xa5nf\xb4\x95~\xd5o\x9f\x9e\xd7\xdb\u0105\x8bM\u0105\u0131uZ\x9cmZc\xd2\xa0\u0132\u012a\xb2S\xca\u01c4\u0176\xa8\u019a\x83\x92C\xd6\u014e\xaaQ\xd8\xbcr\u016d\x8e\xad\xab}N\xcf\xfcr\xca\xac\x8cmjr\x80@\u0118rTW\xa0\xadSsdHz\u0193^\xc7\xc2yUi\xafD\xc5Yl\u0179u{hT\x9c}m\u0109\x96\xb9\xa5\x9d\u011b\x89D\xff\xeb\xa9\u0131\xd3[O\xba\xa3\x9e\x93\xa5\xf3t\x80\u0142\xb9M\xd5\x84\x9e\u01aa\x83`P\x9a\x85Di\x96\xdbU\x8a\xbe\xc5\xe2\x80\x8c\xec\x88U\x92\xf1B\x93\xc8\xa3\x7f\xfdhe\x89dy\xa1o\u010b\x80`pfmjP~\x82kZa\x85\x8dZs\xd0d\xb0wj\xa7\x83@\x80\u0134\xaew~^\x82k\xc0\xc5KvNmX\\\xa8\x81a\x93\x94\u0143\x81qv\xed\xf3\xbfF\x84\xa4\xa1@\u0169\xd1Vw}S@j\x9d}\x81\xbe\xabp\u0102r\x96\xaag\xa0\xe0\xc0\xb2NJ\xb6\xb6D\x90\xf4\x85K\x82|^\x7f\xaa\x86\x8e\x81\xb0LX\xbe\u0174\xe4P\u012a\xb1\x9c\xa3EXd\x9b\x94^\xb6\x9b\u0132\xde\xdc\x93~\x91u\xb8\u01d4\x98\x8e\x9bMRhsR\x85e\x7f\x86`\xc4ofI\xd4\\\xd8\xa0\xa0i\x94\u0107ymn\xfa\xa8cj\xa0\xa2\xbb\x96G\u010c\xec\u018a\xff\xd0\xa8Xe\u0108\u0100\xbeO\xf0\xa0Fi\xa0\xa2|[jVxrIQ\x8c\x84_E\x94zAN\xa6zLU`\x9cc\xaax\x94OTu\xa0RL\xc4\xa2dV\x84i`\x90p\u02d4v\u014e\xb5\xaa\xc9\x9eF~\x83\xd8\x80d\xa2\xbag\u0130\xe0w\xb8\xc1b[\xa6\x8fZb\xa6\x96z\xbdxB\x90\u0116@\xaap\xba\x9b\x9alS\xb8\xd6\\\u0114[N\xa5\u02c0m\u010e\u0103\x92J\\\x8b\u0140`\x80\x85\u0148S\xda\x8a\u0116\xc1\u0110iO\x93\u011c\xabBxD\xf5\u011aiv\x97\x9e\x96S\x99\xcc}i\xf9\x8c\x9e\xdcn\x9a\xd0\xbaG\x8a{\x8ap\xb0M\xb4w\x86\xc0\xd2zJ\xb2\xf2\xa8\xa0oT\xe7\xfc\xf6o\xdb\xff\xf1\x8e\u0151\u011e\xa4\x82\xf9Tz\xb2C\u0206\u0238\u01ce\u016a\x83\u0191\xd0c\xb0dP\x9d\xce\x9f\u011f\xcb\xb6[\xc8\xbdu\xaf\xbdWM\xa1\xad\xc9\x9e\x93\x92B\x7f\xb7r\xed\x9enZ\x9f\xd2\xa0`\x87\xa8GA\x81\xbe\\p\u0113\x98Xh\xc3\x86RC\xad\xfcWG\u0121u\x85T\xe9\x9d\xa7\u014e\xd1\x9d\xa9\xf2\xb3I\xb1\xb3}_\x91\x8bE\x8d\xc3\u0127g\xae\u0119is\xc1PDm\xc5{\x89b[\x7f\x7fR\xc5\x9fs\xb7\x80kP\x9f\u017d\u01a5\x83\xf3Ro\x94O\x8b\x9fV\x9f~]{g\\\x93\xeaY\u01aa\xa6k\xddbi\u010b\u01b5\x8aGZ\xbb\u011a\xf5\x85\xf3\xb7\xb3v\u015d\x9e\xa3\xf8@py\xf6_\x8b\xeb\x8eIk\xd1\xb5\x87b\x8fc\xd1\xa7y\x85\xd7dY\xd8\x8e\xaai\xfe\x9e\xa8\x83[]f]\u0145\xa9C}\xc1N\x87\xbbh\u013b\u0127\u018f\x92\u0129',
                        ],
                      ],
                      encodeOffsets: [[[115640, 30489]], [[112543, 27312]], [[116690, 26230]]],
                    },
                    properties: { cp: [112.982279, 28.19409], name: '\u6e56\u5357', childNum: 3 },
                  },
                  {
                    id: '440000',
                    type: 'Feature',
                    geometry: {
                      type: 'MultiPolygon',
                      coordinates: [
                        ['@@Qd\x88Aua'],
                        ['@@\x83lxDLo'],
                        ['@@sbhNLo'],
                        ['@@\u0102\xa0\u0101\x9f'],
                        ['@@WltO[['],
                        ['@@Kr\x9c]\x8fS'],
                        ['@@e\x84\x84I]y'],
                        ['@@I|\x84Mym'],
                        ['@@\x83\xdb\xb3LS\x8c\x90\x9e\xbcY'],
                        ['@@nv\xbaB\x96\xebui\xa9`\x9d\xbe'],
                        ['@@zd\x9a\xdb\x9bJw\xae'],
                        ['@@\x86\xb0\x85\xaf'],
                        ['@@a\xa0yA\xaa\xb8\xcbJIx\xd8\x8c@\x80\u0100HAm\xc3\x9fV\xa1o\x95fu\x95o'],
                        [
                          '@@\x9as\x89\u0157\xc3\xd4\u0117A\u0181\x9bZ\x9a\xc4\xa0~\xb0\u010cP\x82\x8b\xe4h',
                        ],
                        ['@@\x8b\xb6\xdd\x92\xcc\x82vm\u011eh\xad\u0131\x87Q'],
                        ['@@H\x9c\x8adSj\u0112\xa2D}war\x85\x93u\xabZqadY\x7fM'],
                        ['@@el\x8c\\LqqU'],
                        ['@@~rM\x8do\\'],
                        ['@@f\x84^\x7f\x83C'],
                        ['@@\xf8P\xaaoj\xf7\xcd\xdd\u0127X\u010cx\x94\xb0Q\xa8\u0131XNv'],
                        ['@@g\xc7\u01b3\x88\x8e\x88\x94o\x88\x8a\x88[~tly'],
                        ['@@E\x96\xc6C\xbf\x91'],
                        ['@@O\x8eP\x8d'],
                        [
                          '@@w\x8b\x86\u0111\xf3g\x89\x99\u011d\x97[\xb3\x8b\x81\xa1V\xd9\xe6\xc5\xf6M\xcc\xb3\xb9p\xc1a\xcb\xfd\xfd\xa9D\xa9\xdc\x93J\u0179\u0195\u0123G\u0105\xa4{\xd9\u016b\x85\xc7\x98O\xb2\xabB\u01b1\xe9A\x97\xd2\x89\u0125\x87\xa1\x8f\xabBhlmt\xc3P\xb5yU\xafuc\x93d\xb7w_b\u015dc\u012b\xedmGO\x8e|KP\x92\u020f\x87\u0179\xe3\u015dI\u0155\u016d\u0155@\xd3oo\xbf\u0113\x8b\xb1\xdf}\x8e\x85\u016d\x82\x9f\u0132W\xc8\x7fC\u0151\xe2U\xe2\u01d9I\x9b\u011f\u0149\xa9I\x9b\x8d\u0133E\xd7\x85\xc1\x94\xb3A\xf3\x9bwXJ\xfe\xb1\xcc\x8c\xdc\xd3\x94\x7f\u0128\xa3L]\u0108\xd9\u01baZ\u01fe\u0106\u0116M\u0138\u0124f\x8c\xce\u0135l\x95\u0168n\xc8\x88\x91\u0110tF\x94\x8a\x96F\u0124\x96\x82\xeak\xb6\x9c^k\xb0f\xb6g\x8a\x8e\x9c}\xaeFa\x98f`\x8dvX\u0172\x8dxl\x98\x84\x7f\xa6\x96\xd4\xc1\xb2\xac\xd0\x9f\xa6pq\xca\xcc\xb2\x88i\x80X\x9f\xd8\x7fRD\xce}\x86\xc4@Z\u0120\x92s\x84x\xaeAR~\xaeETt\u0104Z\x86\x96\x7f\x90\u0188f\u0160\u0160H\xe2\xd2\xd0A\x86\xb5\\S\xb8\x84^w\u0116kRz\x8aal\x8e\u015c|E\xa8\xc8N\u0100\u0148ZT\x8c\x92pBh\xa3\\\x8c\u010e\u0180uX\u0116tKL\x96\xb6G|\x8e\xbb\u013aE\u013c\u011e~\xdc\u0122\xdb\u010ar\x88O\x98\xd9\xeevd]\x90n\x88\xacV\x9c\xca\u011c\xb0R\xd6\x9fpM\x86\x86\x96\x82\u0182\xaaFbw\x9eE\xc0\x88\x98\xa9\x8c\x9e\\\x85\xa4]\u0178I\xae\xa5D\xb3|\xcb\x8e]C\x9d\xf6A\u0164\xa6\x85\xe6\x92\xb4\xa5\xb8Lv\xbc\x80\x95\xa2\u013dBa\xf4\x96F~\x97\x9a\xae\xb2G\xcc\xd2\x90EY\x84\x84\x9czk\xa4\x92\xb0ahlV\xd5\x9eI^\x8b\x9aCx\x8f\u0108P\x8esB\x89\u0192\xbaV\x89\xb8@\xbe\xaaR\xb2\u0128N]\x8d\xb4_eavSi\x87vc\x95}p}\u0110\xbc\u018ckJ\x9c\xdae\xa0th\x9c\x86_\xb8\xa0\xba\x7fx\xb1\xf2_x\x8dN\x9b\xcb\x8b\xb2\x91@\x83\u0103\xa1\xdfH\xa9\xd9\xf1}wkN\xd5\xb9\xc7O\xbd\xbf\xa3\u0115]ly_W\xecI\x9e\xc7\xaa`\x8auT\xc5xY\u0112\xd6\xbck\xd6\x9e\x92\xb5\x82\x90M\x9ejJ\xdawn\\h\x91\x9c\u0112v]\xeeh|\x92\xc8\x9b\u0184\xf8\xe8g\x9e\xb8\u0136\xdf\xa0\u0109\u0108Wb\xb9\u0180d\xe9\u0118\x8cNTt\x8dP[\x90\x8a\xf6SvrCZ\x9e\x9eaGu\x9cbo\xb4\u0156\x81\xd2\xc7\u0110\x90~\xa1zCI\x85\xf6zx\xa2\x84Pn\x8b\x95\x89\xc8\xf1\xa0@\x8c\u0125\xd2\xa6\x86]\u019e\x8aV}\xb3\u0103\u0114\xf1ii\xc4\xd3V\xe9pKG\xbd\xc4\x91\xd3\xe1v\x9dYo\x96\x81C\xb7sit\x8bia\xc0y\x84\u0167\xce\xa1\xc8YD\xd1\u016fm}\x89\xfd|m[w\u0119\xf5\u0109Z\xc5xUO}\xf7N\xb9\xb3\u0109o_qt\u0103\x93qw\xb5\u0141Y\xd9\x84\u01dd\u0155\xb9t\xef\x9d\xdbU\xc3\xafmRC\xba\x85\x88\u012d|\xb5\x81\x9b\xd5\xcaK\x99\xbdR\x91\u0113\xa0\xf3]\x91\x96G\xaa\u0119Ax\x96\xbbHO\xa3\x8f|\u0101m\x87\xa1di\u010f\xd7Y\xef\x8dYW\xaa\u0149Oe\xdat\u0110\xabz\u0111\xb9T\x85\u0101\x87\xfaE\x99\xe1\xb2\x7f\\\x8b\u0137\xcd}jY\xe0\xd9\xc6\u017f\xbf\xc7d\u011f\xb7\xf9T\xdf\xc7\u0163\u0284\xa1XgW\xc0\u01c7\u011f\xb7\xbf\xc3\x88Oj\x90\xa0Y\xc7\xf7Q\u011b\x8bi',
                        ],
                      ],
                      encodeOffsets: [
                        [[117381, 22988]],
                        [[116552, 22934]],
                        [[116790, 22617]],
                        [[116973, 22545]],
                        [[116444, 22536]],
                        [[116931, 22515]],
                        [[116496, 22490]],
                        [[116453, 22449]],
                        [[113301, 21439]],
                        [[118726, 21604]],
                        [[118709, 21486]],
                        [[113210, 20816]],
                        [[115482, 22082]],
                        [[113171, 21585]],
                        [[113199, 21590]],
                        [[115232, 22102]],
                        [[115739, 22373]],
                        [[115134, 22184]],
                        [[113056, 21175]],
                        [[119573, 21271]],
                        [[119957, 24020]],
                        [[115859, 22356]],
                        [[116561, 22649]],
                        [[116285, 22746]],
                      ],
                    },
                    properties: { cp: [113.280637, 23.125178], name: '\u5e7f\u4e1c', childNum: 24 },
                  },
                  {
                    id: '450000',
                    type: 'Feature',
                    geometry: {
                      type: 'MultiPolygon',
                      coordinates: [
                        ['@@H\x96\xa0TQ\xa7\x95A'],
                        [
                          '@@\u0128\xca\xaa\x83L\x83\u018aD\xce\u0139\u0110C\u01e6\u0117\xb8z\xdaGn\xa3\xbe\x9br\xaa\u0140\xdct\xac@\xd6\x9b\xda\x88Sx~\xf8O\u0152\x98\u0176\xd0\xc2\xe6\u0220\\\x84\xc8\xdcOb\u0116w^o\xde\x84Lf\xac\xb0bI\xa0lT\xd8B\xcc\x88F\xa3\u0106\xb9g\xf1\u0124aY\x93t\xbf\xa4VS\xf1\x9cK\xb8\xa4nM\x86\xbc\x82JE\xb1\x84\xbd\xb8\x9a\x8a\xf1o\x8b\xdcC\u0186\xe6\u012a^\x8a\u011aQ\xd6\xa6^\x87\x88\x88f\xb4\x81Q\x86\xfc\xdc\xca\x9dz\xaf\x9alzU\u013a\u0161@\xec\x87\x80p\xb6n]sxtx\xb6@\x81\x84~\xd2\u0102Jb\xa9gk\x82{\xb0\x82~c\xb0`\xd4\x99\xacrV\\\x93la\xbc\xa4\xf4\xe1`\xaf\xb9\x9dLC\x86\xc6b\x8cxEr\xe6O\x90\x82v[H\xad\x98\x84[~|aB\xa3\xd6s\xbadA\u0110zN\xc2\xf0s\x8e\xde\xc6\x94\x85\u0124\xaab\x83\x96ab`ho\xa1\xb3F\xab\xe8Vlo\x8e\xa4\x99\xd4Rzpp\xaeS\x8e\u012a\xba\xa8\xd6\x83\xbaN\x85\u0133\x84\x7fd`\x92a\x94\xa6\xa4\x9dF\xb3\xbaD\xce\u0144\u0100\xec\x8aC\x9e\u011c\xba\xa6\u010a\x95~nS\x9b|g\u017avZkC\xc6j\xb0zV\xc8\xc1\u0194]L\x8d\xcaFZg\x85\u010dP\xadkini\xab\x8bq\xc7\x80cz\xcd\x94Y\xae\xac\u016e\x8d\xbbqR\xd7\u014d\xa9D\xd5\x84\x91\xa7\u0199\u01c3\u0175T\xc9\u0129\xb1\x9f\u0131d\xd1nYY\x9b\u0132vN\u0106\u0106\x8c\xd8\xdc\xa0\x9d\xd6p\x96}e\xb3\xa6m\x8b\xa9\x90\x8di\xd3|\xb9\x9f\u0127\u0146\x9b|\xaa\xa6QF\xa2\xc2\xac\u0296ovg\xbfem\x87^\x8fuc\xe0\xf7g\xd5\x8eu\x8c\xed\xd9\u0107\u011d}F\u013b\xbc\u0139{\x8d\xb5HK\x95sLS\u0111\u0183r\x8b\u010d\xa4[Ag\x91oS\x8b\u0147YM\xff\xa7\xc7{F\x8d\u015bbky\x89lQx\u0115\x83]T\xb7\xb6[B\x85\xd1\xcfG\xe1\u015f\u015f\u0187e\x80\x8f\x85\x95\u0103YSs\xadFQ}\xadB\x83w\x91tY\u011f\xc3@~\x85C\xcd\x80Q\xa0\xd7\x7fW\x87j\xcb\xb1r\xc9\xa5o\xcf\xa0\xb1\xab\xd3\xc2\xa5\x95\x83\x80k\x97\x8ewW\u0171\x8cmcih\x8f\xb3K\x9b~\x89\x8d\xb5h\xafe]l\xb5\x9b\xe9l\x95\x81E\u0123\x89\x95E\x93\u010fs\x87\x92m\xc7\x96\u0167\u0113`\xe3\xf2gK_\xdbsU\u029d\x93\u0107\x8f\u011f\xb6h\x8c\xf6\x8cO\xa4\u01dbn\xb3\x8e\x9dc\x91`\xa1y\x8b\xa6C\x91\x81ez\x80Y\x8awa\x99\x96\x91[\u010f\u0135\u0171M\u0119\xa7]X\x98\xce_\x82\xed\x9b\x98\x8d\xdb]\xe9\x92\xdbU\u0107\u0130\xd5B\u01a3\xb1\x85d\x83y\xb9T^d\x81\x9e\xfb\xc5\xd1\u0166\xb7\x87\x7fP\u013b\xfe\xd9`K\x80\xa6\x98\x85\xa2\xcde\x81\x9c\u0125R\xbf\x8c\xb3\xa3[~\x8c\xe4u\xbcdl\x89t\x82\x86W\xb8oRM\xa2\u010f\\z\x9c}\xc6zdv\u0148\x96{\xceXF\xb6\xb0\xc2_\x84\xd2\xc2\xcfL\xa9\xd6\x95Tmu\x9f\xbc\xe3l\x89\x9b\u012bkiq\xe9fA\x84\xb7\xca\xb5\\\u0151Dc\xa5\xddF\x93y\x9b\xd4\u0107\x98c\x80\u0171H_hL\xdc\x8b\xea\u013a\u0110\xa8c}rn`\xbd\x84\xcc@\xb8\xb6\xaaVL\x8c\x8ah\u0152\x8b\\\x95\u0162\u013ak~\x8e\u0120i\xf0\xb0|g\x8ctT\u012d\u0138^x\x91vK\x98\x8fVGr\xe9A\x81\xe9\x91bUu\x9bMJ\x90\x89V\xc3O\xa1\x85q\u0102\x7fX\xcbS\x89\u0123\xe3l\xfd\xe0\x9f_ju\x87Y\xdb\xd2B\x86\x9cG^\x98\xe9\xd6\x8a\xb6\xa7\x8e\x83EG\x94\xc5z\u011b\x83\u01af\xa4Ek\x87N[kd\xe5uc\xe9\xacdnYp\x8fAy\u010c{`]\xfe\xafT\x92b\x90\xdc\xc8k\x82\xa1\u0120\x95v\x8c\xe0h\x84\xc2\u0184\xa2J\xee\xb6\xb2',
                        ],
                      ],
                      encodeOffsets: [[[111707, 21520]], [[107619, 25527]]],
                    },
                    properties: { cp: [108.320004, 22.82402], name: '\u5e7f\u897f', childNum: 2 },
                  },
                  {
                    id: '460000',
                    type: 'Feature',
                    geometry: {
                      type: 'Polygon',
                      coordinates: [
                        '@@\x9a\xa6\u015cil\xa2\x94X\u01a6\x91\u019e\xf2\x96\xef\xe8\xa7\u015eC\xea\u0255r\u0167\u016f\xc7\u0105\u013b\xf5\x99\xb7\u0109\xb3\u0153\x81\u0305k\x7f\xc7m@\u010b\u0227\x83\u0167\u0125\x89\u013d\u0289\x8d\xad\u0185\u017f\x93\u0213\xd2\xcb\xa6\u015dE}\xba\u0191[\xcd\u011c\u020b\xa0g\xcef\u01d0\xcf\u0124\xa8\xea\x9d\u01ba\\\u0186\xb8\u0120\u010ev\u0284\u0200\x9c\xd0\xbejN\xf0\u0100\xd2R\x8c\x9aZ\u01c6\x99z\xd0\u0158\xce\xb0H\xa8\x8d\u01a2b\xb2_\u0120\xa0',
                      ],
                      encodeOffsets: [[112750, 20508]],
                    },
                    properties: { cp: [110.33119, 20.031971], name: '\u6d77\u5357', childNum: 1 },
                  },
                  {
                    id: '510000',
                    type: 'Feature',
                    geometry: {
                      type: 'MultiPolygon',
                      coordinates: [
                        ['@@LqKr'],
                        [
                          '@@\x8a[\u013b\xe9V\xa3\x9e_\u0163\u0121\xf1pG\xa0\x95r\xe9\xcf\xb7~\u0105Sfy\xd7\xcd\x82\xb7\xba\x8f\u017f\u01bdi\xcd\u0131\u01a3\u0131\u013bmHH}siaX@i\xc7\xb0\xc1\xc3\xd7t\xab\x83\xadT\x83\xa4J\x96\x7fJJ\x8cyJ\x95\xc8\x8a`Oh\xdf\xa6\xa1u\xcbhI\x7fyCjm\xffw\x85ZG\x85\x85Ti\x8bS\x88sO\x89\x9eB\xb2\x9ffNmsPa\x88{M{\x8a\xf5E\x91^Hj}gYpaeu\x9e\xaf\x91o\xe1wHj\xc1\xbdM\xa1pM\x93\x96u\xe5\x87mni{fk\x94\\o\x83\xceqCw\x86EZ\x81\xbcK\x9b\u011d\x8a\x83Ay{m\xf7L\x87wO\xd7SimRI\x8d\xafrK\x99\xf5BS\xabsFe\x87]f\x7f\xb5\xa2\xf3Y_\xc6PRcue\xb0Cb\x81o\xd7\x8cbd\xa3\u014cIHgtrnyPt\xa6foaX\u010fx\x9blBowz\x8b_{\xca\xe9Wi\xeaE\x84\x81Gh\xdc\xb8\xbauF\x9d\u0108Ixf\xae\x7f\x8e\x95Y\xbd\u0100\u01d9]\x81\xa4\x9dEy\x9fF\x8d\xb2\u010b\x92w\xb8\xbf@g\xa2\xa7RGv\xbb\x96\x81\xe1\x9fW`\xc3\u0135Jwi]t\xa5wO\xad\xbda[\xd7\x88]`\xc3i\xad\xfc\x8fL\x80\xa6LabbT\xc0\xe5\x92c}\xcdh\x99\xc6h\x88\x8b\xaeBH\x80\xee|\xee\x83\xba\xc9k\xad\xa4S\x86\x9dy\xa3\x84ia\xa9ta\u012f\xb7\u0189`\u014d\xa5Uh\x93O\x85\x83\u011dLk}\xa9Fos\x89\xb4\x9bJm\x84\xb5l\u0141u\x9d\x97\x85\xf8\x96n\xd1JW\xce\xaa\x96Y\xc0\xefAetT\x9e\u0145\x82\xd3\x8dG\x99\xcb\xabbo\x89{\u0131wod\u019f\xbd\x83\x9e\x81O\u0121\xdc\x91\xc2\xb5x\xe0N\xd6\xbeP\xb2\xa7HKv\xbe\x96]|\x95B\x87\xc6\xe5oZ`\xa1\xd8`\xc0m\xba\u0120~\xcc\xd0\xa7n\xc7\x85\xbf\xa4]w\u011f@s\x83\x89r\u011fu\x89~\x91Io\x94[\xe9\xb1\xb9\xa0\xbf\x9e\u017f\u0111\xd3\x89@q\x8bg\x88\xb9z\u01b1\u0159a\xed\xb0Kt\xc7\xa4V\xbb\xc3[\u0129\u01ed\u0191^\xc7\xd3@\xe1\u0165\x97s\x9bZ\xcf\x95\x8b\x9c\xc5\u012d\x80\u018b\x95\u011bpwD\xf3\xd6\xe1\x88\u017bneQ\xcb\x8c\x9dq\xb7\x95GC\u0153\xfdS]x\x9f\xb7\xfd\x8bq\xb3\x95O\xd5\x9c\x8c\xb6Qz\xdfti{\u0159\x89\xe1\xcd\xc7W\u015d\u016d\xf1z\xc7W\x8bp\xe7\xbfJ\x8c\x99\x82X\x9c\u0129\xe8\xbdc\x8d\x8cF\x96\xc2LiVjx}\\N\x86\u0147\u0116\xa5Ge\x96\x93JA\xbc\xc4Hf\xc8u~\xb8\xc6\xabdE\xb3\xc9MA|\x81b\x98\xd2\x85\x98\u0107hG\xac\x7fCM\x82\xf5\x8a\x84\u01a4\u0105A\x7fv\x83\xfcV\x80\xe9\u0140\x89_V\xcc\xb3\u0110wQj\xb4\xb7Ze\xc8\xc1\xa8X\xb4\x8d\xc6\xa1Qu\xb7\xbb\x9f\x93\x98\xd5Z\xb3\u0121qDo\x89y`L\xacgdp\xb0\u015f\x8ap\xa6\u0117\xec\xc5\u012eZ\x8e\xb0I\xe4\x94h\x82\x91\x88z\x8a\u0135\x9cf\xb2\xe5\xa0\x9b\u011a\xd1\x80Kp\x8bIN|\x8b\x84\xd1z]\u0144\x85\x85\xb7FU\xd7\xe9\xbbR\xb3\x99M\x83\xc9\xbbGM\xab\x80\x8fki\x80\x7f\x99\xe9r\x99}\xc3`\xb9\u0103\xdem\xc8\x9dn\xc1\xeeR\u01c0\xb3\u011co\u0130z\u0154w\u01f6V\xda\xa3\xc0]\u025c\xbb\u0106l\u0182\xb2\u0120\x85\xfeT\xba\xb7\xe0U\u021e\xcf\u02a6\xb6\x86I\x92\xabd\u013d\u0122d\u012c\xbf\x96\xbb\u0114\xd7\x8ah\\c\xac\x86\xe4\xb2G\xea\xeb\u0124\u0142\xa5\xc0\u01ff\u017c\xc3\xc6M\xba}B\xd5\u0122yFVvw\x96\x88xB\xe8\u013b\u0112\xa9\u0108\x93tC\u0122\u027d\u0160\u0223\xa6\u0101\xe6\xb7H\u013d\xee\x93\xf4N\xd4\x93~^\xa4\u018a\x9cu\x84\x9c^s\xbc{TA\xbc\xf8\xb0\xa2\u0130\xaaD\xe8\xbe\u0147\xb6\xddJ\x91\xaeZ\xb4\u011f~Sn|\xaaW\xda\xa9\xf2zPO\x90\u0238\x82b\xf0\xa2|\x8b\xf8\u011e\x8a\x8c\x9c\u0152Q\xec\xdb\xd0@\u011e\x99\u01ceRS\x7f\xa4\xc1\x7f\xa7d\x85i\x93\xb4ez\xdd\xfa\x8f\xd8\xe3\x8f]Hq\x84kI\x9f\xfe\xcbQ\xc7\xa6\xc3s\xc7\xa4[E\x9d\xac\xc9\u016a\xcdxX\u0192\xb7\xd6\u0181\u0130l\u019e\xb9\xaa\xb9|X\xcawn\x91\xc6\u0184m\xc0\xeaEr\u0112tD\xae\u010b\xe6cQ\x83\x94E\xae\xb3^\u012d\xa5\xa9l}\xe4Qto\x98\u0156\xdcq\xc6\x8ek\xb5\x96\x84\xaa\x8f\xd4\u013b\u0134\xa1@\u010a\xb0B\x7f\xb2\xc8w^^Rs\xbaT\u0100\xa3\u015a\xe6\x9cQP\x91Jv\xc4z\x84\x90^\u0110\xb9\xc6\xaffL\xe0\xb4GC\xb2\x91dt\x98\xad\u0100Rt\xbc\xa4\u0126O\xf0\u011ff\xd4\xf0D\u0168\u0141\u011e\u0198\xef\x9eP\xc8\x86\xae\xe2bM\xfc\xc0XZ\xa0\xb8\xa3@\xc5\x9a\x9b\xbb\xbbQ\xc9\xad\x99]d\x93s\xd6\xd7_\xcd\x96_\xcc\xea\u016ePr\u0114\u0110\xd5G\u0102eZ\xdc\xee\u0118qBhtO\xa0\xa4tE[h|Y\x8b\xd4\x82Z\u015b\xces\xb4x\xba\xb1U\x8c\x92\xf1\x88t|O\x92\u0129\u0120\xbaNbg\xfe\x8aJy^d\xc2Y\xa0\u012e\x84]\u0158z\xa6gC\x82\xb3\x80R`\u0100\x8az\x92\xa2Aj\x8c\xb8CL\x84\xa4R\xc6\xbb@\xad\u014ek\\\xc7\xb4\x7f\xa3YW}z@Z}\x89\xc3\xb6\x93o\xfb\xb6]\xb4^N\x87\xd2}\xe8N\x82\xaa\x96P\x98\xcdy\xb9`S\xb0\xb4\x86ATe\x80VamdU\u0110w\u0284v\u012e\xd5\\\x83u\x8b\xc6\u0157\xa8Yp\xb9\xe0Z\xc2m\x99Wh{\xe1\x84}W\xd8\u01cd\x95\xc9\xfcw\x99ga\xa7\xe1CN\u0119\xce[\u0100\xd5\u012ag\xd6\xc9\xaaX\x98\x8d\xf8x\xac\xbd\u016e\xa6\xa6[\x80\x97\x84N\xce\x86L\x80\xdcU\xd6\xb4\xf2r\xd9\u0160xR^\x96\x86J\x98k\x84\u0133nDX{U\x83~ET{\u013c\xba\xa6PZc\x94jF\xb2\u0116@\x8ep\x98g\x80\x88\xa8\x93B{\x83u\xa8\x9d\u0166yho\xdaD\xae\xaf\xa2\x98\xa0W\xf2\x90\xe0F\xce\xa4\xa8GD\x8f\xe4z\xa6k\u016eP\x9c\u0121q\xcb\x9a\xa5\xc0]\x80\x9f\x98e\x8e\xe2\xda\xb4\xaaKx\u012b\x84P\x88\x97\xd6|\xe6[x\xc3\xa4J\xde\u0125\x82s\x92N\xd6\xbd\x9e\x80I\x86\xacn\u0128Y\xb4\xae\xd0\x97\u0190\x8a\x80mD\x99\u015du\xe4\u0111\u0111Eb\x81\x85e\x92\x81e_\x99v\xa1}\xec\u0119\u01ca\u0113}q\x94\xc9\xe5\x9f\x81T\xaf\xb5Rs\xa1M@}\u016fa\x86\x8fa\xad\xafwv\x9d\u0189\xe5Zw\x9e\\Z{\xe5\xfb^\x9b',
                        ],
                      ],
                      encodeOffsets: [[[108815, 30935]], [[110617, 31811]]],
                    },
                    properties: { cp: [104.065735, 30.659462], name: '\u56db\u5ddd', childNum: 2 },
                  },
                  {
                    id: '520000',
                    type: 'Feature',
                    geometry: {
                      type: 'MultiPolygon',
                      coordinates: [
                        ['@@\x86G\\\x86lY\xa3\x91in'],
                        ['@@q\x82|\x88\x82mc\xaft\xcf\x87VS\xce'],
                        [
                          '@@h\xd1\xa3Is\x87\x7fNg\x81\xdfH\x86\x9b\x90H\xaa\u0137\x9d\xc3h_\xb9\x83\xa1\u011d\xc4\xa7\u0144\xa6u\xd9\x8a\xf9\x8egS\x7f\xafJH\x9f|s\xdd\xc5t\x8d\xc1\xefyMD\u010d\xbbe\xd5tA\xa4{b\\}\x97\x83G\xaeu\\\x8f\x81\xe5PFq\x8bw\xc5aD\x85\x9eK\xb0\xba\xe2_\xa3\xf9b\xb5\x94m\xc1\x8b\xdb\x9c\u0139M[q\x81|hla\xaa\u0101I}\xd1\x82\x83\xb5@swtwm^o\xb5\x88\x7fD\xe9\u013d\u0160yV\x99ky\xb0\xc9\x9e\xfb\xdbR\x85\xb3\x82\x87e\x88\x87\xa5]R\xd5\x8b\u011b\u0127[\u0185\xe5\xdbDp\x8c\x81\x94J\x84iV\x99\x99\x89\xc2F\xb2\x81I\x85\xbbmN\xb7\xa3\x9bLb\xd2Yb\x97Ws\xc0b\x8e\x99pki\x99TZ\u0104\u0103\xb6H\x8cq`\x85\x85\u0125_J\x9f\xafae\xab\x83Kp\xddx]a\u0115\xdbP\x83\xc7\u021f[\xc1\xe5\u0175\xcf\u0151\x97\xf7Pw}\x87T\x9c\xd9@\xd5s\xab\u013f\xdbq\xa9\xbd\x9cm\xa4\xd9H\xb7y\u01e5\u0118\u0109B\xb5\u0128\xd5n\u0111]K\x84\xa9\x84\u0153\xe1\x8b\x9fG\xe7\u015f\x8d\xa7\xd5\xdfg\x87\x8d\u01d7\u0126T\xe8\u01a4\u01ba{\xb6\xc9H\xced\xbe\u015a\xca\xb7O\xd0jXWr\xe3Lyz\xc9AL\xbe\u0119\xa2b\u0136\u0117y_qM\u0114\u0105ro\xbch\u010a\x9ew\xb6\xf8V\xa4w\x94\xb2\u0108]\xca\x9aKx|`\u017a\xa6\xc2\xc8dr\x84c\xc8\x81be\xb8\x9b`I\xbc\u010dTF\xb4\x9d\xbc\xd3\xfd\u0203r\xb9\xcdJ\xa9k_\u0219l\xb3\xb4_\x90p\u0110\x9d`o\xd2h\x8e\xb6pa\x82^\x90\xd3\u0114}D\xbb\x9d^Xy\x9c`d\x98[Kv\x85JPh\xe8hCr\u0102\u011a\xc2^\xca\u018c\xa0w\x88ZL\xad\u0120\xa3\x9a\xc1brzOIl\x92MM\x94\u012a\u0150\u017e\xcbr\xd7\xcee\u0166\x8etw|\x8c\xa2mK\x81jS\u01d8\u0148\u0102St\x8d\xce\u0166EtqFT\x86\xbe\x86E\xec\xac\xac\xf4x\xccO\xa2\x9f\xa0K\x8a\xb3\u0140\xba\xe4Y\x86\x84\x94PVg\u014e\xa6\u014am\u015e\xbcVZwVl\x8c\x8d\x84z\xa4\x85\x9e\xa3Tl\xaect\u013d\xda\xf3{G\x7f\xadA\x87\x8c\xc7ge\x9a~\xce\x91d\xbf\xe6aSba\xa5KK\x7f\xfb\x90j\xae_\xc4\x87^\\\xd8\xbebP\xae\xa6x^sxj\u0136I_\xc4\xa0X\x82\xe2\xbc\x95Hu\xa8Qh\xa1\xc0@\x90\xcb\xf4}\x8e\xb1\x9eGN\xec\u010e\x7flT\x7f\xb8\x88\x85`V\x7f~R\xb0tb\xd5\u010a`\xb8\xfa\xdbt\xcf\x80FDu\x80[\x83Mf\x81qGH\xb7\xa5yA\x89zt\x90MFe|R\x82_Gk\x86ChZe\xda\xb0to\x98v`x\x8bb\x84\x8cDn\xd0{E}\x9aZ\x98\xe8\x80x\x97\x86NE\xde\x8aREn\x98[Pv@{~r\u0106AB\xa7\x82EO\xbf|UZ~\xec\x84Uf\xa8J\xb2\u0102\xdd\xc6\x80\x82s\xaa\x96B`\x84s\xb6\x9cfv\x81\xf6\xa6\x8a\xd5~d\xd4q\xa8\xb8\xba\xbbu\xf9\x90[[\xa7\xb4sb\xa4\xa2z\xfeF\x9c\xa2\xc6\x85\xc0h\x88\x99\x90\xc2\x88W\\\u0131\x8e\xcbI\xdd\x8ao\xb1\u012d\u0160\xa3\xfe\x88\xcas}\xa1R\x9d\x8f]\x8c\u011b\x83\x7fD\x9d\x82g\xb4VG\xa2\x82j\xb1\xae\xe8\x86\xba\xc3m\x8dpU[\xc1\x9b\x91\x8c\xeb\xba\xb0r\x9b\xdcbNu\xb8}\x8e\xba\xbc\x87`ni\x94\xba\xd4X\u0104\xa4\xbc\xd4da\xb5\x80\xc1_\xc3\x80\x85\x86ftQQg\x9cR\x97\x91\xb7\u01d3\x92v\x94}\xdd\xd7\x9c\u0135]\xb5\x9c\x93Wc\xa4F\xb2\x9bO\u0129\u0173\xe3W\xbd\xafK\x8d\x82\xa9\x85]\x80\x81{\x86L\x8f\xf3\xb5CI\xb5\xb1M\xdf\xbfh\x9f\x95\xa9\u0101q\xaco\x82\xbd\x9e~@i~TUx\u016a\xd2\xa2@\x83\xa3\xc0E\xee\xf4ru\u0144\x82\x94\x93\x82b[\xa7nWuM\xc6Ll\xbf]\x81x}\u0133\xad\x80\xbd',
                        ],
                      ],
                      encodeOffsets: [[[112158, 27383]], [[112105, 27474]], [[112095, 27476]]],
                    },
                    properties: { cp: [106.713478, 26.578343], name: '\u8d35\u5dde', childNum: 3 },
                  },
                  {
                    id: '530000',
                    type: 'Feature',
                    geometry: {
                      type: 'Polygon',
                      coordinates: [
                        '@@\x8d\x81[\x84\xf9x\xbd}\xd1RH\x91\x81Y\u012b\u013a\xfb\x7fs\xcdn\x91iEo\xe3\xbdYa\x81\xb2\u0117{c\xac\u011dg\x95\u0102sA\x95\xd8\xc5w\u010f\x82\xf5zFjw}\x97\xabDx\xbf\x81}U\u0169l\x9f\xea\x99@\x95\x8fH\x8f\xc5\xadF\x89\xa8\xc7oJ\xb4\xd3n\u0169u\u0105\xa1\xc3\xa2p\xd2\xc5\x8c\x93\xd8\xa0TF\xb2\x82xa\xb2\xcbX\x80\x82c\xca\x8blH\xee\x7fA\xdf\xcb\u0141k\u017b\u0191\u0177\xc9\xa9h\x99W\xad\xe6\xdfU\x87\x93\xcbs\xa1\xa6\x7f}\x95te\xe8\xc6\xb6St\xc7\x80\xc7}Fd\xa3j\x8b\u0108Z\u0106\x90\xc6\x8b\xa4T\x82\u010d\\D\x83}O\xf7\x9a\xa3\x81U\x88\xa7~\u0143G\x99\x82\xe5\x81\u0143D\u011d\xb8\x9cTsd\xb6\xb6B\xaa\x9a\xa4u\xa2\u014c\u010eo~t\xbe\xcd\u0176\xd2tD\xa6\xda\x84i\xf4\xf6\x89\x80z\x9b\xd8X\xb2gh\u012fh\xbd\x90\xdb\xb1\xaf\x80\xffm\xb7zR\xa6\u019f`\xaa\u014a\xc3h\xa2rO\xd4\x8d\xb4\xa3Ym\xbc\xe8\xea\x8df\xaf\u016a\u013dn\x84\x86c\xdab\x8cw\\zlvW\x9e\xaa\xe2\x88\xa0\xa6g\x96\x8fm\u013fB\u0139\x9f\xa3\xa2\u01b9\x7f\u0159b\u0125k\u01eb\xdfeeZk\xd9IKueT\x81\x9d\xbbsVesb\x91\x8da\x90\u0115\xa0\xa0\xb6\xaedN\x9c\u0104\xc4p\xaay\x8e\x90\xbc\x97\x84\xb3BE\x98\xael\x87\x8eG\x9c\u016dC\x9c\u01f6w\xea\u017c\u0114\xc2e\x84p\xcd\xc0Q\u019epC\x84\x96\xbc\u0172\xc8\xad\x90A\xce\xf4\xb6R\x84\xe4\x92Q^\xd8u\xac\xb0\x9a_\xc8\xf4c\xb4\xb9\xf2\xa8P\xce\xa2hl\u010e\xa6\xb4\u0126\x93\xc6\xb4s\xe2\xc7\x84\x8f\u0172Pn\xcaD^\xaf\xb0\x92Upv\x86}\xae\x81BP\xcc\xaa\x96j\u01ecx\x96S\xf6wlf\xf2\x7f\xaav\x80q\u0138|`H\x80\xadvi\u013c\x80nd\u011c\xad\u0106h\u0148\x95\x82em\xb7Fy\xde\x81q\xf3\x9eS\u012f\xaf\x91\xb3X_\u011e\xe7\xeatryvL\xa4\xa7z\x84\xa6c\xa6\xa5jn\u015ek\x98\x88lD\xa4\xf8z\xbd\u011c\xe0\x9e\u0102\u0167M\xc5|\xe1\u0186\xe0\xcac\xf0\xc2F\xdc\x8e\x82\xe1\u0162\xa5\\\\\xba\x99\u0130\xf8\xd2\x7f\xd0J\u0134\x87\x84\xeeD\xa6\x90zK\xb2\u01cf\xceEh~\x92CD\x90\xadhMn^\xcc\xf6\xc4\xa9\u010cZ\xc0\x9ea\xfc\x84f\u026dy\u0153p\u012f\xb4\u011bF\u0171k]\xd4\u011b\xa2ql\xc5\u0106\xd9a\xb6~\xc4q\x9a\x9a\xea\x7f\x80lj\x7f\x90N\xac\xbcH\x84\xca\x9aNQ\xb4\xea\xbcV\xd8\xb8E\x86\x86^\u0143\xd2y\x8c\x83M{\x8cJLo\xd2\x7f\x9c\u0119\xe6\x9fe\xb1\u0136\x9by\x89\x92\x87g\x81\xe3\x93\xafJY\x8d\xc6\u012d\u0118\xebo\xa5\u0160\x89o\xafhcK\xabz_p\x8arC\xb4\u0122\xd6Y\x94\x97\xbc\xa0v\xb8\xa2R\x8e\xc5W\xb3\xc2\xa7f\xc7\xb8Yi\xb3xR\xb4\u010fU\xcb\x8a`\xea\u013fU\x7f\x84\xfb\x80u\u0106B\x83\u01a3\xf6\x89N\x81\x80DH\xab\u0108g\x86\x97\x97\xd1\x82aB{\xcaNF\xb4\xacc\xb7\xc5v}e\xc7\xc3GB\xbb\x94If\x95\xa6H\u0148\u0115M\x85~[iwjU\xc1KE\x95\x8e\x8b\xbed\u012a\xe7W\x9b\x9a\x81I\x8b\xe8\xc0\x8co\xc8X\xf2y\u015e\u016e\xc8X\xe2\xce\u015a\x8aj|\xe0sRy\x8b\xb5\xd6\x9b\x96Pr\xb4\xfe\x8c\xa0\xb8^w\xfeTD\u0154\x96Hr\xb8\x8b\x9eR\xccmf\x87\u017c\xd5\xe2C\xf4ox\x96\u011c\x7f\u018c\xc6\u012e\x8c\x9b\xd0\x96\x9cY\x98t\xe2\u0166\xd4@]\xc8\u01ee\u0192\\\u012a\xbc\xc4\xa3Us\xc8\xafLb\xee\u01b2\u015a\xbayh\x87r\x8c\x8a@\u0112\xd4\x9d\u0180\x9f\xc0\xb2\xba\\\xeap\x93\x92J\x8a}\u0120v\x8aqt\x84\u0120@^x\xc0\xa3\xc8\x86\xa8m\xcb\xcf\u011f}n\xb9_\xbf\xa2\xd7Y_\xe6p\x88\xc5\x96A^{\xbd\x95Lu\xa8GO\xb1\xd5\xbd\xdfM\xb6w\x92\xc1\u0122\xdb\x82P\x82\x9b\u01a2\xbcpc\u0132x\x8a|ap\xcc\xacH\x9a\xd0\x8c\u014a\x7fS\x9dfs\xf0BZ\xbf\xa9\x93X\xcf\xd2K\x95k\x86\xf7E\xfb\xbf\x89S\x85rEFs\xd5\u016bk\x94\xf3V\u01e5\u0149iTL\x82\xa1n{\x8bux\u0163\x8d\xcfh\x99\xf4\u015d\xac\u011f\u014dN\x93\x91NJkyPaq\x99\xc2\u011f\xa4K\xae\x87Y\x9fx\xc9\u018b\xc1]\u0101\u0119Dq\xe7gOg\x86ILu\x97\\_gz\x97]W\xbc\x9e~C\xd4\u0113]\x8fb\x81\xb5og\x8dp\xd1\x9e_o\u010f`\x8f\xb4\xb3\u021akl`I\xaa\xba\xce\u0204q\xd4\xfe\x9e\xbbE\xb3\u010eSJ\xbb\x9c_f\xb7\x82ad\xc7q\x83\xc7c\xa5\xc1_\u0179w{\x99L^\xc9\xb1\u0107x\x93U\xa3\xb5\xf7\x9dxg\u0109p\xbb\u0106qN\u0113`r\u0118za\u0135\u011a\xa1K\xbd\xcaBzy\xe4KXqiWP\xcf\xc9\xb8\xbd\u0159\xcdc\xcaG|\xb5\u0195\u01a3G\xcb\x9b\xf7\x9fk\xb0_^\xfd|_z\u010b\x90BZocm\xf8\xafhhc\xe6\\l\x88MFl\u01b0\xa3\u011c\x84\xc6yH\x93\x84F\xa8\x8d\x89\xb5\xea\xd5]\x97\x9bHA\x85\xe0\xd3\x84^it\xa0`\xfe\xdf\xe4k\x8a\u0124\xceT~Wl\xff\xa8\x84\xd4PzUC\x8f\x96NVv\xa0[j\xe2\xf4D\xf4\u010f[}\x9e\x89z\xbf\x96msSh\x8b\xaf{j\xef\x8d\u011fl}\u0161\u0139[\x96\u0151\x8c\x89gK\x8b\xa9U\xb7\xb5\xcb@\xbe\x83m_~q\xa1f\xb9\x85\xc5\xcb^\xbb\x91f\xb3\xf8}Q\x95\x84\xa1\xd6\xcb\xb3g\xcd\xb1^\xc7\x81\x85\\\xeb\xc3\x83A_\x97\xbfbW\x9b\xcf[\xb6\u019b\xe9\x8f\x9d\xa3F{\u012bZgm@|kH\u01ed\u0181\u0107\xa6U\u0114\u0165\x83\xd7\xeb}\u01dd\x83e\u010f\xba\u0221\u0218\xcf\xedB\xc9\x99\xa3\u0101\u0118P\xaa\u0133\xb6\x93\u0149\xff\x87y\xa9n\x89\u010f\xa3G\xb9\xa1I\x9b\x8a\xb1L\xc9\u013a\xd1d\u0109\xdc\x87W\xa5\x98\x89}g\x98\xc1\x86{aq\xc3\xa5a\x8a\x9d\u0131\u0119\x9d\xcfZ\x97\xef`',
                      ],
                      encodeOffsets: [[104636, 22969]],
                    },
                    properties: { cp: [102.712251, 25.040609], name: '\u4e91\u5357', childNum: 1 },
                  },
                  {
                    id: '540000',
                    type: 'Feature',
                    geometry: {
                      type: 'Polygon',
                      coordinates: [
                        '@@\xc2\x9dh\x9e\u013ex\x8e\x9d\u0156\x89x\x83\xd2V\x8e\x86\xba\xc5\xe2A\u012a\xdd\u0206\xb5\u0119\xaf\u0147a\xb1r_w~uS\xd5\u0148\x91qOj]\u0244Q\x85\xa3Z\x85\x85UD\xfboY\x92\xbb\xa9M[\x8bL\x8d\xbcq\xe3\xcb{V\xcd\x95\xe7WV\x8fi\x8f\x8e]\xeb\xa9\xc4\xf7\xe0y\x81\u019bh\x9b\xdaU\xb0\x8c\x8ca\x94d\x84cQ\x83~Mx\xa5\x99cc\xa1\xd9aSyF\x97\xd6\x81k\xad\x8cuR\xfdq\xbf\xd4\xb5\x9d\x95Q\u013d\xb3aG{\xbfF\xb5\xeb\xaa\xe9\u011c\xff\xaa@\xac\xb7\x96K\x89\xb7\xe0ar\x8di\u0115\u0100\xabV\xbb\u0176\x99\u0134\u016b\x98g\xe8L\u01f4\u0147\u01b6af\x8bt\x8c\xe8B\u015a\xa3^\x8a\xe2\x86\u01d0\xdd\xae\x96\x9aM\xa6\xc1\u01de\xff\xacLh\x9f\x8eJ\xbe\xf3\u01be\xc6\xbacxw\x8d\x8bf]Y\x85\xb4\x83\xa6|\x9cQLn\xb0a\x9cd\u010a\x85\x9c\\\xa8o\x92\x9c\u01c0\xcd\u014e\x9c\xb4\u0129\u0100d`t\xcaQ\u015e\u0155|\x82\xa8C^\xa9\x9c\x7f\u0108\xa6\x84\xa6\xceJ\u010a{\x8e\xeb\u010ej\xaa\x8f\xb2r\xd0\x89\x9al`\xbc\u0104[t|\xa6St\xe8\xbe\x89P\x8c\xdcK\xb8\x80d\x98\u0184\u0131]s\xa4\x97\xee_v\xb9\xceV\xf2\x9d\u0166j\x98\xa3\u018fsc\x97\xac_\u011e\xb4|\u0141\x98\x9d\xa6Av\x8e\xa6w`\u0103\x8fa\x90\x8d\xddaa\xad\xa2e\xa4\u0131\xb2\xa9\xaaS\xaa\x9a\xc8M\u0104w\x9e\xc9\xd8\u0154\xec@T\x91\xa4\x97\u0118\x99\\\xf5\xaa@\x94\xfeo\xb4\xadxA\xa0\x90\x90s\x94\xc2t\u014eKz\xf3\xb4\xc7\u010a\xb5\xa2r\x9e\x7f^n\u010a\xad\xc6\xac\xd7\xfcG\x9e\xa2\x82\xb3\xa0{\xe2\u010a]\x9a\x99G\x82~b\xc0gVj\x81zlh\u01f6\x8df\x80\x9eO\x81\x9afd\x8a\x89\xaaB]pj\x84\x95TO\x96t\u010a\x82n\xa4}\xae\xa6\x83\u010c\xa5d\xa2\xbc\xbbdd\x9a\x94Y\xbc\x8et\x97\xa2e\u0224J\xa4}\u01fe\xa1\xb0\xa7\xa4A\xd0\x93lc@\u011d\x94s\xaa\u0107\u013c\u0111A\xe7\x87wx\x95UuzE\xd6\u0121~AN\xb9\xc4\xc5\u0200\u017b\xa6\xbf\u0123\u0141\xe9\xec\xb1H\x85\xe3d\xabg[\xd8\x89\xbc\u0113\xc0\x95c\u012b\u013e\u0121\xaccJ\x91\xb5\x85\xd0\u02a5V\u021d\xb8\xdfS\xb9\x86\xfd\xb1\u011fk\u0181\xbc\u0105^\u025b\xa4\xdb\xff\x89\x9db[}\xac\u014d\xf5\xc3]\xcbNm\xaeg@\x8d\x95Bg}\xcdF\xb1\u01d0yL\xa5\x8f\xedC\x88\x83I\u0133\x80\xcf\xf7\xd1\x9a\u012f[\xb9\xa6[\xe2\u0161\x8d\x81E\xdb\xef\xc1\xc9d\u0185\xdf{\xe2N\xc6\u0101\u0168\xdf\x9d\xbe\u011b\xf7yC\xa3\x87k\xad\xb4\xd3H@\xc2\xb9\x86TZ\xa5\xa2\u012f\x83\xb7\xccA\xd0\xa7\xae\x97Z\x8fc\x85v\xbd\x9fZ\xad\x8d\xb9|\xc5\x95WZqgW\x93|ieZ\x7f\xc5YV\xd3\x81qdq\x8f\x95bc\xb2R@\x81\x86c\x87\xa5R\xe3\xbbGe\x86\x9fe\u0183\u012bQ\x95}J[\xd2\x93K\x85\xac\u018f|o\x92\u0117j\u0121\u0120\xd1N\xa1\xf0\xafEB\x7f\u010dnw\xf4\u024d\x8f\u0117\xaa\x83\xb2\x95C\u03bb\u0179\u0121\u01dd\u0285\u012f\u012d\xe3\u0323\u016b\u0239]\u0393\u0367g\u0161sg\u023d\xf3\u03e7\xb5\u01db\x86\u0119g\u017f\xb6\u048d\u0107`\u0118\u0105\u014cJ\xde\x9a\xe4\xa4r\xc5\u0148\xa5\xd6\xc1U\u011bt\u0119u\u016f\xdei\u010a\xc4\xc0\\\xc6s\xa6\xd3Rb|\xc2^\u0159\xcck\xc4\u0177\xb6\xbd\xf7\x87f\xb1iM\xdd\x91\x9b\x89@\u0125\xb0G\xac\xc3M\xa5n\xa3\xd8\u0105\x82\u011f\xaf\xdf\x94\xa7a\xebb\xe9\xfc\xd1O\u010d\x9ck\xa3{\\\x91e\xb5\xaa\xd7M\x91\x9a\xc9fm\xab\u0191{\xc5\xd7\x83G\u014f\u01e9\xe3y\xb3\xa9W\xd1\u0103\xfb\x82\xb7\xb7\x91Q\x97\xf2\u0131}\xaf\xe3\x89I\x95\xe9\x7f\xd5\xc2Z\xa8\u012b\xe8s\xb6Z\xc8s\x8e\xe6\u0114T\u0158v\x8eg\xccsN@\xee\xe1\xbe\xf3@\x89\x98\xd9wU\xb1\xc9T\xe5\xbb\xa3T\u0111\x9fWx\x8fq\xb9Zo\x91b\x8bs[\xd7\x8c\xafc\u0129v\x87\x8c\u0117\u0167\xb3BM|\xb9k\x89\xaa\u0127\x97\xa5TzNYn\xdd\x8d\xdfp\x8d\x81\u0119r\xf1\u0120\u0109RS~\xbd\x8a\u011bVV\x8a\xb5\x82\xf5\x87\xab\x8cM\xa3\xa3\xb5B\x95\u0109\xa5\xe1\xbaae\x81~\xb3Au\u0110h`\x8f\xdc\xb3\xe7\x9d@B\xdb\x98\xef\u013fa\xa9|z\xb2\xdd\xbcD\x94\xa3\xe0\u010d\xb2\x8b\u0178\x83I\x83\xfb\x9b\x81I\xa0\u0101\x80\xf3K\x8d\xa5}r\xdd_\xc1\xb4\xe9Ma\u0148\xa8\x80~\xaaS\u0108\xbd\x8e\xbdK\xd9\xf3\u013fe\u0183\xc6B\x8e\xb7\xac\xebn\xd7W\x8d|U\xba}LJr\u01b3\x98l\u0152\xb5`b\xd4\x7f`Q\x88\x88\xd0\xd3@s\xac\xf1I\x7f\x8c\xcd@\xfbws\xa1\xe5Q\xd1\xdf\xc1`\u014b\u0134{\u012a\x93T\x95\xda\xc5TS\xc4\xb3\x82\x8bYo|\xc7[\xc7\xbe\xb5MW\xa2\u012di\xd5\xd8\xbf@\x98\x9aMh\x85p\xd5]j\x86\xe9\xf2\xbfO\u0187\u0106\u0187p\x80\xea\u0109\xe2l\xd8w\x96\u011bs\x8f\x88\u01e9\x82\u0135\xb8c\x85\x9dbU\xb9\u0159\xa8WavquSM\x9dzeo_^gs\xcf\xb7\xa5\xd3@~\xaf\x9d\xbfRi\u012bB\x99\x8a\\\x94qTG\xaa\xc7\u011c\xe7Po\x8a\xfff\xf1\xf2\u0105\xa6\xf3Q\u012b\xc8\xe1P\x95\x9c\u0101b\xdf{\x83Z\u0157\u0138I\xe6\xc5\x84hnsz\xc1C\xcb\xec\xf1\x9a\xcf\xb7\u0105\u011a\xddUm\xae\xf3\xadL\xb7\u0103U\x9b\xc8\xedo\xf9\xb4\x81\xcaj\xb0\u0141\u0164_u\xb5^\x91\xb0\x8c\xec\xc7\x96@t\u0136\u0112\xa1\xc6\x87M\xb3\u0122\xab\x98\u0130\u0128\xc5\xae\u011f\x86R\x8e\u0101\xf0\x93gghe\xc6\xa2z\x82\xca\xa9\xd4\\\xb0\xdd\u010ez~\u017a\xa4Pn\x96M\u012a\xd6B\xa3\x90\x9fk\x99n\xe9\x84\xa7\u017c\u0107\x8a\x98\u0106K\x84\u0112\xb0\x90\xbcL\xb6\xe8\x89\xe2z\xa8u\xa6\xa5LD\u0118z\xac\xfd\xcem\u0118d\xbe\xdf\x94Fz\x93hg\xb2\x99Fy\xa6\u011d\xa4\u010b\u0146b\xce\x9b@y\x82\u0104\xe6m\xb0N\u012e\x81ZR\xd6\xed\x8eJ\xb2\xf6L\u0138\xd2\xa8Y\xae\u018c\xd0V\x89\xe0\x98tt_\xda\x80\xc2y\u0120z\x9e]\u0162h\x80z\u010e{\xc2\x86\u0122X\x94\x88c|\x9a\xd0q\x8e\x9afO\xa2\xa4\xf6g\x82\xccHN\x8e\x84PK\u0156\x9c\x8e\x98U\xfa\xb4xx[x\x88v\u0110C\xfb\u0100\x8a\xec\xd6T\xac\xb8^}\xccs\xf2d\xb4_\x8e\x87Kg\u017eL\u0134\x85\xc0Bon|H@\x96\xcax\x98\x97\xa6Bp\x9d\u0170\x88\u014c\xbff\xb5\u018cA\xbez\u01c8Rx\x8a\xb6F\x94\x9ck\u0104\u017a\x90Rz\u0140\x88~\xb6[\x94\xb4Hn\xaa\x96V\u019eu\u0112\xad\xc8\xa8\u018ec\x90\u01bd\xccm\xb8\xc1\xc8M\xa6x\u034a\xeb\xc0x\u01c6B\x92\x9a\xfa^\xb4W\x86\xa3\x96d\x84k\u027e\u012cp\x9cw\x82\u02c2\xd8\u0266\u013c\u012cI\u015a\x9c\xca\x95n\x9b\u0154a\xb8\x99~J\xb0\xee\x94l\u024cx\u0124\xca\xc8\xf0h\xcc\xae\x82g\x98T\xb4\xf8\x8e\xe0C\x88\x8e\xc0^\xaaerr\u0198d\x9e\xa2\u0130P|\x8d\u0116\xa0\u0178W\x9c\xaa\u0126^\xb6\xb4\xc2L\x84aT\xb1\xfcW\u019c\x98\u01c0R\xc2\x9a\u0176U\u0144\x9a\u0116[QhlL\xfcA\x86\x8b\xdc\\\x86qR\x9b\u0104\xa9',
                      ],
                      encodeOffsets: [[90849, 37210]],
                    },
                    properties: { cp: [91.132212, 29.660361], name: '\u897f\u85cf', childNum: 1 },
                  },
                  {
                    id: '610000',
                    type: 'Feature',
                    geometry: {
                      type: 'Polygon',
                      coordinates: [
                        '@@\x98p\xa2\x97\u022e\xb5\x9a\xfbG\x99\u0126}\u0126\x9a\xf0\x81\u01da\xb6\xf2\x8f\u0184\x80j\u0242z\xb0{\xba\xd8k\xc8\u0119\xe2\xa6j\xaa\x82Bg\x82\\\x9c\u010b\xb0s\xac\x8e\x92]j\x9e\xfa\xa0\x82E\x94\u020c\u01c6\xacs\x84t\x87\x94R\x88\xc6d\u0120\u0130\x8ew\xdc\x94\xb8\xf4W\xbe\u01ae\u0142\xd2_{\x92\xcc\x9a\xfb\xbc\x84j\xba\xb9\xa2G\u01ea\xd2\xaf\u0118\x83Z`\xba\u014a\x83ec\u0146\u0105\x9a~B\x90\xc2gzp\xe2\u0113\xf2Y\u01e0\u0230\xccT\xce\xa8\xc2W\x9c|fc\x9f\u0103\xa7uF\x97\x8c@N\x9f\xa2XL\x83\x8aRM\x7f\xba[\u011f\u0223\u017f\xef|\xa5J\x99kc`s\u0149\u01f7\x92\x9dY\xb9\x8bW@\xb5\xf7K\x85\xe3\xef\xb3\xdbIc\xf1\xb7\x81V\u020b\xda\x8d\xd2\u0137\xf8\x9d\xa9\x97\xfe\xa5\x83y\x82\xd3\x9f\u011f\u0119mW\xb5\xceum\x7fZy\x81O\u0145\u019f\u0125\xd3~s\xd1L\xa4\xb5a\xc5\x85Y\xa6ocyZ{\x89y\xa0c]{\x8cTa\xa9\x83`U_\u011a\u0113\xa3\u03c9\xca\u018dK\xf9\x92K\xb6\u0231\xdd\u01b7\xa7{\x7f\xfb\xbb\xc5\xc1\u0239\xcd\xe9u\u0133|\xb9c\xd1d\x91\x8a\x7f\xecUY\x83\x8eO\x91uF\x8d\x96\xd5\xc8Yv\xc1Cq\xd3\x83T\x95\u01e2\xed\xa7\xb7S\xb9Ng\x8aV\xac\xeb\xf7\xc1t\x87\xb0D\xd8\xaf\x92C\xb4\u0149\u0192\xf3p\u0123}\x7f\x84\u010b\x81cE\xcb\x85F\x9f\x9f\xe9GU\xa5\xd7K\x85\xa7\xad\xb6\xb3B\x8b\u010c}C\xbf\xe5\u010b`\x8dw\u0121B\xb7\xa4\u0151c\u01ad\xb2\u0151[\xc5^axwQO\x85\xffE\xcb\xdf\u015a\x95\u0124N\u0114\x9fw\u0187\x88\x81\xc4\x8a\u0144w\u012a\xad\x8ao[\x7f\x84_K\xd3\xaa\xb3\x93\x8f\xd9nK\x89\xc7\x83\u011b\x9c\xff]\u010f\x80\u0103_d\xa9\xb7\x7f\xa9\xdd\x7f\u014f\xb0\xd9\xaeg]\xb1\x84\x9f\x87\xdf\x98\xe5\x9b\x97\xac\xf7\x9dm\\\x9bia\u01d1k\u011bX{\xa2|ZKl\xe7hLt\x81\x80\u0147\xee\u0175\x80\u0153\xe8[\x80\xc9@\u0189\u0104E\x9c\x87t\u0187\x8f\xcf\x98\xb3\xad\u0127Z\xabmJ\x85\x9b\x7f\xd7\xbe\x91M\x81t\xdd\u0126\xa3Iw\xc4\xe5\\\xd5{\x87\x98\x83Ow\u012c\xa9L\xd9\xb3\x81\xd9gB\u0195\u0140r\xcc\x9b\u0122\u016dO\xa5l\xe3yC\x90\xa7H\xcd\xa3\xdfE\xf1\x8f\x9fX\xa1\x97\xad\xb0\xd9Cgp\u0165z\x91\x88b`wI\x84vA|\xa7\x94\x7f\x87\x97h\x8do\u0115@E\xb1\x93iYd\xa5O\u013b\xb9S|}F@\xbeoAO\xb2{tf\x9e\xdc\x97\xa2F\u01c2\xd2\x88W\xb2\xb0B\u0124h^Wx{@\x84\xac\x82\xadF\xb8\xa1\x84\u0137n\xa3\x90P|\x9f\xaa\u0134@^\u0120\u0108\xe6b\x96\xd4c\xb6l\x98Yi\x85\x96^Mi\x98c\u010e\xb0\xc2[\xe4\x80v\xef\xb6gv@\x90\xc0\x93\u012c\xb7lJ\xb8sn|\xbcu~\x8da]\x92\xc6\xc8t\u014c\xbaJp\x92\x83\xfe\xa3KKf~\x8a\xa6Uby\xe4I\x9a\u013a\xe3n\x87\xd4\xbf^\xad\x9e\u0175MT\x96\x7fh\u0120\xdc\xa4ko\xbc\u014e\xec\u0105\u01dch`[t\x8cRd\xb2\u0132_\x9cXPr\u0272\x89l\x91\x82X\x9eiL\xa7\xe0\x83\x96\xb9\x8eH\x98\xb0\u0226q\x90\xba\xaeQC\x97bA\x86\x84\u014cJ\xb8\x90\u0115\xda\xb3\u013a\xa7\xa0`d\xa8Yj\x9eiZvR\u013a\xb1\xf6VKkjG\u020a\xc4\x90eP\x7f\u011e\x9eZm\u013cK\xc0\x80\x82[\x8a\x8e`\xf6s\xech\x86\xef\xceo\u012cdtK\xde{\xac\xe8\xd2\xd2B\x8c\xd4p\u0132\xc7\u012cJ\u014a\x81\xa6\xb1J\xab\x88Y\xa7\x8b@\xb7pH\x80\xb5\xe0\xe5VKe\x9bpW\x86ftsA\x81\xc5qC\xb7\xacko\xabpH\xc6uK@o\x9fH\x81\u0106\xdb\x84\u0137h\x8dx\x93e\x91n\x9bS\xb3\xe0\u01cdrq\u01b6Rbzy\x80\xb8\xcb\xd0\x90l\x9b\xbcE\xbap\u0124\xbc\x8cx\xbc\xbd~\u011e\x92\x81\x94\xe0@\x86\xda\xfcdK^\x88m\x90\xccSj',
                      ],
                      encodeOffsets: [[110234, 38774]],
                    },
                    properties: { cp: [108.948024, 34.263161], name: '\u9655\u897f', childNum: 1 },
                  },
                  {
                    id: '620000',
                    type: 'Feature',
                    geometry: {
                      type: 'MultiPolygon',
                      coordinates: [
                        ['@@VuUv'],
                        [
                          '@@\u0169\x8bE\x8d\u0120tt~nkh`Q\x89\xa6\xc5\xc4\xdcdw\x98Ab\xd7\u0120\u0105J\x88\xa4D\xfc\xe8g\u013aqBq\x9cj\xb0lI\xa1\u0128\xd2\xa4\xfaSHb\x9a\x87\x8aj\xce\x91B\x8a\xb0aZ\x88\xa2KJ\x8e\x92O[\x90|A\xa3\x9eDx}N\u0102\xac\x95HUnrk\x84\xa0kp\x80\xbcY\xa0kMJn[aG\x82\xe1\xda\xcf[\xbdrc\x86}aQxOgsPMnUs\x87nc\x8f\x8bZ\x85\x9e\x96sK\xfavA\x9bt\x84\xde\u0121\x92\xa3\xae\u0100YKdnFw\x9a\xa2JE\xb0\x94Latf`\xbch\xacwe|\x80\xc6\x87\x9abj}GA\x80\xb7~W\x8e\x94\x97`\x86\xa2MC\xa4tL\xa9\u0132\xb0qdf\x94O\x82\x93b\xde\u012c\xb9ttu`^Z\xfa\x9dE`\x8c[@\x84\xc6s\xeez\xae\xa1\x92C\x84\u01b3\u019cG\xb2\x93R\x91\xa2R\x92m\x94f\x8ew\u0138g\xdc\x83\x82\u0105\xa0G@pzJM\xbd\x90m\x8ahVy\xb8u\xc8\xd4O\xb1\xa8{Lf\xe6U\xb6\xdfG\x7f\u0102q\\\xaa\xac\x87\xb2I\x82\xa5I\u0149\xc8\u012bo\u0131\x8b\xd3\xd1A\xe7\xd1|\xabL\xddcsp\u012b\xf0\xcdg\x85t\xeb_\xf5\x89\x8d\x81\\\u0109\x7f\xf1LYn\u011d\x9dg\x92\x9fR\u01e1\xc1iHLl\xf5U\u0139\xb2uQjYi\x9d\xa7Z_c\xa8\x9f\xb4\u0139\u0116\xd9\xb7\x8f\u014bI\x85\x83aBD\x98\xadR\x8f\xb9\u0225r\x97\xaf\x8dG\x95\xba\xdf\x84K\xa8\x9dj\x81Wk\x92\u0271\x8aOq\x9bW\u0133\\a\xad\x8bQ\\sg_\u0106\u01db\u014d\xebp\xbb\xa3l\u011f\xdb\x80gS\x95\u0176N\xae\x9d\xc0]\x88\xd3\xe4m\x99\u0139\xe3Jaz\xa5V}\x89Le\xa4L\x84\xfdo\x91\xb9Is\u014b\xc5\xc7^\x91\x8ebz\x85\x7f\xb3tmE\xc1\xb4a\x8a\xb9c\u010dec\xc7N\x95\u010a\xe3\x7f\xc1\\\u010d\xaf\x97dNj\x95]j\x86\x97Z\xb5k\xd3da\x95\u0107\xe5]\u011f\u0133@\xa0\xa9O{\xa4\x8f\u0138m\xa2\x83E\xb7\x81\xae\x83\xab|@Xwg]A\u0123\xb1\xaf\x87X\u01c1\xd1\u01f3\xaac\x9bwQ\xda\u015d\xf1s\xd5\xb3\xdbV_\x8f\xfd\x83\x7f\x98\xa5\\\u016f\xa5\xa9\xbe\xf7w\x97\x8e\xa9W\xd5\xca\u0129h\xff\xd6\xc1Ro\xb8V\xac\xe2Db\xa8\x9ah\xfbx\x96\xca\xd7\u01cc~Z\xe2\x83g|\x9aX\xc1n\xdfYo\xba\xa7Z\xc5\u0158v\x8c[\x84\u012d\xd6\u0283u\u010fxcVbn\x7fUSf\x85B\xaf\xb3_Tz\xba\x97\xce\x95O\x81\xa9\xe7M\xd1~M\x88\xb3]\xb5^p\xfc\xb5\x94\x8a\xc4Y~y@X~\xa4Z\xb3\x80[\xc8\u014dl@\xae\xc5\xbc\xa3QK\x83\xb7Di\x8b\xa1By\x91\xff\x89Q_\xb4\x7fD\x81\xa5h\u0157y\x83^\x9f\u012d\xc1Z]cIz\xfd\x89ah\xb9M\u012a\u011fP\x91s{\xf2\x87\x8b\x91\xb2Vw\xb9t\xb3\u015c\xcb\x81[\x8e\xd1}X\\gsF\x9f\xa3sPAg\u011bp\xd7\xebfYH\u0101\u010f\xd6q\u0113\u016dO\xcf\xeb\x93dL\xfc\x95\\i\x8c\x94t^c\xae\x9aR\xca\xba\xb6\x97\xa2H\xb0m\x88\x91rY\x9f\xa3B\x9f\xb9\u010dIo\u013eu\xb6uI]v\u0123SQ{\x83U\u017b\x94\xc5}Q\xc2|\xcc\x8b\xb0\u0185\xa4\u0129\u016aU\xa0\u0119\u0104\x9e\xccZ\xd2\x9e\\v\x98\xb2P\u0114\xbb\u01a2NH\x83\u0102yAm\u0182wVm\x9e`\x94]\xc8\x8fb\x95\x94H`\x89\xcc\xa2\xb2ILv\u011c\x97H\xae\xa4Dlt_\x84\xa2JJ\xc4\xe4m\x90\xe8\xd4D\xeb\xfeg\xba\u01ab\x90\x99\x94a\u028e\xccr\xeaYi~\xa0\xce\u0130\xa4Np\xc0A\xbe\u0114\xbcb\x85\xf0\xf7\x92\x8e\x88\x87\xae\x82\x94\xfcs\x94zMz\xd6\u0116Qd\u0228\xfd\x86v\xa7T\xe8|\x9d\xaaH\x92\xc3\xbea\xb8|\x9a\xd0\xa0\u0192wK\u0122x\xa6ivr^\xff\xa0\xb8l\xa0\xf6\xe6f\u019f\u0134\xb7PJv}n\\h\xb9\xb6v\x86\xb7\xc0|\\\u0181\u011aN\xb4\u011c\x80\xe7\xe8\xc1z]\x90\u0121\xa4\xb2\xa8Q\xd2\u0168TIl\x87\xaa\u0165\xd8}\xbc\u02d7\u01a6v\xc4\xf9\xd8E\xc2\x8b\x92\xabF\xef\xcb\x9bIq\x94\u014d\x8cTv\u0101\xdc\u014f\x82\xed\xdb\xdf\x9c\xdbV\x97j\xb3\xe2wG\u0103\xc2\xedNO\x8a\x88\x8aP\xecyV\xb3\x7f\u0149\u0116\xfdZso\xa7H\xd1\x96\x8diY\x90w[\xdf\x86\\X\x7f\xa6\xa5c]\xd4\u01a9\xdc\xb7\xabj\x87\xd0qv\xc1\xa6m^\u010b\xb1R\x99\xa6\u038b\u0188\u0165\u011ag\xc0\xbbI\xef\u0128\u0297\u01ae\x8e\xb0\u019d\x98\u013b\xfe\xcdA\u0189\u017f\xb1t\xcdE\xd5\xde\u0101NU\xcd\x97\xa1\\\x81\u017f\u010d\xe5\xd2\u02bb\u0118m\xa0\u01ad\xcc\u0179\xf6\u02a5\x92\xebQ\xa4\xb5\xad\xc7c\u0195\xaaoI\xfd\x88\x89I\xc9\x90_mkl\xb3\u0103\x89\u0193\xa6j\x97\xa1Yz\x95\u0147i\x96}Ms\xdf\xf5\x96\u012b\u028b\xa0\x97}\x83\xc1Vm\x9f_[n}e\u0131\x90\xadU\u0125\xbc\x91\xaa\x95I{\xce\xa7D\xd3\x9c\u01bb\u0117oj\x91qYh\u0139T\xa9o\u016b\u0136\xa3]\u010fx\u0129\x8b\u01d1M\u011d\x89q`B\xb4\u0183\u02fa\u0427\x97\xe7~\x99\xb2\u0146j@\x94\xa5@\u0111\xb4\u03af}\u0125tP\u0144\xc7\xbeV\xacuf\xd3\x83\xc9C\x8bt\xd3\x7f\u033b\x89\x85\xb9\xa3G\xb3\x80]\u0196\u01be\u014e\u012a\u016a\u0118\u0316\xa8\u0288\u0122\u0182l\u0258\u06ea\xfc\xba\u0148U\xf0\u01dc\u0222\u01a2\u017c\u030c\u0226\u01fc\x82\u0124\u014a\u0272\u0116\xc2\xadKq\xb4\xef\xa6\x97\xba\u0112\u01f2\u0146\u027e\xaa\u01c0\xde\u0108\u0102D\x86\xbd\u0104\u010e\xcc\u0157\u011er\xf4\xf1n\x8e\x9cN\xbc\xe2\xbe\u0284\u013e\u0506|\u01c4\x8e\u05a6\u095b\u0217\u01c9\u0318\u032d\u027a\u0185\xeagV\u030d\u0286\u0120\xb7\xcc\u010av|\xfd\u0116\xd5W\u010a\u01ce\xde\xb4\xf5\xbcc\xd2\xd2B\u0122\u0362U\u011c\xf0\u0352s\xa8\x81\u0148\u0183L\u0109\xd5\xdd@\u025b\u01af\xf7\xbf\u013d\xad\x8d\u0139e\u020f\u0133\xebC\u021aD\u0172y\xea\xd7\u0156y\xf2\xaf\u013cc\xc2\xdfY\x85t\xc1\u01a4yA\xe3\u02feJ@\u01ddr\xfd\x8b\x89@\x8f\xa4\x85rz\xb8oP\xb9\u0250\xday\xe1\x90\x87H\x9f\u0100[Jw\x85cVe\u0234\xcf\x9c\xbb\xc8\x8e\u0116}\u0192\u0170\u0150\xe8\u022d\u01e2\u03cc\u0100\u01aa\xc8\u0176\xeb\u037e\xd1\u0306\u0224\u041c\u013e\u012eE\u0154\x8d\x97\u0139\u014a\u0169~\xcbU\u0103{\x9f\u013b\x9d\u01b9\u0241\u03cd\u0229\xfe\u013dv\u013d\u0193\xc9@\u0113\x84\u013d\u0272\xdf\u01d0\u01ab\u02be\u01d7\u0112p\xe4W\xd0xns\xc0^\u0186wW\xa9\xa6c\xc5\xa1\x81Ji\xa7v\x8f\xfaF\xb6\x8e\xa8c~c\xbc\u012b\x8ceX\x9d\u01da\x8b\\\u0111\xbeJ\x8ew\xc0\u010fks\xe3A\x8d\x8bf\xd5\xa6\x8dL}wa\x82o\x94Z\x92\x8bD\xbd\x86Ml\xab]e\xd2\xc5a\xc9\xb2\xe1o\x9d\xbdF\xf5\xdb]\u013b\xd2\xa1wYR\xa3\xa2rv\xd3\xaey\xaeLF\x8bLz\u0108\x84\xf4e]\x81gx}\x95|KK}xklL]c\xa6\xa3fRt\xedv\xa6\x86P\u0124oH{tK',
                        ],
                      ],
                      encodeOffsets: [[[108619, 36299]], [[108589, 36341]]],
                    },
                    properties: { cp: [103.823557, 36.058039], name: '\u7518\u8083', childNum: 2 },
                  },
                  {
                    id: '630000',
                    type: 'Feature',
                    geometry: {
                      type: 'MultiPolygon',
                      coordinates: [
                        ['@@InJm'],
                        [
                          '@@C\x83\xc6\xbdO\u0143\u0126s\u03b0~\u0112\xb3\xa6@@\x93\u0145i\x9a\xb1\xe8}\u0428\x98\u0184\u02f9A\xb3r_\u011e\x8a\u01d2N\u012a\x8c\u0110w\xa4^\u016c\u0135\xaap\u013aSZg\x92rpi\u01bc\u0118\xd4\x9b\xa8C|\xcd\x96J\x92\xa9\u0126\xbb\xaeV\u0132\x8f~f\\m\xa0`Un\x84\xc2\x98~\u028c\x9f\x95\u012c\xe0\xf6Nt\x95~\u0148jy\x96\xa2Zi\x98\u0194\xa5\u0104\x8ak\xb4nl\x8f`J\xca\x87\x8aJ\xfe\xa9pd\u0196\xae\xc8\xa3\xb6\xecR\u02a6\x91\u017a\xf5\u01ae\xcbn\x9f\u02bc\u0117\xe6\xd1\u0180\u010e[\x82\x98\xa2V\xce\u0102M\xd6\xdd\xceF\xb2s\u018a\u0180\xceB\u013c\xfd\u019e\x97\x8d\xaf\u0298\u01ad\xf0\u0127\xbcJh\xbf\u0166\u0119\u038c\u0187\x9a\xa5\xb2Q]\u010c\xa5nu\xc2\xcfri\x88\xb8\xac\u01aa\xdb^\xd3\xa6d\x80\xa5[W\xe0\x85x\\Z\x8f\x8ej\xd2\x95\xa8Gtp\xfeY\u014a\u0115\xb4\x80zUO\xeb\x87\x89P\x89\xeeM\u0104\xc1xH\xb4\xe1\x98i\xdcU\xe0\x9b\xee\xdc\u0150\x81\u0102\xdbSu\u014e\x8br\x93\x9cJ\xf0\xcc\xacE\x8c\x91F\xc1\xfa\xd7u\xc3\xcekr\x93\u0112{V}\u0130\xabO_\xcc\xcb\u012c\xa9\x8e\xd3\u0167SR\xd1\xb1\xa7\u0122\xa3^\x8f\xc2y\xe8\xe7\u011b\x7fM\xb3\u0182\u0119{[\xb8\xbfu\x85\xba\xb5[gt\xa3\xb8O\u01a4\u013f\xe9Y\x9f\xf5\xb7k\u0100\x9fq]juw\xa5D\u0129\u018d\x80\xf5\xc7P\xe9\xc4\xbdG\x91\x9e\xa9\xe3\x87\xa4G\x85u\u0227\xfeRc\xd5\u0115Ny\x93y\xfbt\x81\x93\x88\xad\x8d\x87\xf8\x91\x86\xef\xbba\xbd\u0113\xbfBMo\u012f\xa3\x9f\xcdj}\xe9Z\xcbqb\u028d\x9a\x93\u01ac\x8fh\xb9\xec\xff\xd3A\x8f\xe7\xe3nI\xc3\xa1I`\x83ks\xa3CG\xad\u011b\x98Uy\xd7Cy\x95\x85\x92\x9f@\x81\xb6\u02a1\xcaBn\u0101zG\x84\u01a1M\u0113\xbc\xb1O\xf7\xf5J\x8f\x9d\xcb\u011a\u0103V\x9f\u012a\u0169\u0186\xa3\x8c\xaf{\xcbL\xbd\xccz\u017c\x93\x84VR|\u0120TbuvJv\xb5h\u013b\u0116H\x94\x90A\xeb\xe1a\x85\xadO\xc7\xf0\x9d\xf1\u0119Nw\x87\x85\u0153\u013e\xb7L\x9bmI\xb1\xed\u0120\u0129P\xc9\xd7\xae\xffs\x97\x92cB\xb3\xb1JK\xdf\u010a\xab`\x85a\u0111\xbb\xb7\x8fQAmO\x92\x91V\u0163\xe9\xff\xa4\xb9SQt]]\xc7x\x80\xb1\xafA@\u0109\u0133\xa2\xd3\u013c\xa9\x90\x95\x83l\xb6\xc5\x8d\xdbr\x97\u0155sp\xe3Rk~\xa6\xaa]\u012e\xad\xb4\x93FR\x84\xe5d\xad\u010csCq\u0111\xe9Fn\xbf\xc5\u0183m\x92\xc9x{W\xa9\xba\u019d\xba\u012fk\xd5\u0182\u0191\xb8wW\u016b\xd0\xa9\xc8F\x9e\xa3\\t\xc8\xa5\xc4R\xc8\xfd\xccJ\xa0\x83lGr\x90^\xd7\xe4\xf9\x90y\xde\xb3fj\x94c\x86\x80\xa8\xa3\xc2Z|\u01d3M\u011d\x9a\xcf@\xeb\xdc\u0151R\x8b\x9b\u011d\x89\x8c\xf7\xa1{a\xef\u0237\x81P\x8f\x7fu\xb0\xcbX\xd9{\xa9Tm\u0120}Y\xb3\x92\xad\xdeI\u0148\xb5\xe7\xbd\xa9C\xa1\u012f\xf7\xafB\xbb|St\xbb\x9b]v\x83\u0173\x83s\xbb\x94}M\xd3\xa0\xff\u02aa\u019f\u01edA\xa1fs\x98\xbb\x8d\x9dPY\x8f\xbcc\xa1\xbb\xa6c\x84\u010b\xad\xa5\xa3~\x81ms\u0109P\x95\x96Si\x83^o\xa9A\x89\x8aec\x82\x99\x9dPe\x7f\u01f5\x8ekg\x82yUi\xbfh}aH\x81\x99\x9a\u0109^|\xe1\xb4\x9f\xa1\x81H\x9d\xd8\xfb\xc5\xab\u0109\xae]m\x9d\x80\xa1q\u0109\xb6\xb3\xc8y\xf4\u014dL\xc1st\x93\x8f\x8fB\x9f\xaewn\xb1\x9d\u0103\xa5HS\xf2\u0117\x9a\xa3\x98S\x92\xeb@\xd7\u0153\x9d\xca\u0103x\xc7N\xa9\x99\xa9T\xb1\xaa\xa3\u0132\xa1fb\xae\xdeb\x8f\x8e\x90b_\u0104\xa5xu\x8d\xa5B\x97\x9e{\u0142\u011d\xb3\xab`d\x98\u0190t\x97\xa4\u0165i\xf1\x9e\xcdUu\xba\xed`\xa3\x98^t\u0183\u0132c\x97\xb7\x7f\xdbLO\x8b\xbd\x8as\xe7\xa5Ts{\u0103\\_\xbb\x99k\xcf\x8a\xb1q\xa9\x90\u010di\x8d\xec\u0109|\xcdI\x83\xa5\u0107\xa5\x9b\x80]\xaa\xa7D{\x81\u015d\u0156\xc9R_s\xffc\xb3\u012a\u014d\x9b\u01bf\xce\x91\x9b\xa7p\x9b[\u0109\x86\x9bc\xafbKm\x9bR\xa5{\xb3\x84Z\x86e^\x8e\x8cwx\xb9d\u01bd\xc5\xbd\xf4\x8dIg\xa0\xa7M\u0115\xa0\u01b9\u0134\xbf\x97\u01e3\xdc\xcd\x83]\x8b\xdd\x96\x81]sn\xe5A{\x8be\x8c\u01ad`\u01fb\u014a\u013f\\\u0133\u016c\u0171\x94Y\xc2\xff\xacj\u0116q\x8e\xdfb\x8a\xb8\x95L\xab\xb8\xa9@\u011b\u0100\xa9\xea\xb6\xec\xc0EH|\xb4bR\u013e\x9e\x96\xd3\xb6r\xc0Q\xfe\x8bvl\xae\xd5\x82E\x98Tz\xdcdb\xa0\x98hw\xa4{LR\x84\x83d\x93c\x8bb\xaf\x8b\xd9Vg\x9c\x82\u019c\xdfz\xc3\xf4\xec\xae\x8d^j\x90U\x90\xe8X\xce\x96|U\xe4\xcc\xbbrK\x8e\\\x8c\xaaN\x91\xbcpZC\xfc\x86VY\x86\x86\xa4\u0243Ri^rP\u0147\x92T\xd6}|br\xb0q\u0148b\u011a\xb0\xaai\u01b6GQ\xbe\xb2\x84x\xa6P\x9cml\u015c\x91[\x81\u0124\xa1\u039es\u0126\x9f\xd4\xcf\xe2\\\xaa\xda\u0152U\\f\x85\xa2N\xb2\xa7x|\xa4\xa7\x84x\u0114sZP\xf2\u029b\xb2S\xd0qF`\xaa\x84V\x83\xde\u015c\u0136\u01a8VZ\x8c\xccL`\x88\xa2d\u0150Iqr\\\x90o\xe4\xf5\x96F\xce\xb7\xa4\xbb\u0176\xd7h\xb9]Cl\xd9\x80\\\xa6\u010f\xcc\u012f\xac\u0159tT\u04fa\u0199gQ\xc7\xd3H\u0163\u0112\x94\xb4\xc3bE\xc4lb\u0294C\x94|C\x88\u016e\x90\x88\x90k\x84\u01ae[\u02bc\xac\u0148\x9c\xb4K\u016e\xc8\u03b0\xcc\u012a\xb6\u01b6l\xf0\x94\u013cA\x86TUvdT\x8aG\x86\xba\u033c\x8a\xd4\x80\x8cs\xcaD\xd4\x84veOg',
                        ],
                      ],
                      encodeOffsets: [[[105308, 37219]], [[95370, 40081]]],
                    },
                    properties: { cp: [101.778916, 36.623178], name: '\u9752\u6d77', childNum: 2 },
                  },
                  {
                    id: '640000',
                    type: 'Feature',
                    geometry: {
                      type: 'MultiPolygon',
                      coordinates: [
                        [
                          '@@K\xeb\xc0\u0119\u011e\xabO\u0119\u023f\u0215\x9f\u0131]\u0149\xa1\xe5\u012f\xd5\xd4\xab\u01f4\xf5\u01aa\x99\u011aQ\xd0Zhv\xa0K\xb0\x9b\xf6q\xc0\xd1\x90S[\xc3\xd6H\u0196\u010d\x8f\xcb\x87nL]\xfbc\x85\xd9\xdf@\x82\x93\u011d\x91\xbe}w\xbb\xbb\x8bo\u0123F\xb9\x9c\xbb\x8fk\xcc\xcf\x7f\xb7{zP\x83\xa7B\xad\xa2\xedy\xc5t@\x83\x9d@\xe1\x9a]Yv_ss\u0123\xbci\xdf\x81\x94\u013bL\xbe\u0121sKD\xa3\xa1N_\x85\x93\x98X\x8d\xb8}B\x7f~Hai\x88\x99\x7f\xc5f{\xabx\xbbge_bs\x93KF\xaf\xa1Ix\x99mELc\xffZ\xa4\xad\u0122\x91\x83\xdd\x9csuBL\xf9\x95t\x86\x9d\x8cYd\x90\x88mVtNmtOPhRw~bd\x85\xbeq\xd0\\\xe2\xd9H\x81\\bImlNZ\x9f\x7f\xbblo\x83\x9fqlVm\x96G\u0101\xa7~QCw\xa4\x99{A\\\x8f\x91PK\x8f\x9fNY\x87\xafbF\x87kC\xa5\x92sk\x8b\x8as_\xc3\\\u0103\xab\xa2\u0127kJi\xafr\x9brAh\u0139\xfb\xe7\xa3CU\x87\u0115\u010a_\xd4\x97Bix\xc5\xd9\x8f\u0104n\xaa\xd1aM~\u0127p\x81Ou\xa5s\xeeeQ\xa5\xa4^dkKwlL~{L~\x96hw^\x82\xf3f\u0107\x83KyE\x8c\xadK\xadzu\xd4\xa1qQ\xa4xZ\xd1\xa2^\u013c\xf6\xdc\xbeEp\x9e\xb1\xe2b\xca\xd1\xc6^fk\xac\x85NC\xbe\x91\x8c\x93Y\x81pxbK~\xa5\x8ee\xd6\x8e\x8c\xe4Blt\xbf\u0110\x8dx\xbdI[\u0112\u01d9\x8cW\x9e\x8bf\xbb\u012c}d\xa7d\xb5\x8d\xf9Eu\x90j\xa8\x82I\xc6\xa2\xa5dX\xaa\u0185x\xbf]mt\xcfw\xdfR\u0136\x8cX\xa2\u034ev\xc6z\u0182Z\xf2\xae\u01e2\xcc\u0286Cr\xe2\xbaM\xdez\x9e\xc6M\xd2\x94\xca\xd3\u014aZ\xc4\xbe\x96r\xb0\x9d\xce\xae\u0208m\xaa\xb2\u0108U\xaa\u011a\xee\x81\x88\xf8\xba\x88\u012e\xa6\xcc\u0118k\x84^F\u0142\u012ch\u011ai\u0100\u0116\xbei\u0130bj\xd5',
                        ],
                        ['@@mfw\x7f\u011bwMr\u0162\xaav@G\x89'],
                      ],
                      encodeOffsets: [[[109366, 40242]], [[108600, 36303]]],
                    },
                    properties: { cp: [106.278179, 38.46637], name: '\u5b81\u590f', childNum: 2 },
                  },
                  {
                    id: '650000',
                    type: 'Feature',
                    geometry: {
                      type: 'Polygon',
                      coordinates: [
                        '@@Q\xd8\u0114\xb2X\xa8\x94~\u01d8B\xbaj\u0290\xdf\xd8vK\x94\u0194X\xa8v\u010aO\x9e\xc3\x83\xb7\xa2i@\x81~c\x97\x87\u011de_\xab\x94E\x9a\x93}Qxg\u026a\xeb\xcf\xc3@s\xc5yXo\u0156{\xf4\xab\u0178uX\x85\xea\x95\xcef`\x8d\x9cC\x82\x81\x7f\xb9\xc2\xff\xd0G\u012e\xd5\u011eX\u016a\u014d\u0178M\u017a\xc8\u01baQ\xe8\u013d\xf4e|\xbf\u01b8JR\xa4\u0118EjcU\xf3\xba\xaf\u0128_\u0158\xc1\x8fM\xaa\xf7\xd0\xa5O\xe9\xc8\x87\x8d\xbf\xd6\u011f\u01e4\u01f7\xc2F\xd2\x87z\xc9x[]\xad\u0124\u011d\x89\u0153\xa6EP}\xfb\u01a5\xe9\xbf\u0130\u01b7T\u0117\u01ab\u0153\u0155\u0185\x99\u01b1B\xbb\u0110\xb1\x92\u0113O\x85\xa6E\x96\x95}\x91`c\u023ar\u0126\xe1\u0156u\xd2\x9e\xaa\xab\u0132\x87\u03c0d\u01ba\xcf\xd8Z\u01b4w\u0284\xa4\u0116G\u0110\x99\u01c2Z\u0136\x83\xe8H\xb6}\xdaZ\u05e6\u02a5\u012a\xef|\xc7\u0126M\u0154\xbb\u0130\u011d\u01c8\x8b\xec\xa5\u0392\x9cba\xad\xaf\xa5\u01d5\u01dak\u0106\u0175\u0126\u0251\u013a\u01afx\u016b\u0414\u0335n\u01a1\u0283\u013d\xe1\xbdM\xbb\x8d\x9b\xf2mq\xf3\u0158\u011d\u010d\xcb\xbe\u0103C\x85\u0107\u0101\u01bf\xdd\u027d\xa9\u01f1\u0145\xb9\u0111\xa5\x98\xb3\xf0Lr\xc1\xae\u0271\u0115\u0123\u0149\u01fb\x81\u030b\u0225\u01a1\u017b\u01db\u0221V\xef\xb9\u0147\u06e9\xfbk\u0257\u0121\u0181\xa7\u0287\u0117\u0315\u0129\u0169\u01bd\u014d^\u0195\x8aUv\xa3\u0181Q\xef\x93\u01b5k\u014f\xbd\u0389\xc3\u016d\xc7\xb3L\u0147\x9b\u02bb\xab\u01ad\\l\x83\x87\x8f\u016d\x8fD\x87\x93{\u0293DkaF\xc3\xc4a\x93\xb3\u0164\u0111\xd4GR\xc8\u019ahS\u04f9\u015as\u0130\xab\u0110\xcb[\xa5\xda\x7fDk\xba^\xd8g\xbc\u0175\xb8\xa3E\xcd\xf6\x95\x80\u016f\u0149T\xa1c_\x87\xcbKY\x8b\u01a7U\u015b\u0135\x84\xdd\x83U_\xa9rET\xcf\u029c\xb1O\xf1tYw\u0113\xa8\x83{\xa3\xa8uM\xb3x\xbd\u015fL\xa9\xd9\xe1[\xd3\xd0\u0125\xa0\u039dt\u0123\xa2\\\x82\u015b\x92nkO\x9bw\xa5\xb1\x83T\xbb\u01b7F\u026f\xe0\u0129\xde\xe1B\xb9\xc6\x8d\x85\xd1Uw\x84\u0155\x8a\x8d\x9e\u013dw[\x93mG\xbd\xc8\xe5~\x87\xc6\xf7Qy\x8a\u011bCFm\u012dZ\u012b\x97\u0175V\xc1\x99\u01bfQ\u019b\x97\xfbXS\xb2\x89b\xbdK\xcf\xbd\u0109S\x9b\xa9\u0177X\u0115\x9f{\x8e\u0115K\xb7\xa5\u0197cqq\xa9f\xbf]\x87\x8d\xdfD\xf5\x8dU\xb3h\x97\xad\x81g\xcb\xc7\xef\u0123\xc9\u024bw\x93k\xaf\xed}I\xb7\x9a\u0153bm\x9c\xc9\x96\u0159\x9b\u012bJ\u0265\u013b\u02c1\xd7x\x81o\x9b\u0279\u012b\x87l\x95c\x85\xa4\xb3X\xf9]\x91\x99\u01c5A\xbfw\u0349\xec\xa5w\xc7N\xb7\xc2\xcbn\x8f\u01be\u018dd\xc7\xa7\u0111\xae\u019dv\x95Um\xa9\xb3G\\\x93}\xb5\u013f\x87Qy\u0179\x8fl\u0103\x93\x9b\xb5Ew\x89\u01c7Q\xbdy\u018bBe\xb6\u014b\xc0\u016f\x87o\x9e\xa5A\x97\x98\xc9w@\x95{Gpm\xbfA\u0133\x86\u017dKLh\x8d\x88\xb3`\xf1c\xcbtW\x82\xb1\xbb\xd5S\x89\xeb\xfc\xff\u010fD\x87u\\www\xf9\xb3\x97V\x9b\x8dL\u0155\x83OM\x8d\xcbGh\x81\xa3\xf5P\xa1\x99er\x8d\x99\xcfd{\x93\x87\u0121W\xc1\x85\u010d|\x7fy\u0161g\x9d^\u011fy\xc1z\xd9\x7fs`\x97s|\xc9\xe5\xaa\xc7}m\xa2\u0143\xa8`x\xa5\x92\xf9^\x95}\x83\xcc\xa5H\xab\x89Y\xaa\u0185\x94A\xd0\xb9n~\u017a\xaf\x9af\xa4\xe1\xc0z\x84g\x8a\xc7DI\xd4\x9d\xb4A\u0148\u0100\xd2\x84\xb6\xfbEYosp\xf5D[{\xf9\xb0]u\x9bJq\x8d\x95U\x95|So\u010bx\u0163[\xf5\xd4\u0125k\u014b\xde\u016dZ\xcb\xba\xf3Y\xcb\xfc\u010brw\xa0\x80\xdekr\u0165\xcb\xbfXG\x8f\xc9b\u0159aD\xfc\xb7\u0112\xf7A\xc3\xaa[\xc4\xe4\x80I\xc2\xaeB\xd5\u0110\x98\xde_\xa2\u0101\u0120p\x8a\xdb\xc4\u0209\u0116\u0121DK\x9dwb\x9dm\x87\xc4N\xf4\x87\x8af\x9c\u01abV\xc9vi\x86\u01f3\x97H\x91\x8bQ\xb5\xe2F\x9a\xf9\x7f\xad\xc2\u0153\xb3\x8d\xa6{YG\x9e\x83d\xa2\u011a\xdcO\xa0\x84\x80{\xd6\xa6\xde\xcd\xc0P\x8c^b\x96\u01be\x8al\x8e[\x84vt\xd7\u0108\xcdE\xcb\xa8\xa1\u0110~\xb4\xee\xb8\xf9\xceh\x80u\xe8`\xb8\x9fH\xd5\u0154V\xbaw\u0120\xe2\xe2W\xf2\x87@{\x9c\xd9N\xdd\xb4\u0259\xb2\u0215n{\xbf\xa5{l\x97\xf7e\xe9^e\x92\u010f\x88Xj\xa9\xee\\\xaa\xd1\xf2\x98\xdc\xecc\\\xfcq\x88\xd5[\x81\u010c\xa1xo\xc2\u010b\xaab\xd8\xad\x8c\xf8|\x80\xb6\u0234Zd\xc6\xc2\x9ao\u0144\xe9\x8cG\x9a\\\x94\xbc\x90C\xb0\xcc\xc6\x81n\xb4nx\x9a\xcaO\u0128\x92\u016a\x81\u01b4\u0138\xa2\xb8\xf2Tx\xca\u01eaM\u012b\u011e\x98\xd6\u0172\xc3\u024eOv\x88\u02a6\u01a2~F\x8e\x87R\u011b\xf2\x97\xbf\u0121~\xe5\u014a\x9c\xfa\x89N\x9a\x9e\x9a\xb8q\x8e\x92\u0118[\u0114\xb6\xc2\u0107n\x90\xd2P\u0112\xdcv\xfa\u0100\xcab\xd6{\xc4\xee\xb8~\u0154\xfcnp\xa4\xc2H\xbe\x9c\u0104Y\xd2\xa9\xcaf\xbam\xd4\x88\u0118cDo\u012cM\u016c\x92\x98S\xa4\x84s\xb2\x82\x94\u0298\xda\x86\u017e\u0202V\u0166\xa0\x96\x8e\xe8W\xb0\xaaB|\u0132X\u0154\xfe\xc8J\u0126\xc6\xe6F\u011a\xea\x8aY\u0102\xaa\u0102]\xf8\xaa\u0156N\xde\xfcA\x80\x92f\u0268J\x80\x98\xaf\xcerDD\x9a\u0124\x80`\x80mz\\\x84\xa7~D\xac{vJ\x90\xc2\x98\xabl\xb5\u0102b\x96\xa4p\x80\u014c\u0170N\u0104\xa8\u010aXW|\u0173\xa0\xbf\xbe\u0244\u0126\u0190MT\x94\x87\xf2P\x98\xf7f\xd8\u0136K\xa2\u021d\u02d4S\xf4\xb9\xf2E\xf0\xad\x94`\u0196\xbd\u01d2\xc2\u0148\xd7\xe4\u0131\x96\xa7\u0124\u019d\xa7C~\xa1\x82hl\xe5\x82\u01fa\u0166\u015ek\xe2\x92~}\x8eF\xf8\xe0\u0132a\u011e\x82f\x90\u01a0\xa5\x8e\x84\u0154d\x9e\x98\xaeU\xb8\x88\u017aX\x9cv\xa2a\u0186\xfa\u016at\u0160\u0173\u01a0jd\x95\u01ba\x8a\u01ba\xc5\xecnrh\\\u013a\xaf\xe4\u025d\u0126]\xe8p\u0104\xa6\xb4L\u019e\u012c\x8a\xb4\u01a4\u01ec\u02fc\u0112\u0278\xa4r\xba\u01fc\xb2\xa8z\xccP\xf0\u0140b\xfe\xb9\u013cD\xa2\xb9\x9c\\\u011c\xd1\u015a\x9f\xb6Z\u0184\xb3\xe0j\u0128o\xe2\x8a\u0234L\xca\x89\u022e\x8c\u0110\xad\u011a\u0103\x8e\xc0\xeaZ\u01da\u0150\xa4q\u0202\\L\xa2\u014c\u0130f\xc6s|z\xbae\xaa\xd9\xe6\xa7\u03a2{\u0100\xb4\u0190\xda\xac\xa8\u0134\xe0\xb2\u0142h\u02baK\xde\xba\xd6T\x8ai\u01a2\xbe\xaa\xec\xb0`\xf6\xf8u\xae\xca\xbe\xe3\xd8',
                      ],
                      encodeOffsets: [[88824, 50096]],
                    },
                    properties: { cp: [87.617733, 43.792818], name: '\u65b0\u7586', childNum: 1 },
                  },
                  {
                    id: '110000',
                    type: 'Feature',
                    geometry: {
                      type: 'Polygon',
                      coordinates: [
                        '@@\u013dO\xc1\x9b\xfbt\u0177mi\xcdt_H\xbb\u0128\xb1d`\x8a\xb9\xad{bw\x85Yr\x93\xb3S]\xa7\xa7o\xb9\x80qGtm_S\u0167\x80\x93oa\x9b\x8bFLg\x91QN_\x95dV\x9d\x80@Zom_\u0107\\\xdf\x9ac\xc2\xb1x\xafo\u0153Rcfe\x85\xa3\x92o\xa7\xcbgTo\xdbJ\xed\u0114\xf3u\x85|\x7fwP\xa4\x99Xn\x90O\xa2\xc9\x88\u0166\x90\xafrN\xc4\u0101\xa4z\xe2\u0156\xc8Rp\u0162Z\x8a\x9c\xda{G\x8arFt\xa6\xd2x\xa7\xf8\xb9R\xf3\xe4V\xa4\x9dXd\x88\u017c\xe2\xbaWbw\u015a\xa8Ud\xaeb\xea\u0146\xbe\x91jn\u014eG\u0143\u0176\x8anz\x8d\xdaSe\xee\u011cZ\x90cz\xee\xbei]\xcd\x9c\x99Qa\xfa\xcd\xd4i\xfe\u0129\u0228W\u0122\x8b\xfc|\u0116u[q\x8db[swP@\xc5\u011fP\xbf{\\\x87\xa5A\xa8\xcf\x91\xd1\xa8\x8dj\xaf\x8aX\\\xaf\x9cMK\x91pA\xb3[H\x85\u012bu}}',
                      ],
                      encodeOffsets: [[120023, 41045]],
                    },
                    properties: { cp: [116.405285, 39.904989], name: '\u5317\u4eac', childNum: 1 },
                  },
                  {
                    id: '120000',
                    type: 'Feature',
                    geometry: {
                      type: 'Polygon',
                      coordinates: [
                        '@@\u016cgX\xa7\xdc\xabE\x85\xb6F\xcc\x87\x7f\x93\xacO_\x99\xefl\xc1g\x93z\xb1AXe\x99\xb5\xc4\u0135{\x8f\xb6]gitg\x9aIj\xb7\x9b\xa5\xeeakS\x80\x89\xa8\xd0\u018ek}\u0115{gB\x97qGf{\xbfa\x86U^fI\x93\u01b0\x8b\x90\xb3\xf5{Y\x83\u0131\xebN\u013f\x9ek\xa9\xef\xcbZ\u014f\x91R\xa7\xf2oY\xd7\xd3gc\x85\u0125s\xa1b\u0121\xab@dek\u0105I[nlPqCnp{\x88\u014d\xb3\x9d\xb0`\x90{PNd\u0197qS\xc4\u013bNN\xe2yj]\xe4\x9e\xd2D\xa0\u012cH\xb0\xc6]~\xa1HO\xbe\x8cX}\xd0x\x8cgp\x93gW\x88rDG\x88\x8cp\xf9\x82\x8a^L\x82\x8f\x88rzWx\x88Z^\xa8\xb4T\\|~@I\x89z\x83\x96b\u0124\x8b\x9cje\u010a\xaaz\xa3\xae\u0114v\u011b\x80L\x86mV\xbe\xd4_\xc8\x94NW~zb\u012cvG\x86\xb2ZmDM~\x94~',
                      ],
                      encodeOffsets: [[120237, 41215]],
                    },
                    properties: { cp: [117.190182, 39.125596], name: '\u5929\u6d25', childNum: 1 },
                  },
                  {
                    id: '310000',
                    type: 'Feature',
                    geometry: {
                      type: 'MultiPolygon',
                      coordinates: [
                        ['@@\u0267\u01b0\xacEp\x81\u01b8\xc1x\x9dc\x87'],
                        ['@@\xa9\x84\xaa\x83'],
                        ['@@\x94MA\x8b\x91\x9a'],
                        ['@@Qp\u0130\x81E\xa7\xc9C\x8d\xbe'],
                        [
                          '@@b\u015d\xd5\x95\xd5E\u0223\xda\u01a5\xea\x8fIm\x81\u0247\u01e6\xe8\xdc\u0120\x8c\xda\x8f\x9e\xc3\u018c\xc3\u034e\xf3',
                        ],
                        [
                          '@@\u01dc\xfb\u022c\u024b\x8a\u016d\x99\xd7^\x89sY\x8f\x8c\u024dD\u014b\x91\u017d\u0105\xf1CG\xb2\xab\xaa\u010d@h\x96_p\xafA{\x87oloY\x80\xac\x7fj@\u0132\x8d`\x95gQ\xda\x9bhr|\u01c0^M\u0132vtbe\xb4R\xaf\xd4\xac\xa8Y\x8e\xf4\xa4r]\xec\x86\u01ac\u012f',
                        ],
                      ],
                      encodeOffsets: [
                        [[124702, 32062]],
                        [[124547, 32200]],
                        [[124808, 31991]],
                        [[124726, 32110]],
                        [[124903, 32376]],
                        [[124438, 32149]],
                      ],
                    },
                    properties: { cp: [121.472644, 31.231706], name: '\u4e0a\u6d77', childNum: 6 },
                  },
                  {
                    id: '500000',
                    type: 'Feature',
                    geometry: {
                      type: 'MultiPolygon',
                      coordinates: [
                        [
                          '@@vjG~nG\u0158\u016c\u0136\u0202\u0180\u01be\xb9\x90\x81\xb8\xd8\xceez\u0106T\xb8}\xea\xd0\x96qH\x9f\xf0q\u0116\xe4\x92\x8a\xa5^C\xc6\x92Ij\x96\xb2p\x85\\_\xa0\xe6\xfcY|\x9d[Yx\u018a\xe6u\x9e\xb0xb\xae\x85\x90\u0170b@~\xa2NQt\xb0\xb6\x82S\xe6\xa0\x93\xca~r\u01c9\u0114\xeb\u011a\xa2~\x9auf`\x91\x82\x86fa\x82\u0114J\xe5\u010a\x84n\xd6]\x84j\u018e\u0107\xca@\x8a\xa3\xbea\xae\xa3\u0170{\u0176\u0115F\x8b\xe8gLk{Y|\xa1\u011cW\u0194t\u01ac\x7fJ\xd1xq\x8b\xb1\u0122N\xb4\x89\xf2K\x89\x99\x96L\xc8\xc3\xbcD|s`\u014b\x92\u0107]\x83\xc3\x89`\u0111\x8cM\xfb\u01b1\xbd~Y\xb0\u0127`\u018f\xedW\x89\xbdeI\x8b\xbd{a\x9f\x91OIr\xcf\xa1\u0115\u0147a\x86p\x86\xb5\xdc\u0185\u0121\x91\x9c^\xd6\xdbb\xd9\x7f\u017d\u014fml\xbdS\x8b\xeaqDu[R\x8b\xe3\xcb\xbb\x86\xffw`\xbby\x91\xb8_\u013a\u0119}\xf7`M\xaf\u010bfCV\xb5q\u0149\xf7Z\x95gg\x93\x8c`d\xbdpDO\x87\xce\x81Cn\x9c^uf\xb2\xe8nh\xbcWt\u018fxRGg\xa6\x85pV\x7f\x84\x86FI\xb1\x8eG^\x8cIc\xb4ec\x87\x92G\x95\u0139\xde\xbds\xeb\u012c\x84h\x98xW\x82}K\xd3\x88e\x7f\xadXsbk\x94F\xa6\x9bL\x91\xd8gTk\xef\u01b5N\xef\xb6}Gy\x93w\\o\xf1\xa1nm\u0108zj\x9d\x9f\x95@\x99\xd3c\xa3\xbbW\u0103\xb9\xd3j\x93_m\xbb\x88\x8d\xb9\xb7~Mv\xdbaq\x9c\xbb\xad\x89\xea\x9c\x92\\\xc2oVn\x8e\xd3\xd8\xcd\x99\xb2\xab\x8d\x8bbq\xbfe\x81fE\xa0\x84\x80\x8b\u011c\x90^Q\x9e~\xa0\xc9v\xfd\x87\u015f\xa4\xb2\u012e\x89pE\u0130}zc\u013a\x83L\x8b\xbd\x87\x9a\xbfg\xc5\x86\x9b\xa1\xfdE\xa1ya\xa3\xb3t\\\xa8\x8f\\v\xfa\xbb\xbc\xa7\xb7\xd1r\x8f_o\xd2\xfd\xa5u\x82\x95_n\xbb_\x83\x95At\xa9\x7f\x81\xde\xc5\xb1\u0101\xa7IVe\xeb\x83Y}{VP\xc0\x81FA\xa8\u0105B}q@|Ou\x97\\Fm\x89QF\xdd\x85Mw\x98\xe5}]\x95\x80\x9d|Fm\xcf\x8bCa\x83w\x8cu_p\x97\xafsf\xd9gY\x85DHl\x81`{QEf\x8fNysB\x8a\xa6zG\xb8rHe\x82\x84N\x7f\\Cv\x7fEs\xd0\xf9\xdc_\xb7\xd6\u0109saQ\xaf\x80}_U\x87\x86x\xc3\u0111\x8aq\x9b\x81NH\xac\x95\xc4d^\xdd\u0170R\xac\xe3\xb0we\u0107JE\x9e\xb7v\xdd\xb7Hg\x83\x82\xe9FXj\xc9\xea`|y\x8cpxkAw\x9cW\u0110pb\xa5eOsmzwqCh\xf3UQl\xa5F^laf\x8ban\xf2sr\x9bEvfQd\xc1UVf\x97\xcev\xdc^ef\x88tET\xac\xf4A\\\x9c\xa2sJ\x8enQTjP\xd8\x88x\xf8K|nBz\x89\x84\x9c\u011e\xbbLY\x82\x85FDx\xd3\x84vr\x93[eh\u013e\x9a\x95vN\x94\xa2o\xbeNi\xc2xGp\xe2\xac\x90z\x9bbfZo~hGi\x92]\xf6F|\x89|Nb\x87tOMn\xa0eA\xb1\x8a\x9dtPT\x87LjpYQ|\x86SH\x86\x86Y\u0100xinzDJ\x80\xccg\xa2v\xe0\xa5Pg\x89_\x96\xc7zII\x8b\x80II\x95\x84\xa3\xaeS\xac\x84\xd8s\xce\xbc\x90\xa3\x8cN',
                        ],
                        ['@@ifjN@s'],
                      ],
                      encodeOffsets: [[[109628, 30765]], [[111725, 31320]]],
                    },
                    properties: { cp: [106.504962, 29.533155], name: '\u91cd\u5e86', childNum: 2 },
                  },
                  {
                    id: '810000',
                    type: 'Feature',
                    geometry: {
                      type: 'MultiPolygon',
                      coordinates: [
                        ['@@AlBk'],
                        ['@@m\x8en\x8d'],
                        ['@@EpFo'],
                        [
                          '@@ea\xa2pl\x8f\xb8E\xf5\xb9\x87hj[\x83]\xd4C\xce\x96@\x8flj\x98\xa1uBX\x9f\x85\x81\x95\xb4\x8bAI\xb9\x90\x85[\x8byDU\x88]W`\xe7wZkmc\x96\x85M\x9b\x9ep\x80\xc5v\x9b}I\x8boJl\x8dca\x83f\u0143\x91K\x8e\xb0\xe4\xacXJm\xd0\xa0\u0111hI\xae\xe6\xd4tSHn\x80E\x88\x84\xd2r\xc8c',
                        ],
                        ['@@rMUw\x87AS\xae\x80e'],
                      ],
                      encodeOffsets: [
                        [[117111, 23002]],
                        [[117072, 22876]],
                        [[117045, 22887]],
                        [[116975, 23082]],
                        [[116882, 22747]],
                      ],
                    },
                    properties: { cp: [114.173355, 22.320048], name: '\u9999\u6e2f', childNum: 5 },
                  },
                  {
                    id: '820000',
                    type: 'Feature',
                    geometry: {
                      type: 'Polygon',
                      coordinates: ['@@k\xcad\x90\xb0\xe5\xa7s'],
                      encodeOffsets: [[116279, 22639]],
                    },
                    properties: { cp: [113.54909, 22.198951], name: '\u6fb3\u95e8', childNum: 1 },
                  },
                ],
                UTF8Encoding: !0,
              })
            : a('ECharts Map is not loaded')
          : a('ECharts is not Loaded');
      });
    },
    'sd/E': function(e, t, a) {
      'use strict';
      var o = a('tAuX'),
        r = a('g09b');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var i = r(a('2Taf')),
        n = r(a('vZ4D')),
        l = r(a('l4Ni')),
        s = r(a('ujKo')),
        c = r(a('MhPg')),
        d = o(a('q1tI')),
        m = r(a('MT78')),
        f = r(a('xez2')),
        u = (function(e) {
          function t(e) {
            var a;
            return (
              (0, i.default)(this, t),
              (a = (0, l.default)(this, (0, s.default)(t).call(this, e))),
              (a.getEchartWidth = function() {
                (a.PieRef.current.style.width = a.PieRef.current.offsetWidth),
                  (a.PieRef.current.style.height = a.PieRef.current.offsetHeight),
                  (a.LineRef.current.style.width = a.LineRef.current.offsetWidth),
                  (a.LineRef.current.style.height = a.LineRef.current.offsetHeight),
                  (a.RectRef.current.style.width = a.RectRef.current.offsetWidth),
                  (a.RectRef.current.style.height = a.RectRef.current.offsetHeight),
                  a.resized(),
                  a.resizedLine(),
                  a.resizedRect();
              }),
              (a.resized = function() {
                var e = a.state.myEchart;
                e.resize();
              }),
              (a.resizedLine = function() {
                var e = a.state.myEchartLine;
                e.resize();
              }),
              (a.resizedRect = function() {
                var e = a.state.myEchartRect;
                e.resize();
              }),
              (a.state = { myEchart: null, myEchartLine: null, myEchartRect: null }),
              (a.PieRef = d.createRef()),
              (a.LineRef = d.createRef()),
              (a.RectRef = d.createRef()),
              a
            );
          }
          return (
            (0, c.default)(t, e),
            (0, n.default)(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  var e = m.default.init(document.getElementById('pieCharts'), f.default),
                    t = {
                      title: {
                        text: '\u67d0\u7ad9\u70b9\u7528\u6237\u8bbf\u95ee\u6765\u6e90',
                        textStyle: { fontSize: (this.PieRef.current.offsetWidth / 1082) * 28 },
                      },
                      tooltip: { trigger: 'item', formatter: '{a} <br/>{b} : {c} ({d}%)' },
                      legend: {
                        data: [
                          '\u76f4\u63a5\u8bbf\u95ee',
                          '\u90ae\u4ef6\u8425\u9500',
                          '\u8054\u76df\u5e7f\u544a',
                          '\u89c6\u9891\u5e7f\u544a',
                          '\u641c\u7d22\u5f15\u64ce',
                        ],
                        padding: [30, 100],
                        textStyle: { fontSize: (this.PieRef.current.offsetWidth / 1082) * 16 },
                      },
                      series: [
                        {
                          name: '\u8bbf\u95ee\u6765\u6e90',
                          type: 'pie',
                          radius: '55%',
                          center: ['50%', '60%'],
                          data: [
                            { value: 335, name: '\u76f4\u63a5\u8bbf\u95ee' },
                            { value: 310, name: '\u90ae\u4ef6\u8425\u9500' },
                            { value: 234, name: '\u8054\u76df\u5e7f\u544a' },
                            { value: 135, name: '\u89c6\u9891\u5e7f\u544a' },
                            { value: 1548, name: '\u641c\u7d22\u5f15\u64ce' },
                          ],
                          emphasis: {
                            itemStyle: {
                              shadowBlur: 10,
                              shadowOffsetX: 0,
                              shadowColor: 'rgba(0, 0, 0, 0.5)',
                            },
                          },
                        },
                      ],
                    };
                  this.setState({ myEchart: e }), e.setOption(t);
                  var a = m.default.init(document.getElementById('LineCharts'), f.default),
                    o = {
                      title: {
                        text: '\u5806\u53e0\u533a\u57df\u56fe',
                        textStyle: { fontSize: (this.PieRef.current.offsetWidth / 1082) * 28 },
                      },
                      tooltip: {
                        trigger: 'axis',
                        axisPointer: { type: 'cross', label: { backgroundColor: '#6a7985' } },
                      },
                      legend: {
                        data: [
                          '\u90ae\u4ef6\u8425\u9500',
                          '\u8054\u76df\u5e7f\u544a',
                          '\u89c6\u9891\u5e7f\u544a',
                          '\u76f4\u63a5\u8bbf\u95ee',
                          '\u641c\u7d22\u5f15\u64ce',
                        ],
                        padding: [30, 100],
                        textStyle: { fontSize: (this.PieRef.current.offsetWidth / 1082) * 16 },
                      },
                      grid: { left: '3%', right: '4%', bottom: '3%', containLabel: !0 },
                      xAxis: [
                        {
                          type: 'category',
                          boundaryGap: !1,
                          data: [
                            '\u5468\u4e00',
                            '\u5468\u4e8c',
                            '\u5468\u4e09',
                            '\u5468\u56db',
                            '\u5468\u4e94',
                            '\u5468\u516d',
                            '\u5468\u65e5',
                          ],
                        },
                      ],
                      yAxis: [{ type: 'value' }],
                      series: [
                        {
                          name: '\u90ae\u4ef6\u8425\u9500',
                          type: 'line',
                          stack: '\u603b\u91cf',
                          areaStyle: {},
                          data: [120, 132, 101, 134, 90, 230, 210],
                        },
                        {
                          name: '\u8054\u76df\u5e7f\u544a',
                          type: 'line',
                          stack: '\u603b\u91cf',
                          areaStyle: {},
                          data: [220, 182, 191, 234, 290, 330, 310],
                        },
                        {
                          name: '\u89c6\u9891\u5e7f\u544a',
                          type: 'line',
                          stack: '\u603b\u91cf',
                          areaStyle: {},
                          data: [150, 232, 201, 154, 190, 330, 410],
                        },
                        {
                          name: '\u76f4\u63a5\u8bbf\u95ee',
                          type: 'line',
                          stack: '\u603b\u91cf',
                          areaStyle: {},
                          data: [320, 332, 301, 334, 390, 330, 320],
                        },
                        {
                          name: '\u641c\u7d22\u5f15\u64ce',
                          type: 'line',
                          stack: '\u603b\u91cf',
                          label: { normal: { show: !0, position: 'top' } },
                          areaStyle: {},
                          data: [820, 932, 901, 934, 1290, 1330, 1320],
                        },
                      ],
                    };
                  this.setState({ myEchartLine: a }), a.setOption(o);
                  for (
                    var r = m.default.init(document.getElementById('RectCharts'), f.default),
                      i = [],
                      n = [],
                      l = [],
                      s = 0;
                    s < 30;
                    s++
                  )
                    i.push('\u7c7b\u76ee'.concat(s)),
                      n.push(5 * (Math.sin(s / 5) * (s / 5 - 10) + s / 6)),
                      l.push(5 * (Math.cos(s / 5) * (s / 5 - 10) + s / 6));
                  var c = {
                    title: {
                      text: '\u67f1\u72b6\u56fe\u52a8\u753b\u5ef6\u8fdf',
                      textStyle: { fontSize: (this.PieRef.current.offsetWidth / 1082) * 28 },
                    },
                    legend: {
                      data: ['bar', 'bar2'],
                      padding: [30, 100],
                      textStyle: { fontSize: (this.PieRef.current.offsetWidth / 1082) * 16 },
                    },
                    toolbox: {
                      feature: {
                        magicType: { type: ['stack', 'tiled'] },
                        dataView: {},
                        saveAsImage: { pixelRatio: 2 },
                      },
                    },
                    tooltip: {},
                    xAxis: { data: i, splitLine: { show: !1 } },
                    yAxis: {},
                    series: [
                      {
                        name: 'bar',
                        type: 'bar',
                        barWidth: '10px',
                        itemStyle: {
                          normal: {
                            color: new m.default.graphic.LinearGradient(
                              0,
                              0,
                              0,
                              1,
                              [
                                { offset: 0, color: '#41E1D4' },
                                { offset: 1, color: '#10A7DB' },
                              ],
                              !1,
                            ),
                            barBorderRadius: [30, 30, 10, 10],
                            shadowColor: 'rgba(0,255,225,1)',
                            shadowBlur: 4,
                          },
                        },
                        data: n,
                        animationDelay: function(e) {
                          return 10 * e;
                        },
                      },
                      {
                        name: 'bar2',
                        type: 'bar',
                        barWidth: '10px',
                        itemStyle: {
                          normal: {
                            color: new m.default.graphic.LinearGradient(
                              0,
                              0,
                              0,
                              1,
                              [
                                { offset: 0, color: '#fc97af' },
                                { offset: 1, color: '#f7f494' },
                              ],
                              !1,
                            ),
                            barBorderRadius: [30, 30, 0, 0],
                            shadowColor: 'rgba(0,255,225,1)',
                            shadowBlur: 4,
                          },
                        },
                        data: l,
                        animationDelay: function(e) {
                          return 10 * e + 100;
                        },
                      },
                    ],
                    animationEasing: 'elasticOut',
                    animationDelayUpdate: function(e) {
                      return 5 * e;
                    },
                  };
                  this.setState({ myEchartRect: r }), r.setOption(c);
                },
              },
              {
                key: 'componentDidUpdate',
                value: function() {
                  var e = this;
                  setTimeout(function() {
                    e.getEchartWidth();
                  }, 200);
                },
              },
              {
                key: 'render',
                value: function() {
                  return d.createElement(
                    d.Fragment,
                    null,
                    d.createElement('div', {
                      id: 'pieCharts',
                      ref: this.PieRef,
                      className: 'common_Echarts',
                      style: { height: 400, marginBottom: 20 },
                    }),
                    d.createElement('div', {
                      id: 'LineCharts',
                      ref: this.LineRef,
                      className: 'common_Echarts',
                      style: { height: 400, marginBottom: 20 },
                    }),
                    d.createElement('div', {
                      id: 'RectCharts',
                      ref: this.RectRef,
                      className: 'common_Echarts',
                      style: { height: 400, marginBottom: 20 },
                    }),
                  );
                },
              },
            ]),
            t
          );
        })(d.Component),
        h = u;
      t.default = h;
    },
    xez2: function(e) {
      e.exports = JSON.parse(
        '{"color":["#fc97af","#87f7cf","#f7f494","#72ccff","#f7c5a0","#d4a4eb","#d2f5a6","#76f2f2"],"backgroundColor":"rgba(64,64,64,0.5)","textStyle":{},"title":{"textStyle":{"color":"#ffffff"},"subtextStyle":{"color":"#dddddd"}},"line":{"itemStyle":{"normal":{"borderWidth":"4"}},"lineStyle":{"normal":{"width":"3"}},"symbolSize":"0","symbol":"circle","smooth":true},"radar":{"itemStyle":{"normal":{"borderWidth":"4"}},"lineStyle":{"normal":{"width":"3"}},"symbolSize":"0","symbol":"circle","smooth":true},"bar":{"itemStyle":{"normal":{"barBorderWidth":0,"barBorderColor":"#ccc"},"emphasis":{"barBorderWidth":0,"barBorderColor":"#ccc"}}},"pie":{"itemStyle":{"normal":{"borderWidth":0,"borderColor":"#ccc"},"emphasis":{"borderWidth":0,"borderColor":"#ccc"}}},"scatter":{"itemStyle":{"normal":{"borderWidth":0,"borderColor":"#ccc"},"emphasis":{"borderWidth":0,"borderColor":"#ccc"}}},"boxplot":{"itemStyle":{"normal":{"borderWidth":0,"borderColor":"#ccc"},"emphasis":{"borderWidth":0,"borderColor":"#ccc"}}},"parallel":{"itemStyle":{"normal":{"borderWidth":0,"borderColor":"#ccc"},"emphasis":{"borderWidth":0,"borderColor":"#ccc"}}},"sankey":{"itemStyle":{"normal":{"borderWidth":0,"borderColor":"#ccc"},"emphasis":{"borderWidth":0,"borderColor":"#ccc"}}},"funnel":{"itemStyle":{"normal":{"borderWidth":0,"borderColor":"#ccc"},"emphasis":{"borderWidth":0,"borderColor":"#ccc"}}},"gauge":{"itemStyle":{"normal":{"borderWidth":0,"borderColor":"#ccc"},"emphasis":{"borderWidth":0,"borderColor":"#ccc"}}},"candlestick":{"itemStyle":{"normal":{"color":"#fc97af","color0":"transparent","borderColor":"#fc97af","borderColor0":"#87f7cf","borderWidth":"2"}}},"graph":{"itemStyle":{"normal":{"borderWidth":0,"borderColor":"#ccc"}},"lineStyle":{"normal":{"width":"1","color":"#ffffff"}},"symbolSize":"0","symbol":"circle","smooth":true,"color":["#fc97af","#87f7cf","#f7f494","#72ccff","#f7c5a0","#d4a4eb","#d2f5a6","#76f2f2"],"label":{"normal":{"textStyle":{"color":"#293441"}}}},"map":{"itemStyle":{"normal":{"areaColor":"#f3f3f3","borderColor":"#999999","borderWidth":0.5},"emphasis":{"areaColor":"rgba(255,178,72,1)","borderColor":"#eb8146","borderWidth":1}},"label":{"normal":{"textStyle":{"color":"#893448"}},"emphasis":{"textStyle":{"color":"rgb(137,52,72)"}}}},"geo":{"itemStyle":{"normal":{"areaColor":"#f3f3f3","borderColor":"#999999","borderWidth":0.5},"emphasis":{"areaColor":"rgba(255,178,72,1)","borderColor":"#eb8146","borderWidth":1}},"label":{"normal":{"textStyle":{"color":"#893448"}},"emphasis":{"textStyle":{"color":"rgb(137,52,72)"}}}},"categoryAxis":{"axisLine":{"show":true,"lineStyle":{"color":"#666666"}},"axisTick":{"show":false,"lineStyle":{"color":"#333"}},"axisLabel":{"show":true,"textStyle":{"color":"#aaaaaa"}},"splitLine":{"show":false,"lineStyle":{"color":["#e6e6e6"]}},"splitArea":{"show":false,"areaStyle":{"color":["rgba(250,250,250,0.05)","rgba(200,200,200,0.02)"]}}},"valueAxis":{"axisLine":{"show":true,"lineStyle":{"color":"#666666"}},"axisTick":{"show":false,"lineStyle":{"color":"#333"}},"axisLabel":{"show":true,"textStyle":{"color":"#aaaaaa"}},"splitLine":{"show":false,"lineStyle":{"color":["#e6e6e6"]}},"splitArea":{"show":false,"areaStyle":{"color":["rgba(250,250,250,0.05)","rgba(200,200,200,0.02)"]}}},"logAxis":{"axisLine":{"show":true,"lineStyle":{"color":"#666666"}},"axisTick":{"show":false,"lineStyle":{"color":"#333"}},"axisLabel":{"show":true,"textStyle":{"color":"#aaaaaa"}},"splitLine":{"show":false,"lineStyle":{"color":["#e6e6e6"]}},"splitArea":{"show":false,"areaStyle":{"color":["rgba(250,250,250,0.05)","rgba(200,200,200,0.02)"]}}},"timeAxis":{"axisLine":{"show":true,"lineStyle":{"color":"#666666"}},"axisTick":{"show":false,"lineStyle":{"color":"#333"}},"axisLabel":{"show":true,"textStyle":{"color":"#aaaaaa"}},"splitLine":{"show":false,"lineStyle":{"color":["#e6e6e6"]}},"splitArea":{"show":false,"areaStyle":{"color":["rgba(250,250,250,0.05)","rgba(200,200,200,0.02)"]}}},"toolbox":{"iconStyle":{"normal":{"borderColor":"#999999"},"emphasis":{"borderColor":"#666666"}}},"legend":{"textStyle":{"color":"#999999"}},"tooltip":{"axisPointer":{"lineStyle":{"color":"#cccccc","width":1},"crossStyle":{"color":"#cccccc","width":1}}},"timeline":{"lineStyle":{"color":"#87f7cf","width":1},"itemStyle":{"normal":{"color":"#87f7cf","borderWidth":1},"emphasis":{"color":"#f7f494"}},"controlStyle":{"normal":{"color":"#87f7cf","borderColor":"#87f7cf","borderWidth":0.5},"emphasis":{"color":"#87f7cf","borderColor":"#87f7cf","borderWidth":0.5}},"checkpointStyle":{"color":"#fc97af","borderColor":"rgba(252,151,175,0.3)"},"label":{"normal":{"textStyle":{"color":"#87f7cf"}},"emphasis":{"textStyle":{"color":"#87f7cf"}}}},"visualMap":{"color":["#fc97af","#87f7cf"]},"dataZoom":{"backgroundColor":"rgba(255,255,255,0)","dataBackgroundColor":"rgba(114,204,255,1)","fillerColor":"rgba(114,204,255,0.2)","handleColor":"#72ccff","handleSize":"100%","textStyle":{"color":"#333333"}},"markPoint":{"label":{"normal":{"textStyle":{"color":"#293441"}},"emphasis":{"textStyle":{"color":"#293441"}}}}}',
      );
    },
    zs9p: function(e, t, a) {
      'use strict';
      var o = a('tAuX'),
        r = a('g09b');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('14J3');
      var i = r(a('BMrR'));
      a('jCWc');
      var n = r(a('kPKH')),
        l = r(a('2Taf')),
        s = r(a('vZ4D')),
        c = r(a('l4Ni')),
        d = r(a('ujKo')),
        m = r(a('MhPg')),
        f = o(a('q1tI')),
        u = r(a('MT78')),
        h = r(a('92lj')),
        p = r(a('sd/E'));
      a('T7cl');
      var y = (function(e) {
          function t(e) {
            var a;
            return (
              (0, l.default)(this, t),
              (a = (0, c.default)(this, (0, d.default)(t).call(this, e))),
              (a.getEchartWidth = function() {
                (a.LineRef.current.style.width = a.LineRef.current.offsetWidth),
                  (a.LineRef.current.style.height = a.LineRef.current.offsetHeight),
                  a.resized();
              }),
              (a.randomData = function() {
                return Math.round(1e3 * Math.random());
              }),
              (a.resized = function() {
                var e = a.state.myEchart;
                e.resize();
              }),
              (a.state = { myEchart: null }),
              (a.LineRef = f.createRef()),
              a
            );
          }
          return (
            (0, m.default)(t, e),
            (0, s.default)(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  var e = u.default.init(document.getElementById('getMapEl')),
                    t = {
                      title: {
                        text: 'iphone\u9500\u91cf',
                        subtext: '\u7eaf\u5c5e\u865a\u6784',
                        textStyle: {
                          color: '#fff',
                          fontSize: (this.LineRef.current.offsetWidth / 1082) * 28,
                        },
                        subtextStyle: {
                          color: '#fff',
                          fontSize: (this.LineRef.current.offsetWidth / 1082) * 20,
                        },
                      },
                      tooltip: { trigger: 'item' },
                      legend: {
                        data: ['iphone3', 'iphone4', 'iphone5'],
                        padding: [30, 100],
                        textStyle: { color: '#fff' },
                      },
                      visualMap: {
                        min: 0,
                        max: 2500,
                        left: 'left',
                        top: 'bottom',
                        text: ['\u9ad8', '\u4f4e'],
                        calculable: !0,
                        textStyle: { color: '#fff' },
                        inRange: {
                          color: [
                            '#fc97af',
                            '#87f7cf',
                            '#f7f494',
                            '#72ccff',
                            '#f7c5a0',
                            '#d4a4eb',
                            '#d2f5a6',
                            '#76f2f2',
                          ],
                        },
                      },
                      series: [
                        {
                          name: 'iphone3',
                          type: 'map',
                          mapType: 'china',
                          roam: !1,
                          label: {
                            normal: {
                              show: !0,
                              color: '#00f',
                              fontSize: (this.LineRef.current.offsetWidth / 1082) * 12,
                            },
                            emphasis: { show: !0 },
                          },
                          data: [
                            { name: '\u5317\u4eac', value: this.randomData() },
                            { name: '\u5929\u6d25', value: this.randomData() },
                            { name: '\u4e0a\u6d77', value: this.randomData() },
                            { name: '\u91cd\u5e86', value: this.randomData() },
                            { name: '\u6cb3\u5317', value: this.randomData() },
                            { name: '\u6cb3\u5357', value: this.randomData() },
                            { name: '\u4e91\u5357', value: this.randomData() },
                            { name: '\u8fbd\u5b81', value: this.randomData() },
                            { name: '\u9ed1\u9f99\u6c5f', value: this.randomData() },
                            { name: '\u6e56\u5357', value: this.randomData() },
                            { name: '\u5b89\u5fbd', value: this.randomData() },
                            { name: '\u5c71\u4e1c', value: this.randomData() },
                            { name: '\u65b0\u7586', value: this.randomData() },
                            { name: '\u6c5f\u82cf', value: this.randomData() },
                            { name: '\u6d59\u6c5f', value: this.randomData() },
                            { name: '\u6c5f\u897f', value: this.randomData() },
                            { name: '\u6e56\u5317', value: this.randomData() },
                            { name: '\u5e7f\u897f', value: this.randomData() },
                            { name: '\u7518\u8083', value: this.randomData() },
                            { name: '\u5c71\u897f', value: this.randomData() },
                            { name: '\u5185\u8499\u53e4', value: this.randomData() },
                            { name: '\u9655\u897f', value: this.randomData() },
                            { name: '\u5409\u6797', value: this.randomData() },
                            { name: '\u798f\u5efa', value: this.randomData() },
                            { name: '\u8d35\u5dde', value: this.randomData() },
                            { name: '\u5e7f\u4e1c', value: this.randomData() },
                            { name: '\u9752\u6d77', value: this.randomData() },
                            { name: '\u897f\u85cf', value: this.randomData() },
                            { name: '\u56db\u5ddd', value: this.randomData() },
                            { name: '\u5b81\u590f', value: this.randomData() },
                            { name: '\u6d77\u5357', value: this.randomData() },
                            { name: '\u53f0\u6e7e', value: this.randomData() },
                            { name: '\u9999\u6e2f', value: this.randomData() },
                            { name: '\u6fb3\u95e8', value: this.randomData() },
                          ],
                        },
                        {
                          name: 'iphone4',
                          type: 'map',
                          mapType: 'china',
                          label: {
                            normal: { show: !0 },
                            emphasis: { show: !0 },
                            fontSize: (this.LineRef.current.offsetWidth / 1082) * 20,
                          },
                          data: [
                            { name: '\u5317\u4eac', value: this.randomData() },
                            { name: '\u5929\u6d25', value: this.randomData() },
                            { name: '\u4e0a\u6d77', value: this.randomData() },
                            { name: '\u91cd\u5e86', value: this.randomData() },
                            { name: '\u6cb3\u5317', value: this.randomData() },
                            { name: '\u5b89\u5fbd', value: this.randomData() },
                            { name: '\u65b0\u7586', value: this.randomData() },
                            { name: '\u6d59\u6c5f', value: this.randomData() },
                            { name: '\u6c5f\u897f', value: this.randomData() },
                            { name: '\u5c71\u897f', value: this.randomData() },
                            { name: '\u5185\u8499\u53e4', value: this.randomData() },
                            { name: '\u5409\u6797', value: this.randomData() },
                            { name: '\u798f\u5efa', value: this.randomData() },
                            { name: '\u5e7f\u4e1c', value: this.randomData() },
                            { name: '\u897f\u85cf', value: this.randomData() },
                            { name: '\u56db\u5ddd', value: this.randomData() },
                            { name: '\u5b81\u590f', value: this.randomData() },
                            { name: '\u9999\u6e2f', value: this.randomData() },
                            { name: '\u6fb3\u95e8', value: this.randomData() },
                          ],
                        },
                        {
                          name: 'iphone5',
                          type: 'map',
                          mapType: 'china',
                          label: { emphasis: { show: !0 }, color: '#fff' },
                          data: [
                            { name: '\u5317\u4eac', value: this.randomData() },
                            { name: '\u5929\u6d25', value: this.randomData() },
                            { name: '\u4e0a\u6d77', value: this.randomData() },
                            { name: '\u5e7f\u4e1c', value: this.randomData() },
                            { name: '\u53f0\u6e7e', value: this.randomData() },
                            { name: '\u9999\u6e2f', value: this.randomData() },
                            { name: '\u6fb3\u95e8', value: this.randomData() },
                          ],
                        },
                      ],
                    };
                  this.setState({ myEchart: e }), e.setOption(t);
                },
              },
              {
                key: 'componentDidUpdate',
                value: function() {
                  var e = this;
                  setTimeout(function() {
                    e.getEchartWidth();
                  }, 200);
                },
              },
              {
                key: 'render',
                value: function() {
                  return f.createElement(
                    f.Fragment,
                    null,
                    f.createElement(
                      i.default,
                      { className: 'style_layouts' },
                      f.createElement(
                        n.default,
                        { xs: 24, sm: 24, md: 6, lg: 6, xl: 7 },
                        f.createElement(h.default, null),
                      ),
                      f.createElement(
                        n.default,
                        { xs: 24, sm: 24, md: 12, lg: 12, xl: 10 },
                        f.createElement('div', {
                          id: 'getMapEl',
                          ref: this.LineRef,
                          style: { height: 900 },
                        }),
                      ),
                      f.createElement(
                        n.default,
                        { xs: 24, sm: 24, md: 24, lg: 24, xl: 7 },
                        f.createElement(p.default, null),
                      ),
                    ),
                  );
                },
              },
            ]),
            t
          );
        })(f.Component),
        g = y;
      t.default = g;
    },
  },
]);
