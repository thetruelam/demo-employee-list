import React from 'react';
import { Link } from 'react-router-dom';

import classes from '../style.module.scss';

const ToolBarBreadCrump = ({ locations, employeeDetail }) => {
  return (
    <div className={classes['ToolBar__BreadCrump']}>
      <Link to="/employees">Employees</Link>
      {locations.length > 1 && employeeDetail && (
        <span> >
          &nbsp;{employeeDetail && <Link to={`/employees/${employeeDetail.id}`}>{employeeDetail.Name}</Link>}
        </span>
      )}
    </div>
  )
}

export default ToolBarBreadCrump;
