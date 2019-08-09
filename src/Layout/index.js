import React from 'react';
// import LayoutHeader from './LayoutHeader';
import ToolBar from '../ToolBar';

import classes from './style.module.scss';

const Layout = ({ children }) => {
  return (
    <>
      {/* <LayoutHeader /> */}
      <ToolBar />
      <main className={classes.content}>
        {children}
      </main>
    </>
  )
}

export default Layout;
