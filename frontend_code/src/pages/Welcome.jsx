import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { FormattedMessage } from 'umi-plugin-react/locale';
import { Card, Typography, Alert } from 'antd';
import styles from './Welcome.less';

const CodePreview = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);

export default () => (
  <PageHeaderWrapper>
    <Card>
      <Alert
        message="umi ui 现已发布，点击右下角 umi 图标即可使用"
        type="success"
        showIcon
        banner
        style={{
          margin: -12,
          marginBottom: 24,
        }}
      />
      <Typography.Text strong>
        <a target="_blank" rel="noopener noreferrer" href="https://pro.ant.design/docs/block">
          <FormattedMessage
            id="app.welcome.link.block-list"
            defaultMessage="基于 block 开发，快速构建标准页面"
          />
        </a>
      </Typography.Text>
      <CodePreview> npm run ui</CodePreview>
      <Typography.Text
        strong
        style={{
          marginBottom: 12,
        }}
      >
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://pro.ant.design/docs/available-script#npm-run-fetchblocks"
        >
          <FormattedMessage id="app.welcome.link.fetch-blocks" defaultMessage="获取全部区块" />
        </a>
      </Typography.Text>
      <CodePreview> npm run fetch:blocks</CodePreview>
    </Card>
    <p
      style={{
        textAlign: 'center',
        marginTop: 24,
      }}
    >
      Want to add more pages? Please refer to{' '}
      <a href="https://pro.ant.design/docs/block-cn" target="_blank" rel="noopener noreferrer">
        use block
      </a>
      。
    </p>
  </PageHeaderWrapper>
);
// import React, { useEffect } from 'react';
// import { Row, Col } from 'antd';
// import './home.less';

// import LeftAssembly from './components/leftAssembly.jsx'
// import RightAssembly from './components/rightAssembly.jsx'
// import { getMapEcharts } from './components/comm.js'

// function 3444 {
//     return Math.round(Math.random()*1000);
// }
// const EchartsTest = () => {
//     useEffect(() => {
//         const mapOption = {
//             text: 'iphone销量',
//             subtext: '纯属虚构',
//             legend: ['iphone3','iphone4','iphone5'],
//             visualMap: ['高','低'],
//             series: [
//                 {
//                     name: 'iphone3',
//                     type: 'map',
//                     mapType: 'china',
//                     roam: false,
//                     label: {
//                         normal: {
//                             show: true
//                         },
//                         emphasis: {
//                             show: true
//                         }
//                     },
//                     data:[
//                         {name: '北京',value: 3444 },
//                         {name: '天津',value: 3444 },
//                         {name: '上海',value: 3444 },
//                         {name: '重庆',value: 3444 },
//                         {name: '河北',value: 3444 },
//                         {name: '河南',value: 3444 },
//                         {name: '云南',value: 3444 },
//                         {name: '辽宁',value: 3444 },
//                         {name: '黑龙江',value: 3444 },
//                         {name: '湖南',value: 3444 },
//                         {name: '安徽',value: 3444 },
//                         {name: '山东',value: 3444 },
//                         {name: '新疆',value: 3444 },
//                         {name: '江苏',value: 3444 },
//                         {name: '浙江',value: 3444 },
//                         {name: '江西',value: 3444 },
//                         {name: '湖北',value: 3444 },
//                         {name: '广西',value: 3444 },
//                         {name: '甘肃',value: 3444 },
//                         {name: '山西',value: 3444 },
//                         {name: '内蒙古',value: 3444 },
//                         {name: '陕西',value: 3444 },
//                         {name: '吉林',value: 3444 },
//                         {name: '福建',value: 3444 },
//                         {name: '贵州',value: 3444 },
//                         {name: '广东',value: 3444 },
//                         {name: '青海',value: 3444 },
//                         {name: '西藏',value: 3444 },
//                         {name: '四川',value: 3444 },
//                         {name: '宁夏',value: 3444 },
//                         {name: '海南',value: 3444 },
//                         {name: '台湾',value: 3444 },
//                         {name: '香港',value: 3444 },
//                         {name: '澳门',value: 3444 }
//                     ]
//                 },
//                 {
//                     name: 'iphone4',
//                     type: 'map',
//                     mapType: 'china',
//                     label: {
//                         normal: {
//                             show: true
//                         },
//                         emphasis: {
//                             show: true
//                         }
//                     },
//                     data:[
//                         {name: '北京',value: 3444 },
//                         {name: '天津',value: 3444 },
//                         {name: '上海',value: 3444 },
//                         {name: '重庆',value: 3444 },
//                         {name: '河北',value: 3444 },
//                         {name: '安徽',value: 3444 },
//                         {name: '新疆',value: 3444 },
//                         {name: '浙江',value: 3444 },
//                         {name: '江西',value: 3444 },
//                         {name: '山西',value: 3444 },
//                         {name: '内蒙古',value: 3444 },
//                         {name: '吉林',value: 3444 },
//                         {name: '福建',value: 3444 },
//                         {name: '广东',value: 3444 },
//                         {name: '西藏',value: 3444 },
//                         {name: '四川',value: 3444 },
//                         {name: '宁夏',value: 3444 },
//                         {name: '香港',value: 3444 },
//                         {name: '澳门',value: 3444 }
//                     ]
//                 },
//                 {
//                     name: 'iphone5',
//                     type: 'map',
//                     mapType: 'china',
//                     label: {
//                         normal: {
//                             show: true
//                         },
//                         emphasis: {
//                             show: true
//                         }
//                     },
//                     data:[
//                         {name: '北京',value: 3444 },
//                         {name: '天津',value: 3444 },
//                         {name: '上海',value: 3444 },
//                         {name: '广东',value: 3444 },
//                         {name: '台湾',value: 3444 },
//                         {name: '香港',value: 3444 },
//                         {name: '澳门',value: 3444 }
//                     ]
//                 }
//             ],
//             fun: 'getMapEl'
//         }
//         getMapEcharts(mapOption)
//     }, [])
//     return (
        // <>
        // <Row type="flex" className="style_layouts" justify="start">
        //     <Col span={8}>
        //     <LeftAssembly />
        //     </Col>
        //     <Col span={8}>
        //     <div id="getMapEl" style={{width: 900,height:1200}}></div>
        //     </Col>
        //     <Col span={8}>
        //     <RightAssembly />
        //     </Col>
        // </Row>
        // </>
//     );
// }

// export default EchartsTest;