import * as actionsType from './actionsType';

const initState = {
  isFetching: true,
  listEmployees: [],
  error: '',
  isSelectColumns: false,
  isSelectAll: false,
}

const fetchEmployeesStart = (state, action) => {
  return {
    ...state,
    isFetching: true
  }
}

const fetchEmployeesSucceed = (state, action) => {
  const listEmployees = action.listEmployees.map(employee => ({
    data: {
      ...employee
    },
    isSelected: false
  }))
  return {
    ...state,
    isFetching: false,
    listEmployees
  }
}

const fetchEmployeesFail = (state, action) => {
  return {
    ...state,
    isFetching: false,
    error: action.error.message
  }
}

const toggleSelectColumns = (state, action) => {
  const updateState = {
    ...state,
    isSelectColumns: !state.isSelectColumns
  }

  if (state.isSelectColumns) {
    updateState.listEmployees.map(row => ({
      ...row,
      isSelected: false
    }));
  }

  return updateState;
}

const toggleSelectOneRow = (state, action) => {
  const { employeeId } = action;
  let isSelectAll = true;
  let listEmployees = state.listEmployees.map(row => {
    const { data, isSelected } = row;
    const updateRow = { ...row };
    if (employeeId === data['Employee ID']) {
      updateRow.isSelected = !isSelected;
    }
    if (!updateRow.isSelected) {
      isSelectAll = false;
    }
    return updateRow;
  });

  return {
    ...state,
    listEmployees,
    isSelectAll
  }
}

const toggleSelectAll = (state, action) => {
  const { isSelectAll } = state;
  const listEmployees = state.listEmployees.map(row => ({
    ...row,
    isSelected: !isSelectAll
  }))

  return {
    ...state,
    listEmployees,
    isSelectAll: !isSelectAll
  }
}

const deleteEmployees = (state, action) => {
  const listEmployees = state.listEmployees.filter(row => !row.isSelected);
  return {
    ...state,
    listEmployees
  }
}

const downloadEmployeesStart = (state, action) => {
  return state;
}

const downloadEmployeesSucceed = (state, action) => {
  return state;
}

const downloadEmployeesFail = (state, { error }) => {
  return {
    ...state,
    error
  }
}

const EmployeeTable = (state = initState, action) => {
  switch (action.type) {
    case actionsType.FETCH_EMPLOYEES_START:
      return fetchEmployeesStart(state, action);
    case actionsType.FETCH_EMPLOYEES_SUCCEED:
      return fetchEmployeesSucceed(state, action);
    case actionsType.FETCH_EMPLOYEES_FAIL:
      return fetchEmployeesFail(state, action);
    case actionsType.TOGGLE_SELECT_COLUMNS:
      return toggleSelectColumns(state, action);
    case actionsType.TOGGLE_SELECT_ONE_ROW:
      return toggleSelectOneRow(state, action);
    case actionsType.TOGGLE_SELECT_ALL:
      return toggleSelectAll(state, action);
    case actionsType.DELETE_EMPLOYEES:
      return deleteEmployees(state, action);
    case actionsType.DOWNLOAD_EMPLOYEES_START:
      return downloadEmployeesStart(state, action);
    case actionsType.DOWNLOAD_EMPLOYEES_SUCCEED:
      return downloadEmployeesSucceed(state, action);
    case actionsType.DOWNLOAD_EMPLOYEES_FAIL:
      return downloadEmployeesFail(state, action);
    default:
      return state;
  }
}

export default EmployeeTable;