import React from 'react';
import { connect } from 'react-redux'
import './style.scss';

import EmployeeTableHeader from './EmployeeTableHeader';
import EmployeeTableRow from './EmployeeTableRow';
import Spinner from '../Spinner';
import { fetchEmployees } from './actions'
import Aux from '../hoc/A';

class EmployeeTable extends React.Component {
  componentDidMount() {
    this.props.fetchEmployees();
  }

  render() {
    const { isFetching, employees, isFilter, filters } = this.props
    let table;

    if (isFetching) {
      table = (
        <div className='EmployeeTable__spinner-wrap'>
          <Spinner />
        </div>
      )
    } else if (employees && employees.length > 0) {
      let fields = Object.keys(employees[0]);
      let renderEmployees = employees;

      if (isFilter) {
        renderEmployees = renderEmployees.filter(employee => {
          let check = true;
          if (filters.name !== '' && !employee['Name'].match(new RegExp(filters.name, 'gi')))
            check = false;
          if (filters.employeeid !== '' && !employee['Employee ID'].match(new RegExp(filters.employeeid, 'gi')))
            check = false;
          if (filters.positions !== 'Any' && filters.positions !== employee['Position'])
            check = false;
          if (filters.departments !== 'Any' && filters.departments !== employee['Department'])
            check = false;

          return check;
        })
      }

      table = (
        <Aux>
          <EmployeeTableHeader fields={fields} />
          {renderEmployees.map(employee => (
            <EmployeeTableRow key={employee['Employee ID']} employee={employee} />
          ))}
        </Aux>
      )
    }

    return (
      <div className='EmployeeTable' >
        {table}
      </div>
    )
  }
}

const mapState = state => ({
  employees: state.EmployeeTable.listEmployees,
  isFetching: state.EmployeeTable.isFetching,
  isFilter: state.SideFilter.showSideFilter,
  filters: state.SideFilter.filters
});

const mapDispatch = dispatch => ({
  fetchEmployees: () => dispatch(fetchEmployees())
})

export default connect(
  mapState,
  mapDispatch
)(EmployeeTable);
