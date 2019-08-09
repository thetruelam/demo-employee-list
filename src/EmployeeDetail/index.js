import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'antd'

import classes from './style.module.scss';
import { fetchEmployeeDetail } from './actions';
import Spinner from '../Spinner';
import EmployeeDetailOverall from './Overall';
import EmployeeDetailDetails from './Details';
import EmployeeDetailInspections from './Inspections';
import EmployeeDetailCredentials from './Credentials';
import NotFoundPage from '../NotFoundPage';

class EmployeeDetail extends Component {
  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.props.fetchEmployeeDetail(id);
  }

  render() {
    const { isFetching, detail } = this.props;
    let render;

    if ((!detail || detail === 'Not found') && !isFetching) {
      return <NotFoundPage />
    }

    if (isFetching) {
      render = (
        <div className={classes['EmployeeDetail__spinner-wrap']}>
          <Spinner />
        </div>
      )
    } else {
      render = (
        <>
          <Row type='flex' justify='space-around'>
            <Col span={11} >
              <EmployeeDetailOverall detail={detail} />
            </Col>
            <Col span={11}>
              <Row>
                <Col span={24}>
                  <EmployeeDetailDetails detail={detail} />
                </Col>
              </Row>
              <Row style={{ paddingTop: '2rem' }}>
                <Col span={24}>
                  <EmployeeDetailCredentials detail={detail} />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row type='flex' justify='space-around' style={{ paddingTop: '2rem' }}>
            <Col span={23}>
              <EmployeeDetailInspections inspections={detail.Inspections} />
            </Col>
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
