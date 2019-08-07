import React from 'react';
import { connect } from 'react-redux';
import './style.scss';

import EmployeeTableHeader from './EmployeeTableHeader';
import EmployeeTableRow from './EmployeeTableRow';
import Spinner from '../Spinner';
import { fetchEmployees, selectColumn, unselectColumn, selectAll, unselectAll } from './actions';
import Aux from '../hoc/A';

class EmployeeTable extends React.Component {
  componentDidMount() {
    this.props.fetchEmployees();
  }

  handleCheckBox = (e, employee) => {
    if (e.target.checked) {
      this.props.selectColumn(employee);
    } else {
      this.props.unselectColumn(employee);
    }
  }

  toggleSelectAll = (e) => {
    if (e.target.checked) {
      this.props.selectAll();
      console.log('checked')
    } else {
      this.props.unselectAll();
      console.log('unchecked')
    }
  }

  render() {
    const { isFetching, employees, isFilter, filters, isSelectColumns, isSelectAll } = this.props
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
          <EmployeeTableHeader
            fields={fields}
            showCheckBox={isSelectColumns}
            toggleSelectAll={this.toggleSelectAll}
            isSelectAll={isSelectAll}
          />
          {renderEmployees.map(employee => (
            <EmployeeTableRow
              key={employee['Employee ID']}
              employee={employee}
              showCheckBox={isSelectColumns}
              handleCheckBox={this.handleCheckBox}
            />
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
  isSelectColumns: state.EmployeeTable.isSelectColumns,
  isSelectAll: state.EmployeeTable.isSelectAll,
  isFilter: state.SideFilter.showSideFilter,
  filters: state.SideFilter.filters
});

const mapDispatch = dispatch => ({
  fetchEmployees: () => dispatch(fetchEmployees()),
  selectColumn: (employee) => dispatch(selectColumn(employee)),
  unselectColumn: (employee) => dispatch(unselectColumn(employee)),
  selectAll: () => dispatch(selectAll()),
  unselectAll: () => dispatch(unselectAll())
});

export default connect(
  mapState,
  mapDispatch
)(EmployeeTable);
