import React from 'react';
import { Row, Button } from 'antd';

import classes from './style.module.scss';
import EmployeeDetailTilte from '../Title';
import EmployeeDetailInspectionsTable from './Table';

const EmployeeDetailInspections = ({ inspections }) => {
  return (
    <div className={classes['inspections']}>
      <EmployeeDetailTilte title='Employee Inspections' />
      <div className={classes['inspections-wrap']}>
        <Row>
          <Button
            size='large'
            type='primary'
            style={{
              backgroundColor: '#c71585',
              borderColor: '#c71585',
              marginRight: '2rem'
            }}
          >
            Inspections
          </Button>
          <Button
            size='large'
            type='primary'
            style={{
              backgroundColor: '#c71585',
              borderColor: '#c71585',
              opacity: '0.2'
            }}
          >
            Issues
          </Button>
        </Row>
        <Row>
          <EmployeeDetailInspectionsTable data={inspections} />
        </Row>
      </div>
    </div>
  )
}

export default EmployeeDetailInspections;
