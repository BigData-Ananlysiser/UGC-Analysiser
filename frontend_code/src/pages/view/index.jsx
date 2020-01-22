import * as React from 'react';
import Echarts from 'echarts';

class CapitalBudget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myEchart: null,
    };
    this.LineRef = React.createRef();
  }

  componentDidMount() {
    const myEchart = Echarts.init(document.getElementById('echart-Line'));
    const option = {
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        axisLabel: {
          formatter: '{value} 年',
        },
        axisTick: {
          alignWithLabel: true,
        },
        data: ['2012', '2013', '2014', '2015', '2016', '2017', '2018'],
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: '{value} 万',
        },
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
        },
      ],
    };
    this.setState({
      myEchart,
    });
    myEchart.setOption(option);
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.getEchartWidth();
    }, 200);
  }

  // 获取Echart图宽高
  getEchartWidth = () => {
    this.LineRef.current.style.width = this.LineRef.current.offsetWidth;
    this.LineRef.current.style.height = this.LineRef.current.offsetHeight;
    this.resized();
  };

  resized = () => {
    const { myEchart } = this.state;
    myEchart.resize();
  };

  render() {
    return <div ref={this.LineRef} id="echart-Line" style={{ height: '236px' }} />;
  }
}

export default CapitalBudget;
