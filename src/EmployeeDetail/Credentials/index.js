import React from 'react';
import { Row, Col } from 'antd';
import uuid from 'uuid/v4';

import classes from './style.module.scss';
import EmployeeDetailTilte from '../Title';
import Input from '../../Input';
import useForm from '../../useForm';

const EmployeeDetailCredentials = ({ detail }) => {
  const {
    Email: email,
    id,
    Password: password
  } = detail;

  const { values, handleChange } = useForm({
    userName: email,
    id,
    password,
    pin: '123'
  });

  return (
    <div className={classes.credentials}>
      <Row>
        <EmployeeDetailTilte title='Credentials' />
      </Row>
      <Row type='flex' justify='space-between'>
        <Col span={8}>
          <Input
            name='userName'
            value={values.userName}
            question
            label='Username'
            onChange={handleChange}
            type='text'
            style={{ backgroundColor: '#fff' }}
          />
        </Col>
        <Col span={8}>
          <Input
            name='role'
            value={values.role}
            question
            label='Role'
            onChange={handleChange}
            type='select'
            style={{ backgroundColor: '#fff' }}
            options={[{ ID: uuid(), Name: 'Demo User' }]}
          />
        </Col>
        <Col span={8}>
          <Input
            name='id'
            value={values.id}
            question
            label='Employee ID'
            onChange={handleChange}
            type='text'
            style={{ backgroundColor: '#fff' }}
          />
        </Col>
      </Row>
      <Row type='flex' justify='space-between'>
        <Col span={8}>
          <Input
            name='password'
            value={values.password}
            question
            label='Password'
            onChange={handleChange}
            type='password'
            style={{ backgroundColor: '#fff' }}
          />
        </Col>
        <Col span={8}>
          <Input
            name='siteAccess'
            value={values.siteAccess}
            question
            label='Site Access'
            onChange={handleChange}
            type='select'
            style={{ backgroundColor: '#fff' }}
            options={[{ ID: uuid(), Name: 'Four Sites' }]}
          />
        </Col>
        <Col span={8}>
          <Input
            name='pin'
            value={values.pin}
            question
            label='Pin'
            onChange={handleChange}
            type='password'
            style={{ backgroundColor: '#fff' }}
          />
        </Col>
      </Row>
    </div>
  )
}

export default EmployeeDetailCredentials;
