import React from 'react';

const EmployeeTableHeader = ({ fields }) => {
  return (
    <div className='EmployeeTable__header'>
      {fields.map(field => (
        <div key={field} className='EmployeeTable__header--item'>
          <div className={`EmployeeTable__header--${field.split(' ').join('')}`}>{field}</div>
        </div>
      ))}
    </div>
  )
}

export default EmployeeTableHeader;
