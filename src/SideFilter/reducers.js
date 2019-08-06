import {
  TOGGLE_SIDE_FILTER,
  FETCH_SELECT_FAIL,
  FETCH_SELECT_START,
  FETCH_SELECT_SUCCEED,
  INPUT_CHANGE
} from './actions'

const initState = {
  showSideFilter: false,
  isFetching: true,
  positions: [],
  departments: [],
  error: null,
  filters: {
    name: '',
    employeeid: '',
    positions: '',
    departments: ''
  }
}

const SideFilter = (state = initState, action) => {
  switch (action.type) {
    case TOGGLE_SIDE_FILTER:
      return {
        ...state,
        showSideFilter: !state.showSideFilter,
        filters: {
          name: '',
          employeeid: '',
          positions: 'Any',
          departments: 'Any'
        }
      }
    case FETCH_SELECT_START:
      return {
        ...state,
        isFetching: true
      }
    case FETCH_SELECT_SUCCEED:
      return {
        ...state,
        isFetching: false,
        positions: action.positions,
        departments: action.departments
      }
    case FETCH_SELECT_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    case INPUT_CHANGE:
      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.data
        }
      }
    default:
      return state;
  }
}

export default SideFilter;

