import React from 'react';
import { Checkbox } from 'antd';

const EmployeeTableRow = ({ handleRowClick, employee, showCheckBox, isSelected, handleCheckBox }) => {
  let attachedClasses = ['EmployeeTable__row'];
  let renderItems = [];

  if (isSelected) {
    attachedClasses.push('EmployeeTable__row--selected');
  }

  if (!showCheckBox) {
    attachedClasses = ['EmployeeTable__row'];
  }

  for (const key in employee) {
    if (employee.hasOwnProperty(key)) {
      const data = employee[key];
      if (key === 'Image') {
        renderItems.push(
          <div key='data' className='EmployeeTable__row--Image'>
            <img src={data} alt="img" />
          </div>
        )
        continue;
      }
      renderItems.push(
        <div key={data} className='EmployeeTable__row--item'>
          <div className={`EmployeeTable__row--${key.split(' ').join('')}`}>
            {data}
          </div>
        </div>
      )
    }
  }

  const onCheckBoxChange = (e) => {
    handleCheckBox(e, employee['Employee ID']);
  }

  return (
    <div className={attachedClasses.join(' ')} onClick={() => handleRowClick(employee['Employee ID'])}>
      {showCheckBox && (
        <div className='EmployeeTable__row--checkbox'>
          <Checkbox onChange={onCheckBoxChange} checked={isSelected} />
        </div>
      )}
      {renderItems}
    </div>
  )
}

export default EmployeeTableRow;
