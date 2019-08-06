import React from 'react';
import PropTypes from 'prop-types';
import classes from './style.module.scss';

const SideFilterInput = ({ type, name, options, onChange }) => {
  let renderInput;

  switch (type) {
    case 'select':
      renderInput = (
        <div className={classes['select-wrap']}>
          <select name={name.toLowerCase()} onChange={onChange}>
            <option value='Any' >Any</option>
            {options.map(option => (
              <option key={option['ID']} value={option['Name']}>{option['Name']}</option>
            ))}
          </select>
        </div>
      );
      break;
    default:
      renderInput = <input type={type} name={name.toLowerCase()} placeholder={name} onChange={onChange} />;
      break;
  }
  return (
    <div className={classes['SideFilterInput']}>
      <label htmlFor="">
        <span className={classes['label']}>{name}</span>
        <br />
        {renderInput}
      </label>
    </div>
  )
}

SideFilterInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default SideFilterInput;
