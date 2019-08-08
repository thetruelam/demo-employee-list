import * as actionsType from './actionsType';

const fetchEmployeeDetailStart = () => ({
  type: actionsType.FETCH_EMPLOYEE_DETAIL_START
});

const fetchEmployeeDetailSucceed = (detail) => ({
  type: actionsType.FETCH_EMPLOYEE_DETAIL_SUCCEED,
  detail
});

const fetchEmployeeDetailFail = (error) => ({
  type: actionsType.FETCH_EMPLOYEE_DETAIL_FAIL,
  error
});

export const fetchEmployeeDetail = id => async (dispatch, getState) => {
  dispatch(fetchEmployeeDetailStart());

  try {
    const baseUrl = 'https://5d4908df2d59e50014f20f04.mockapi.io/employee-list/employee-detail/';
    const detailJson = await fetch(`${baseUrl}${id}`);
    const detail = await detailJson.json();
    dispatch(fetchEmployeeDetailSucceed(detail));
  } catch (error) {
    dispatch(fetchEmployeeDetailFail(error));
  }
}