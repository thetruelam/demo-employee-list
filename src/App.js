import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';
import Layout from './Layout';
import EmployeeTable from './EmployeeTable';
import SideFilter from './SideFilter';
import ButtonAdd from './ButtonAdd';
import EmployeeDetail from './EmployeeDetail';
import ErrorPage from './ErrorPage';
import NotFoundPage from './NotFoundPage';

function App() {
  let home = (
    <>
      <SideFilter />
      <EmployeeTable />
      <ButtonAdd />
    </>
  )

  return (
    <Layout>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/employees" />} />
        <Route exact path="/employees" render={() => home} />
        <Route exact path="/employees/:id" render={() => <EmployeeDetail />} />
        <Route exact path="/error" render={() => <ErrorPage />} />
        <Route render={() => <NotFoundPage />} />
      </Switch>
    </Layout>
  );
}

export default App;
