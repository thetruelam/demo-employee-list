import * as actionsType from './actionsType';

const initState = {
  isFetching: true,
  detail: null,
  error: null
}

const fetchEmployeeDetailStart = (state, action) => {
  return {
    ...state,
    isFetching: true
  }
}

const fetchEmployeeDetailSucceed = (state, action) => {
  const { detail } = action;
  return {
    ...state,
    detail,
    isFetching: false
  }
}

const fetchEmployeeDetailFail = (state, action) => {
  const { error } = action;

  return {
    ...state,
    error,
    isFetching: false
  }
}

const EmployeeDetail = (state = initState, action) => {
  switch (action.type) {
    case actionsType.FETCH_EMPLOYEE_DETAIL_START:
      return fetchEmployeeDetailStart(state, action);
    case actionsType.FETCH_EMPLOYEE_DETAIL_SUCCEED:
      return fetchEmployeeDetailSucceed(state, action);
    case actionsType.FETCH_EMPLOYEE_DETAIL_FAIL:
      return fetchEmployeeDetailFail(state, action);
    default:
      return state;
  }
}

export default EmployeeDetail;