import React from 'react'
import { Row, Col, Typography, Divider } from 'antd'
import EnterpriseImg1 from '../../assets/images/facebook-807588_640.png'
import EnterpriseImg2 from '../../assets/images/follow-826033_640.png'
import EnterpriseImg3 from '../../assets/images/icon-720944_640.png'
import EnterpriseImg4 from '../../assets/images/microsoft-80658_640.png'
import styles from './Enterprise.module.css'

export const Enterprise: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <Divider orientation="left">合作企业</Divider>
        <Row style={{ margin: '0 auto' }}>
          <Col span={6}>
            <img src={EnterpriseImg3} alt="" style={{ width: 280 }} />
          </Col>
          <Col span={6}>
            <img src={EnterpriseImg1} alt="" style={{ width: 280 }} />
          </Col>
          <Col span={6}>
            <img src={EnterpriseImg2} alt="" style={{ width: 280 }} />
          </Col>
          <Col span={6}>
            <img src={EnterpriseImg4} alt="" style={{ width: 280 }} />
          </Col>
        </Row>
      </div>
    </>
  )
}
