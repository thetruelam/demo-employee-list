import React from 'react';
import classes from '../style.module.scss';

const ToolBarButtonFilter = ({ onClick }) => {
  return (
    <button
      className={classes.ToolBar__button + ' ' + classes['ToolBar__button--filter']}
      onClick={onClick}
    />
  )
}

export default ToolBarButtonFilter;
