import {
  FETCH_EMPLOYEES_FAIL,
  FETCH_EMPLOYEES_START,
  FETCH_EMPLOYEES_SUCCEED
} from './actions'

const initState = {
  isFetching: true,
  listEmployees: [],
  error: ''
}

const EmployeeTable = (state = initState, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEES_START:
      return {
        ...state,
        isFetching: true
      }
    case FETCH_EMPLOYEES_SUCCEED:
      return {
        ...state,
        isFetching: false,
        listEmployees: action.listEmployees
      }
    case FETCH_EMPLOYEES_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.error.message
      }
    default:
      return state;
  }
}

export default EmployeeTable;