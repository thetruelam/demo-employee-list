import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'antd'

import classes from './style.module.scss';
import { fetchEmployeeDetail } from './actions';
import Spinner from '../Spinner';
import EmployeeDetailOverall from './EmployeeDetailOverall';

class EmployeeDetail extends Component {
  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.props.fetchEmployeeDetail(id);
  }

  render() {
    const { isFetching, detail } = this.props;
    let render;

    if (isFetching) {
      render = (
        <div className={classes['EmployeeDetail__spinner-wrap']}>
          <Spinner />
        </div>
      )
    } else {
      // console.log(detail);
      render = (
        <>
          <Row type='flex' justify='space-around'>
            <Col span={10}>
              <EmployeeDetailOverall detail={detail} />
            </Col>
            <Col span={10}>2</Col>
          </Row>
          <Row>
            <Col span={24}>3</Col>
          </Row>
        </>
      )
    }

    return (
      <div className={classes['EmployeeDetail']}>
        {render}
      </div>
    )
  }
}

const mapState = state => ({
  detail: state.EmployeeDetail.detail,
  isFetching: state.EmployeeDetail.isFetching
});

const mapDispatch = dispatch => ({
  fetchEmployeeDetail: (id) => dispatch(fetchEmployeeDetail(id))
})

export default withRouter(
  connect(
    mapState,
    mapDispatch
  )(EmployeeDetail)
);
