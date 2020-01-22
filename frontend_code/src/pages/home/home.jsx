import * as React from 'react'
import Echarts from 'echarts'
import { Row, Col } from 'antd';
import LeftAssembly from './components/leftAssembly.jsx'
import RightAssembly from './components/rightAssembly.jsx'
// import { getMapEcharts } from './components/comm.js'
import '@/assets/utils/china.js';
 
class CapitalBudget extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            myEchart: null
        }
        this.LineRef = React.createRef();
    }
    
    
    
    componentDidMount() {
        const myEchart = Echarts.init(document.getElementById('getMapEl'));
        const option = {
            title: {
                text: 'iphone销量',
                subtext: '纯属虚构',
                textStyle: {
                    color: '#fff',
                    fontSize: this.LineRef.current.offsetWidth/1082*28

                },
                subtextStyle: {
                    color: '#fff',
                    fontSize: this.LineRef.current.offsetWidth/1082*20

                },
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                data:['iphone3','iphone4','iphone5'],
                padding: [30, 100],
                textStyle: {
                    color: '#fff',
                },
            },
            visualMap: {
                min: 0,
                max: 2500,
                left: 'left',
                top: 'bottom',
                text: ['高','低'],           // 文本，默认为数值文本
                calculable: true,
                textStyle: {
                    color: '#fff',
                },
                inRange: {
                    color: ["#fc97af",
                    "#87f7cf",
                    "#f7f494",
                    "#72ccff",
                    "#f7c5a0",
                    "#d4a4eb",
                    "#d2f5a6",
                    "#76f2f2"],
                }
            },
            series: [
                {
                    name: 'iphone3',
                    type: 'map',
                    mapType: 'china',
                    roam: false,
                    label: {
                        normal: {
                            show: true,
                            color: "#fff",
                            fontSize: this.LineRef.current.offsetWidth/1082*12
                        },
                        emphasis: {
                            show: true
                        },

                    },
                    data:[
                        {name: '北京',value: this.randomData() },
                        {name: '天津',value: this.randomData() },
                        {name: '上海',value: this.randomData() },
                        {name: '重庆',value: this.randomData() },
                        {name: '河北',value: this.randomData() },
                        {name: '河南',value: this.randomData() },
                        {name: '云南',value: this.randomData() },
                        {name: '辽宁',value: this.randomData() },
                        {name: '黑龙江',value: this.randomData() },
                        {name: '湖南',value: this.randomData() },
                        {name: '安徽',value: this.randomData() },
                        {name: '山东',value: this.randomData() },
                        {name: '新疆',value: this.randomData() },
                        {name: '江苏',value: this.randomData() },
                        {name: '浙江',value: this.randomData() },
                        {name: '江西',value: this.randomData() },
                        {name: '湖北',value: this.randomData() },
                        {name: '广西',value: this.randomData() },
                        {name: '甘肃',value: this.randomData() },
                        {name: '山西',value: this.randomData() },
                        {name: '内蒙古',value: this.randomData() },
                        {name: '陕西',value: this.randomData() },
                        {name: '吉林',value: this.randomData() },
                        {name: '福建',value: this.randomData() },
                        {name: '贵州',value: this.randomData() },
                        {name: '广东',value: this.randomData() },
                        {name: '青海',value: this.randomData() },
                        {name: '西藏',value: this.randomData() },
                        {name: '四川',value: this.randomData() },
                        {name: '宁夏',value: this.randomData() },
                        {name: '海南',value: this.randomData() },
                        {name: '台湾',value: this.randomData() },
                        {name: '香港',value: this.randomData() },
                        {name: '澳门',value: this.randomData() }
                    ]
                },
                {
                    name: 'iphone4',
                    type: 'map',
                    mapType: 'china',
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true
                        },
                        fontSize: this.LineRef.current.offsetWidth/1082*20

                    },
                    data:[
                        {name: '北京',value: this.randomData() },
                        {name: '天津',value: this.randomData() },
                        {name: '上海',value: this.randomData() },
                        {name: '重庆',value: this.randomData() },
                        {name: '河北',value: this.randomData() },
                        {name: '安徽',value: this.randomData() },
                        {name: '新疆',value: this.randomData() },
                        {name: '浙江',value: this.randomData() },
                        {name: '江西',value: this.randomData() },
                        {name: '山西',value: this.randomData() },
                        {name: '内蒙古',value: this.randomData() },
                        {name: '吉林',value: this.randomData() },
                        {name: '福建',value: this.randomData() },
                        {name: '广东',value: this.randomData() },
                        {name: '西藏',value: this.randomData() },
                        {name: '四川',value: this.randomData() },
                        {name: '宁夏',value: this.randomData() },
                        {name: '香港',value: this.randomData() },
                        {name: '澳门',value: this.randomData() }
                    ]
                },
                {
                    name: 'iphone5',
                    type: 'map',
                    mapType: 'china',
                    label: {
                        emphasis: {
                            show: true
                        },
                        color: "#fff"

                    },
                    data:[
                        {name: '北京',value: this.randomData() },
                        {name: '天津',value: this.randomData() },
                        {name: '上海',value: this.randomData() },
                        {name: '广东',value: this.randomData() },
                        {name: '台湾',value: this.randomData() },
                        {name: '香港',value: this.randomData() },
                        {name: '澳门',value: this.randomData() }
                    ]
                }
            ]
        };
        this.setState({
            myEchart,
         })
        myEchart.setOption(option);
    }

    componentDidUpdate() { 
        setTimeout(() => {
             this.getEchartWidth() 
         }, 200)
     }

     // 获取Echart图宽高
     getEchartWidth = () => {
        this.LineRef.current.style.width = this.LineRef.current.offsetWidth
        this.LineRef.current.style.height = this.LineRef.current.offsetHeight    
           this.resized()     
    }

    randomData = () => Math.round(Math.random()*1000)
    
     resized = () => { 
         const { myEchart } = this.state
          myEchart.resize()
     }

    render () {
        return (
            <>
            <Row className="style_layouts" >
                <Col xs={24} sm={24} md={6} lg={6} xl={7}>
                <LeftAssembly />
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={10}>
                <div id="getMapEl" ref ={this.LineRef} style={{height:900}}></div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={7}>
                <RightAssembly />
                </Col>
            </Row>
            </>    
        )
    }
}
 
export default CapitalBudget