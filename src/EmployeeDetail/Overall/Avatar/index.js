import React from 'react';

import classes from './style.module.scss';

const EmployeeDetailOverallAvatar = ({ src }) => {
  return (
    <div className={classes['avatar']}>
      <div className={classes['avatar-wrap']}>
        <img src={src} alt='img' />
      </div>
    </div>
  )
}

export default EmployeeDetailOverallAvatar;
