import React from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';

import classes from './style.module.scss'
import Input from '../Input';
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
      [e.target.name.toLowerCase()]: e.target.value.replace(/[^\w\s]/gi, '')
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
        <Input 
          type='text' 
          key={uuid()} 
          label='Name' 
          name='Name' 
          placeholder='Name' 
          onChange={this.handleInputChange} 
        />,
        <Input 
          type='text' 
          key={uuid()} 
          label='Employee ID' 
          name='EmployeeID' 
          placeholder='Employee ID' 
          onChange={this.handleInputChange} 
        />,
        <Input 
          type='select' 
          key={uuid()} 
          label='Positions' 
          name='Positions' 
          options={[{ID:'Any', Name:'Any'}].concat(positions)} 
          onChange={this.handleInputChange} 
        />,
        <Input 
          type='select' 
          key={uuid()} 
          label='Departments' 
          name='Departments' 
          options={[{ID:'Any', Name:'Any'}].concat(departments)} 
          onChange={this.handleInputChange} 
        />
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
