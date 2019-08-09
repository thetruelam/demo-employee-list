import { parseAsync } from 'json2csv';

import * as actionsType from './actionsType';
import { setError } from '../withErrorHandler/actions';

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

export const fetchEmployees = () => async (dispatch, getState) => {
  const { EmployeeTable: { listEmployees } } = getState();

  if (listEmployees.length === 0) {
    try {
      dispatch(fetchEmployeesStart());

      const dataJson = await fetch('https://5d4908df2d59e50014f20f04.mockapi.io/employee-list/employees');
      const listEmployees = await dataJson.json();

      dispatch(fetchEmployeesSucceed(listEmployees));
    } catch (error) {
      dispatch(fetchEmployeesFail(error));
      dispatch(setError(error))
    }
  }
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

export const toggleSelectOneRow = (employeeId) => ({
  type: actionsType.TOGGLE_SELECT_ONE_ROW,
  employeeId
});

export const toggleSelectAll = () => ({
  type: actionsType.TOGGLE_SELECT_ALL
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
  try {
    const { EmployeeTable: { listEmployees } } = getState();
    const exportData = [...listEmployees];

    if (exportData.length > 0) {
      dispatch(downloadEmployeesStart());
      const fields = Object.keys(exportData[0]);
      const opts = { fields };
      const csv = await parseAsync(exportData, opts);
      // console.log(csv);
      dispatch(downloadEmployeesSucceed());
      // dispatch(toggleSelectAll());
      return csv;
    } else {
      dispatch(downloadEmployeesFail('There are no employees to export'));
      dispatch(setError('There are no employees to export'))
      return {
        error: 'There are no employees to export'
      }
    }
  } catch (error) {
    dispatch(downloadEmployeesFail(error));
    dispatch(setError(error));
    return error;
  }
}