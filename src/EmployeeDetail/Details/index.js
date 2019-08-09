import React/*, { useState }*/ from 'react';
import { Row, Col } from 'antd';
import uuid from 'uuid/v4';

import classes from './style.module.scss';
import EmployeeDetailTilte from '../Title';
import Input from '../../Input';
import useForm from '../../useForm';

const EmployeeDetailDetails = ({ detail }) => {
  const {
    Name: fullName,
    Email: email,
    Department: department,
    Phone: phoneNumber,
    Position: position
  } = detail;

  const [firstName, lastName] = fullName.split(' ');

  const { values, handleChange } = useForm({
    firstName,
    lastName,
    email,
    department,
    phoneNumber,
    position
  });

  return (
    <div className={classes['details']}>
      <Row>
        <EmployeeDetailTilte title='Details' />
      </Row>
      <Row type='flex' justify='space-between'>
        <Col span={6}>
          <Input
            name='firstName'
            value={values.firstName}
            onChange={handleChange}
            type='text'
            style={{ backgroundColor: '#fff' }}
          />
        </Col>
        <Col span={8}>
          <Input
            name='email'
            value={values.email}
            onChange={handleChange}
            type='text'
            style={{ backgroundColor: '#fff' }}
          />
        </Col>
        <Col span={8}>
          <Input
            name='department'
            label='Department'
            question
            onChange={handleChange}
            type='select'
            options={[
              {
                ID: uuid(),
                Name: values.department
              }
            ]}
            style={{ backgroundColor: '#fff' }}
          />
        </Col>
      </Row>
      <Row type='flex' justify='space-between'>
        <Col span={6}>
          <Input
            name='lastName'
            value={values.lastName}
            onChange={handleChange}
            type='text'
            style={{ backgroundColor: '#fff' }}
          />
        </Col>
        <Col span={8}>
          <Input
            name='phoneNumber'
            value={values.phoneNumber}
            onChange={handleChange}
            type='text'
            style={{ backgroundColor: '#fff' }}
          />
        </Col>
        <Col span={8}>
          <Input
            name='position'
            label='Position'
            question
            onChange={handleChange}
            type='select'
            options={[
              {
                ID: uuid(),
                Name: values.position
              }
            ]}
            style={{ backgroundColor: '#fff' }}
          />
        </Col>
      </Row>
    </div>
  )
}

export default EmployeeDetailDetails;
