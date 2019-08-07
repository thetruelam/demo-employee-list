import React from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';

import classes from './style.module.scss'
import SideFilterInput from './SideFilterInput';
import { fetchSelect, inputChange } from './actions';
import Spinner from '../Spinner';

class SideFilter extends React.Component {
  componentDidMount() {
    this.props.fetchData();
    this.props.inputChange({
      name: '',
      employeeid: '',
      positions: 'Any',
      departments: 'Any',
    })
  }

  handleInputChange = (e) => {
    let data = {
      [e.target.name]: e.target.value.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '')
    }
    // console.log(data);
    this.props.inputChange(data);
  }

  render() {
    const { show, isFetching, positions, departments } = this.props;
    let filter = [];
    let attachedClasses = [classes.SideFilter]

    if (show) {
      attachedClasses.push(classes['SideFilter--open'])
    }

    if (isFetching) {
      filter = <Spinner />
    } else {
      filter.push(
        <SideFilterInput type='text' key={uuid()} name='Name' onChange={this.handleInputChange} />,
        <SideFilterInput type='text' key={uuid()} name='EmployeeID' onChange={this.handleInputChange} />,
        <SideFilterInput type='select' key={uuid()} name='Positions' options={positions} onChange={this.handleInputChange} />,
        <SideFilterInput type='select' key={uuid()} name='Departments' options={departments} onChange={this.handleInputChange} />
      )
    }

    return (
      <aside className={attachedClasses.join(' ')}>
        <h2 className={classes['SideFilter__title']}>Filters</h2>
        {filter}
      </aside>
    )
  }
}

const mapState = (state) => ({
  show: state.SideFilter.showSideFilter,
  positions: state.SideFilter.positions,
  departments: state.SideFilter.departments,
  isFetching: state.SideFilter.isFetching
});

const mapDispatch = dispatch => ({
  fetchData: () => dispatch(fetchSelect()),
  inputChange: (data) => dispatch(inputChange(data))
});

export default connect(mapState, mapDispatch)(SideFilter);
