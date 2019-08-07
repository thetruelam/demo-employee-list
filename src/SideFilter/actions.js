export const TOGGLE_SIDE_FILTER = 'TOGGLE_SIDE_FILTER';
export const toggleSideFilter = () => ({
  type: TOGGLE_SIDE_FILTER
});

export const FETCH_SELECT_START = 'FETCH_SELECT_START';
const fetchSelectStart = () => ({
  type: FETCH_SELECT_START
});

export const FETCH_SELECT_SUCCEED = 'FETCH_SELECT_SUCCEED';
const fetchSelectSucceed = (data) => ({
  type: FETCH_SELECT_SUCCEED,
  ...data
});

export const FETCH_SELECT_FAIL = 'FETCH_SELECT_FAIL';
const fetchSelectFail = (error) => ({
  type: FETCH_SELECT_FAIL,
  error
});

export const fetchSelect = () => async (dispatch, getState) => {
  dispatch(fetchSelectStart());

  const { SideFilter: { positions, departments } } = getState();

  if (positions.length === 0 && departments.length === 0) {
    try {
      const baseUrl = 'https://5d4908df2d59e50014f20f04.mockapi.io/employee-list/';
      const positionsJson = await fetch(`${baseUrl}positions`);
      const departmentsJson = await fetch(`${baseUrl}departments`);

      const positions = await positionsJson.json();
      const departments = await departmentsJson.json();

      dispatch(fetchSelectSucceed({
        positions,
        departments
      }));
    } catch (error) {
      dispatch(fetchSelectFail(error));
    }
  } else {
    dispatch(fetchSelectSucceed({ positions, departments }));
  }
}

export const INPUT_CHANGE = 'INPUT_CHANGE';
export const inputChange = data => ({
  type: INPUT_CHANGE,
  data
});
