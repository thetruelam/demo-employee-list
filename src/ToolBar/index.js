
import React from 'react';
import { connect } from 'react-redux';
import { Modal, message } from 'antd';
import fileDownload from 'react-file-download';

import classes from './style.module.scss';
import { toggleSideFilter } from '../SideFilter/actions';
import ToolBarButtonFilter from './ToolBarButtonFilter';
import ToolBarButtonFeatures, { features } from './ToolBarButtonFeatures';
import { toggleSelectColumns, deleteEmployees, downloadEmployees } from '../EmployeeTable/actions';

const ToolBar = ({
  employeesNumber,
  toggleSideFilter,
  toggleSelectColumns,
  isSelectColumns,
  selectedEmployeesNumber,
  deleteEmployees,
  downloadEmployees
}) => {
  const btnFilterOnClick = () => {
    toggleSideFilter();
  }

  const toolbarSelectColumns = () => {
    toggleSelectColumns();
  }

  const toolbarDeleteEmployees = () => {
    let num = selectedEmployeesNumber;
    if (!isSelectColumns) {
      Modal.warning({
        title: 'Warning',
        content: 'You must select row first!'
      });
    } else if (selectedEmployeesNumber === 0) {
      Modal.warning({
        title: 'Warning',
        content: 'You must select at least 1 row first!'
      });
    } else {
      Modal.confirm({
        title: 'Are you sure delete theses employees?',
        content: 'Are you sure?',
        okText: 'Yes',
        okType: 'danger',
        cancelText: 'No',
        onOk() {
          deleteEmployees();
          message.success(`You have successfully deleted ${num} employees`)
        },
        onCancel() {
          console.log('Cancel');
        },
      });
    }
  }

  const toolbarImportEmployees = () => {
    message.success('You have successfully import employees');
  }

  const toolbarDownloadEmployees = async () => {
    if (!isSelectColumns) {
      Modal.warning({
        title: 'Warning',
        content: 'You must select row first!'
      });
    } else if (selectedEmployeesNumber === 0) {
      Modal.warning({
        title: 'Warning',
        content: 'You must select at least 1 row first!'
      });
    } else {
      const csv = await downloadEmployees();
      if (typeof csv === 'string') {
        fileDownload(csv, 'list-employees.csv');
        message.success('Download succeed!');
      }
    }
  }

  const handleFeaturesClick = (e) => {
    switch (e.key) {
      case features.TOOLBAR_SELECT_COLUMNS:
        toolbarSelectColumns();
        break;
      case features.TOOLBAR_DELETE_EMPLOYEES:
        toolbarDeleteEmployees();
        break;
      case features.TOOLBAR_IMPORT_EMPLOYEES:
        toolbarImportEmployees();
        break;
      case features.TOOLBAR_DOWNLOAD_EMPLOYEES:
        toolbarDownloadEmployees();
        break;
      default:
        break;
    }
    console.log(e);
  }

  return (
    <div className={classes.ToolBar}>
      <div className={classes.ToolBar__item}>
        <h2 className={classes.ToolBar__BreadCrump}>Employees</h2>
        <span className={classes.ToolBar__number}>{employeesNumber} Employees</span>
      </div>
      <div className={classes.ToolBar__item}>
        {isSelectColumns && (
          <span className={classes.ToolBar__number}>
            {selectedEmployeesNumber} employees selected
          </span>
        )}
        <ToolBarButtonFilter onClick={btnFilterOnClick} />
        <ToolBarButtonFeatures onClick={handleFeaturesClick} />
      </div>
    </div>
  )
}

const mapState = state => ({
  employeesNumber: state.EmployeeTable.listEmployees.length,
  isSelectColumns: state.EmployeeTable.isSelectColumns,
  selectedEmployeesNumber: state.EmployeeTable.listEmployees.filter(e => e.isSelected).length
});

const mapDispatch = dispatch => {
  return {
    toggleSideFilter: () => dispatch(toggleSideFilter()),
    toggleSelectColumns: () => dispatch(toggleSelectColumns()),
    deleteEmployees: () => dispatch(deleteEmployees()),
    downloadEmployees: () => dispatch(downloadEmployees())
  }
}

export default connect(mapState, mapDispatch)(ToolBar);
