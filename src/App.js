import React from 'react';
import './App.css';
import Layout from './Layout';
import EmployeeTable from './EmployeeTable';
import SideFilter from './SideFilter';
import ButtonAdd from './ButtonAdd';
import Aux from './hoc/A';

function App() {
  return (
    <Aux>
      <Layout>
        <SideFilter />
        <EmployeeTable />
      </Layout>
      <ButtonAdd />
    </Aux>
  );
}

export default App;
