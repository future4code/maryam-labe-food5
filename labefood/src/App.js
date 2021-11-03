
import { Button, Typography } from '@material-ui/core';
import React from 'react';
import { Router } from './routers/Router';

import { ThemeProvider } from '@material-ui/styles';
import theme from './constants/theme';
import Button from '@material-ui/core/Button';





export default function App() {
  return (

    <div>


    <ThemeProvider theme={theme}>

      {/* <Typography variant={'h1'}>FutureEats</Typography>
      <Button>Entrar</Button> */}
      <Router/>

    </ThemeProvider>

      <Button variant="contained" color="primary">
          Primary
      </Button>
    </div>

  );
}

