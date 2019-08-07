import * as actionsType from './actionsType';

const initState = {
  isFetching: true,
  listEmployees: [],
  error: '',
  isSelectColumns: false,
  isSelectAll: false,
  selectedEmployees: []
}

const fetchEmployeesStart = (state, action) => {
  return {
    ...state,
    isFetching: true
  }
}

const fetchEmployeesSucceed = (state, action) => {
  return {
    ...state,
    isFetching: false,
    listEmployees: action.listEmployees
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
    updateState.selectedEmployees = []
  }

  return updateState;
}

const selectColumn = (state, action) => {
  let isSelectAll = false;
  let selectedEmployees = [...state.selectedEmployees]

  selectedEmployees.push(action.employee);
  if (selectedEmployees.length === state.listEmployees.length) {
    isSelectAll = true;
  }
  return {
    ...state,
    selectedEmployees,
    isSelectAll
  }
}

const unselectColumn = (state, action) => {
  let selectedEmployees = state.selectedEmployees.filter(
    employee => employee['Employee ID'] !== action.employee['Employee ID']
  );
  return {
    ...state,
    selectedEmployees,
    isSelectAll: false
  }
}

const selectAll = (state, action) => {
  let selectedEmployees = state.listEmployees.map(employee => {
    let newEm = { ...employee };
    delete newEm['Image'];
    return newEm;
  });

  return {
    ...state,
    selectedEmployees,
    isSelectAll: true
  }
}

const unselectAll = (state, action) => {
  return {
    ...state,
    selectedEmployees: [],
    isSelectAll: false
  }
}

const deleteEmployees = (state, action) => {
  let filterArray = [...state.selectedEmployees];
  let listEmployees = state.listEmployees.filter(
    e => filterArray.findIndex(
      _e => e['Employee ID'] === _e['Employee ID']
    ) === -1
  );
  return {
    ...state,
    listEmployees,
    selectedEmployees: []
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
    case actionsType.SELECT_COLUMN:
      return selectColumn(state, action);
    case actionsType.UNSELECT_COLUMN:
      return unselectColumn(state, action);
    case actionsType.SELECT_ALL:
      return selectAll(state, action);
    case actionsType.UNSELECT_ALL:
      return unselectAll(state, action);
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