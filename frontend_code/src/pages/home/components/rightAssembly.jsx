import * as React from 'react';
import Echarts from 'echarts';
// import { getMapEcharts } from './components/comm.js'
import halloween from '@/assets/utils/halloween.json';

class CapitalBudget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myEchart: null,
      myEchartLine: null,
      myEchartRect: null,
    };
    this.PieRef = React.createRef();
    this.LineRef = React.createRef();
    this.RectRef = React.createRef();
  }

  componentDidMount() {
    const myEchart = Echarts.init(document.getElementById('pieCharts'), halloween);
    const option = {
      title: {
        text: '某站点用户访问来源',
        textStyle: {
          fontSize: (this.PieRef.current.offsetWidth / 1082) * 28,
        },
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
      },
      legend: {
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
        padding: [30, 100],
        textStyle: {
          fontSize: (this.PieRef.current.offsetWidth / 1082) * 16,
        },
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],
          data: [
            { value: 335, name: '直接访问' },
            { value: 310, name: '邮件营销' },
            { value: 234, name: '联盟广告' },
            { value: 135, name: '视频广告' },
            { value: 1548, name: '搜索引擎' },
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
    this.setState({
      myEchart,
    });
    myEchart.setOption(option);
    const myEchartLine = Echarts.init(document.getElementById('LineCharts'), halloween);
    const LineOption = {
      title: {
        text: '堆叠区域图',
        textStyle: {
          fontSize: (this.PieRef.current.offsetWidth / 1082) * 28,
        },
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985',
          },
        },
      },
      legend: {
        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
        padding: [30, 100],
        textStyle: {
          fontSize: (this.PieRef.current.offsetWidth / 1082) * 16,
        },
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        },
      ],
      yAxis: [
        {
          type: 'value',
        },
      ],
      series: [
        {
          name: '邮件营销',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
          name: '联盟广告',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          data: [220, 182, 191, 234, 290, 330, 310],
        },
        {
          name: '视频广告',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          data: [150, 232, 201, 154, 190, 330, 410],
        },
        {
          name: '直接访问',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          data: [320, 332, 301, 334, 390, 330, 320],
        },
        {
          name: '搜索引擎',
          type: 'line',
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'top',
            },
          },
          areaStyle: {},
          data: [820, 932, 901, 934, 1290, 1330, 1320],
        },
      ],
    };
    this.setState({
      myEchartLine,
    });
    myEchartLine.setOption(LineOption);
    const myEchartRect = Echarts.init(document.getElementById('RectCharts'), halloween);
    const xAxisData = [];
    const data1 = [];
    const data2 = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 30; i++) {
      xAxisData.push(`类目${i}`);
      data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
      data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
    }

    const RectOption = {
      title: {
        text: '柱状图动画延迟',
        textStyle: {
          fontSize: (this.PieRef.current.offsetWidth / 1082) * 28,
        },
      },
      legend: {
        data: ['bar', 'bar2'],
        padding: [30, 100],
        textStyle: {
          fontSize: (this.PieRef.current.offsetWidth / 1082) * 16,
        },
      },
      toolbox: {
        // y: 'bottom',
        feature: {
          magicType: {
            type: ['stack', 'tiled'],
          },
          dataView: {},
          saveAsImage: {
            pixelRatio: 2,
          },
        },
      },
      tooltip: {},
      xAxis: {
        data: xAxisData,
        splitLine: {
          show: false,
        },
      },
      yAxis: {},
      series: [
        {
          name: 'bar',
          type: 'bar',
          barWidth: '10px',
          itemStyle: {
            normal: {
              color: new Echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: '#41E1D4', // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#10A7DB', // 100% 处的颜色
                  },
                ],
                false,
              ),
              barBorderRadius: [30, 30, 10, 10],
              shadowColor: 'rgba(0,255,225,1)',
              shadowBlur: 4,
            },
          },
          data: data1,
          animationDelay: idx => idx * 10,
        },
        {
          name: 'bar2',
          type: 'bar',
          barWidth: '10px',
          itemStyle: {
            normal: {
              color: new Echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: '#fc97af', // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#f7f494', // 100% 处的颜色
                  },
                ],
                false,
              ),
              barBorderRadius: [30, 30, 0, 0],
              shadowColor: 'rgba(0,255,225,1)',
              shadowBlur: 4,
            },
          },
          data: data2,
          animationDelay: idx => idx * 10 + 100,
        },
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: idx => idx * 5,
    };
    this.setState({
      myEchartRect,
    });
    myEchartRect.setOption(RectOption);
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.getEchartWidth();
    }, 200);
  }

  // 获取Echart图宽高
  getEchartWidth = () => {
    this.PieRef.current.style.width = this.PieRef.current.offsetWidth;
    this.PieRef.current.style.height = this.PieRef.current.offsetHeight;
    this.LineRef.current.style.width = this.LineRef.current.offsetWidth;
    this.LineRef.current.style.height = this.LineRef.current.offsetHeight;
    this.RectRef.current.style.width = this.RectRef.current.offsetWidth;
    this.RectRef.current.style.height = this.RectRef.current.offsetHeight;
    this.resized();
    this.resizedLine();
    this.resizedRect();
  };

  resized = () => {
    const { myEchart } = this.state;
    myEchart.resize();
  };

  resizedLine = () => {
    const { myEchartLine } = this.state;
    myEchartLine.resize();
  };

  resizedRect = () => {
    const { myEchartRect } = this.state;
    myEchartRect.resize();
  };

  render() {
    return (
      <>
        <div
          id="pieCharts"
          ref={this.PieRef}
          className="common_Echarts"
          style={{ height: 400, marginBottom: 20 }}
        ></div>
        <div
          id="LineCharts"
          ref={this.LineRef}
          className="common_Echarts"
          style={{ height: 400, marginBottom: 20 }}
        ></div>
        <div
          id="RectCharts"
          ref={this.RectRef}
          className="common_Echarts"
          style={{ height: 400, marginBottom: 20 }}
        ></div>
      </>
    );
  }
}

export default CapitalBudget;
