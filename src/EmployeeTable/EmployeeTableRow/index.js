import React from 'react';
import { Checkbox } from 'antd';

class EmployeeTableRow extends React.Component {
  state = {
    isSelected: false
  }

  componentWillUpdate() {
    if (!this.props.showCheckBox && this.state.isSelected) {
      this.setState({ isSelected: false });
    }
  }

  onCheckBoxChange = (e) => {
    let tmpEmployee = {
      ...this.props.employee
    }
    delete tmpEmployee['Image'];
    this.setState({ isSelected: e.target.checked });
    this.props.handleCheckBox(e, tmpEmployee);
  }

  render() {
    const { employee, showCheckBox } = this.props;
    let attachedClasses = ['EmployeeTable__row'];
    let renderItems = [];

    if (this.state.isSelected) {
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

    return (
      <div className={attachedClasses.join(' ')}>
        {showCheckBox && (
          <div className='EmployeeTable__row--checkbox'>
            <Checkbox onChange={this.onCheckBoxChange} />
          </div>
        )}
        {renderItems}
      </div>
    )
  }
}

export default EmployeeTableRow;
