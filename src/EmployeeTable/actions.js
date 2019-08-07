import { parseAsync } from 'json2csv';

import * as actionsType from './actionsType';

/**
 * Fetch actions
 */

const fetchEmployeesStart = () => ({
  type: actionsType.FETCH_EMPLOYEES_START
});

const fetchEmployeesFail = (error) => ({
  type: actionsType.FETCH_EMPLOYEES_FAIL,
  error
});

const fetchEmployeesSucceed = (listEmployees) => ({
  type: actionsType.FETCH_EMPLOYEES_SUCCEED,
  listEmployees
});

export const fetchEmployees = () => dispatch => {
  dispatch(fetchEmployeesStart());

  fetch('https://5d4908df2d59e50014f20f04.mockapi.io/employee-list/employees')
    .then(res => res.json())
    .then(listEmployees => dispatch(fetchEmployeesSucceed(listEmployees)))
    .catch(error => dispatch(fetchEmployeesFail(error)));
}

/**
 * UI actions
 */

// export const toggleSelectColumns = () => ({
//   type: actionsType.TOGGLE_SELECT_COLUMNS
// });
export const toggleSelectColumns = () => {
  return {
    type: actionsType.TOGGLE_SELECT_COLUMNS
  }
};

export const importEmployees = () => ({
  type: actionsType.IMPORT_EMPLOYEES
});

/**
 * delete employees
 */

export const deleteEmployees = () => ({
  type: actionsType.DELETE_EMPLOYEES
});

/**
 * select column
 */

export const selectColumn = (employee) => ({
  type: actionsType.SELECT_COLUMN,
  employee
});

export const unselectColumn = (employee) => ({
  type: actionsType.UNSELECT_COLUMN,
  employee
});

export const selectAll = () => ({
  type: actionsType.SELECT_ALL
});

export const unselectAll = () => ({
  type: actionsType.UNSELECT_ALL
});

/**
 * download employees
 */

const downloadEmployeesStart = () => ({
  type: actionsType.DOWNLOAD_EMPLOYEES_START
});

const downloadEmployeesSucceed = () => ({
  type: actionsType.DOWNLOAD_EMPLOYEES_SUCCEED
});

const downloadEmployeesFail = (error) => ({
  type: actionsType.DOWNLOAD_EMPLOYEES_FAIL
});

export const downloadEmployees = () => async (dispatch, getState) => {
  dispatch(downloadEmployeesStart());
  try {
    // const { EmployeeTable: { listEmployees } } = getState();
    const { EmployeeTable: { selectedEmployees } } = getState();
    // const exportData = listEmployees.map(employee => {
    //   const newEmployee = { ...employee }
    //   delete newEmployee['Image'];
    //   return newEmployee;
    // });
    const exportData = [...selectedEmployees];

    if (exportData.length > 0) {
      const fields = Object.keys(exportData[0]);
      const opts = { fields };
      const csv = await parseAsync(exportData, opts);
      // console.log(csv);
      dispatch(downloadEmployeesSucceed());
      // dispatch(unselectAll());
      return csv;
    } else {
      dispatch(downloadEmployeesFail('There are no employees to export'));
      return {
        error: 'There are no employees to export'
      }
    }
  } catch (error) {
    dispatch(downloadEmployeesFail(error));
    return error;
  }
}