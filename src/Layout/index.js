import React from 'react';
import Aux from '../hoc/A';
// import LayoutHeader from './LayoutHeader';
import ToolBar from '../ToolBar';

import classes from './style.module.scss';

const Layout = ({ children }) => {
  return (
    <Aux>
      {/* <LayoutHeader /> */}
      <ToolBar />
      <main className={classes.content}>
        {children}
      </main>
    </Aux>
  )
}

export default Layout;
