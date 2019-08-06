
import React from 'react';
import { connect } from 'react-redux';

import classes from './style.module.scss';
import { toggleSideFilter } from '../SideFilter/actions';

const ToolBar = ({ employeesNumber, toggleSideFilter }) => {
  const btnFilterOnClick = () => {
    toggleSideFilter();
  }

  return (
    <div className={classes.ToolBar}>
      <div className={classes.ToolBar__item}>
        <h2 className={classes.ToolBar__BreadCrump}>Employees</h2>
        <span className={classes.ToolBar__number}>{employeesNumber} Employees</span>
      </div>
      <div className={classes.ToolBar__item}>
        <button
          className={classes.ToolBar__button + ' ' + classes['ToolBar__button--filter']}
          onClick={btnFilterOnClick}
        />
        <button className={classes.ToolBar__button + ' ' + classes['ToolBar__button--features']} />
      </div>
    </div>
  )
}

const mapState = state => ({
  employeesNumber: state.EmployeeTable.listEmployees.length
});

const mapDispatch = dispatch => {
  return {
    toggleSideFilter: () => dispatch(toggleSideFilter())
  }
}

export default connect(mapState, mapDispatch)(ToolBar);
