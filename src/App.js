import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';
import Layout from './Layout';
import EmployeeTable from './EmployeeTable';
import SideFilter from './SideFilter';
import ButtonAdd from './ButtonAdd';
import Aux from './hoc/A';
import EmployeeDetail from './EmployeeDetail';

function App() {
  let home = (
    <Aux>
      <SideFilter />
      <EmployeeTable />
      <ButtonAdd />
    </Aux>
  )

  return (
    <Layout>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/employees" />} />
        <Route exact path="/employees" render={() => home} />
        <Route exact path="/employees/:id" render={() => <EmployeeDetail />} />
      </Switch>
    </Layout>
  );
}

export default App;
