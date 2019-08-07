import React from 'react';
// import { Checkbox } from 'antd';

const EmployeeTableHeader = ({ fields, showCheckBox, toggleSelectAll, isSelectAll }) => {
  return (
    <div className='EmployeeTable__header'>
      {showCheckBox && (
        <div className='EmployeeTable__header--checkbox'>
          {/* <Checkbox
            onChange={toggleSelectAll}
            checked={isSelectAll}
          >All</Checkbox> */}
        </div>
      )}
      {fields.map(field => (
        <div key={field} className={`EmployeeTable__header--item ${field}`}>
          <div className={`EmployeeTable__header--${field.split(' ').join('')}`}>{field}</div>
        </div>
      ))}
    </div>
  )
}

export default EmployeeTableHeader;
