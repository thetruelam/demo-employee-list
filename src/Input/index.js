import React from 'react';
import classes from './style.module.scss';

const Input = (props) => {
  let renderInput;
  const { type, options, label, question } = props

  switch (type) {
    case 'select':
      renderInput = (
        <div className={classes['select-wrap']}>
          <select {...props}>
            {options.map(option => (
              <option key={option['ID']} value={option['Name']}>{option['Name']}</option>
            ))}
          </select>
        </div>
      );
      break;
    default:
      renderInput = (
        <input {...props} />
      );
      break;
  }
  return (
    <div className={`${classes['Input']} ${question ? classes['Input--question'] : ''}`}>
      <label htmlFor="">
        <span className={classes['label']}>{(label && label.length > 0) ? label : ''}&nbsp;</span>
        <br />
        {renderInput}
      </label>
    </div>
  )
}

export default Input;
