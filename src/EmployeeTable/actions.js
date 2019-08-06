export const FETCH_EMPLOYEES_START = 'FETCH_EMPLOYEES_START';
export const FETCH_EMPLOYEES_SUCCEED = 'FETCH_EMPLOYEES_SUCCEED';
export const FETCH_EMPLOYEES_FAIL = 'FETCH_EMPLOYEES_FAIL';

const fetchEmployeesStart = () => ({
  type: FETCH_EMPLOYEES_START
});

const fetchEmployeesFail = (error) => ({
  type: FETCH_EMPLOYEES_FAIL,
  error
});

const fetchEmployeesSucceed = (listEmployees) => ({
  type: FETCH_EMPLOYEES_SUCCEED,
  listEmployees
});

export const fetchEmployees = () => dispatch => {
  dispatch(fetchEmployeesStart());

  fetch('https://5d4908df2d59e50014f20f04.mockapi.io/employee-list/employees')
    .then(res => res.json())
    .then(listEmployees => dispatch(fetchEmployeesSucceed(listEmployees)))
    .catch(error => dispatch(fetchEmployeesFail(error)));
}
