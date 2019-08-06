import React from 'react'

const EmployeeTableRow = ({ employee }) => {
  let renderItems = [];

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
        </div>)
    }
  }

  return (
    <div className='EmployeeTable__row'>
      {renderItems}
    </div>
  )
}

export default EmployeeTableRow
