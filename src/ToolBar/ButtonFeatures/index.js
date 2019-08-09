import React from 'react';
import { Menu, Dropdown } from 'antd'

import classes from '../style.module.scss';

export const features = {
  TOOLBAR_SELECT_COLUMNS: 'TOOLBAR_SELECT_COLUMNS',
  TOOLBAR_DOWNLOAD_EMPLOYEES: 'TOOLBAR_DOWNLOAD_EMPLOYEES',
  TOOLBAR_IMPORT_EMPLOYEES: 'TOOLBAR_IMPORT_EMPLOYEES',
  TOOLBAR_DELETE_EMPLOYEES: 'TOOLBAR_DELETE_EMPLOYEES'
}

const ToolBarButtonFeatures = ({ onClick }) => {
  const menu = (
    <Menu onClick={onClick}>
      <Menu.Item key={features.TOOLBAR_SELECT_COLUMNS}>Select Columns</Menu.Item>
      <Menu.Divider />
      <Menu.Item key={features.TOOLBAR_DOWNLOAD_EMPLOYEES}>Download Employees</Menu.Item>
      <Menu.Divider />
      <Menu.Item key={features.TOOLBAR_IMPORT_EMPLOYEES}>Import Employees</Menu.Item>
      <Menu.Divider />
      <Menu.Item key={features.TOOLBAR_DELETE_EMPLOYEES}>Delete Employees</Menu.Item>
    </Menu>
  )
  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <button className={classes.ToolBar__button + ' ' + classes['ToolBar__button--features']} />
    </Dropdown>
  )
}

export default ToolBarButtonFeatures;
