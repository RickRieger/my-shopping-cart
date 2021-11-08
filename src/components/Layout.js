import React, { Fragment, useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Header from '../components/Header';
import { Box } from '@mui/system';
import Footer from '../components/Footer';
const Layout = ({ children }) => {
  return (
    <Fragment>
      <CssBaseline />
      <Box
        sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
      >
        <Header />
        <Box p={4} sx={{ flexGrow: 1 }}>
          {children}
        </Box>
        <Footer />
      </Box>
    </Fragment>
  );
};

export default Layout;
