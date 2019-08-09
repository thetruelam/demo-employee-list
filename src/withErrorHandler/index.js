import React from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const withErrorHandler = (WrappedComponent) => {
  return (props) => {
    if (props.error) {
      return <Redirect path="/error" />
    } else {
      const wrappedProps = { ...props }
      delete wrappedProps.error;
      return <WrappedComponent {...wrappedProps} />
    }
  }
}

const mapState = state => ({
  error: state.error
});

export default withErrorHandler;