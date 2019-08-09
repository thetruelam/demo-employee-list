import React from 'react';
import { Row, Col } from 'antd';
import moment from 'moment';

import classes from './style.module.scss';
import EmployeeDetailTilte from '../Title';
import EmployeeDetailOverallAvatar from './Avatar';
import EmployeeDetailOverallChart from './Chart';

const EmployeeDetailOverall = ({ detail }) => {
  return (
    <div className={classes['overall']}>
      <Row>
        <EmployeeDetailTilte title={detail.Name} />
      </Row>
      <Row type='flex' justify='space-between'>
        <Col span={8}>
          <h3>Employee Image</h3>
          <div className={classes['overall__avatar-wrap']}>
            <EmployeeDetailOverallAvatar src={detail.Image} />
          </div>
        </Col>
        <Col span={15}>
          <div className={classes['overall__chart-wrap']}>
            <h3>Inspections Completed</h3>
            <EmployeeDetailOverallChart />
          </div>
        </Col>
      </Row>
      <Row style={{ padding: '3.5rem 0 1rem' }}>
        <Col span={7}>
          <p>Total Inspections</p>
          <p>{detail.Inspections.length}</p>
        </Col>
        <Col span={7}>
          <p>Open Issues</p>
          <p>{detail['Open Issues']}</p>
        </Col>
        <Col span={7}>
          <p>Last Login</p>
          <p>{moment(detail['Last Login'], 'YYYY-MM-DD').format('DD/MM/YYYY')}</p>
        </Col>
        <Col span={3}>
          <p>Sites</p>
          <p>{detail.Sites}</p>
        </Col>
      </Row>
    </div>
  )
}

export default EmployeeDetailOverall;
