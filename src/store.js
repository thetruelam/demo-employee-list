import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import SideFilter from './SideFilter/reducers';
import EmployeeTable from './EmployeeTable/reducers';
import EmployeeDetail from './EmployeeDetail/reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  SideFilter,
  EmployeeTable,
  EmployeeDetail
});

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

export default store;