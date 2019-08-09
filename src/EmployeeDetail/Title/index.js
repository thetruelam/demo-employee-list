import React from 'react';
import classes from './style.module.scss';

const EmployeeDetailTilte = ({ title }) => {
  return (
    <div className={classes.title}>
      <h2>{title}</h2>
    </div>
  )
}

export default EmployeeDetailTilte;
