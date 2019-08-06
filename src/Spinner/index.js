import React from 'react';
import classes from './style.module.scss';

const Spinner = () => {
  return (
    <div className={classes['lds-heart']}>
      <div></div>
    </div>
  )
}

export default Spinner;
