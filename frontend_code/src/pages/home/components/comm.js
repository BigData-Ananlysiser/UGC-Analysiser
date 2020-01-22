// 引入 ECharts 主模块
import echarts from 'echarts';
// 引入柱状图
import  'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import halloween from '@/assets/utils/halloween.json';
// import roma from '@/assets/utils/roma.json';
import '@/assets/utils/china.js';

export const getEchartsInfo = IdName => echarts.init(document.getElementById(IdName), halloween);

export const makingPieChart = obj => {
    const options = {
        title: {
            text: obj.text,
            subtext: obj.subtext,
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            data: obj.legend,
            right: 'right',
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: obj.seriesData,
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    window.onresize = () => {
        obj.fun.resize();
    };
    obj.fun.clear();
    obj.fun.setOption(options);
}
export const makingColumnChart = obj => {
    
    const options = {
        title: {
            text: obj.text,
            subtext: obj.subtext
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: obj.legend,
            right: 'right',
 
        },
        calculable: true,
        xAxis: [
            {
                type: 'category',
                data: obj.dataXAxis
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: obj.series
    }
    window.onresize = () => {
        obj.fun.resize();
    };
    obj.fun.clear();
    obj.fun.setOption(options)
}
export const makingLineChart = obj => {
    // 基于准备好的dom，初始化echarts实例
    const options = {
        title: {
            text: obj.text
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: obj.legend
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: obj.dataXAxis
        },
        yAxis: {
            type: 'value'
        },
        series: obj.series
    }
    window.onresize = () => {
        obj.fun.resize();
    };
    obj.fun.clear();
    obj.fun.setOption(options);
}
export const getMapEcharts = obj => {
    const option = {
        title: {
            text: obj.text,
            subtext:  obj.subtext,
            left: 'center',
            textStyle: {
                color:'#fff'
            }
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: obj.legend,
            textStyle: {
                color: "#fff"
            }
        },
        visualMap: {
            min: 0,
            max: 2500,
            left: 'left',
            top: 'bottom',
            text: obj.visualMap,           // 文本，默认为数值文本
            calculable: true,
            textStyle: {
                color:'#fff'
            }
        },
        series: obj.series
    };
    echarts.init(document.getElementById(obj.fun)).clear();
    echarts.init(document.getElementById(obj.fun)).setOption(option);
}
