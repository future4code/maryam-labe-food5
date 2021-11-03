import React from 'react';
import { Router } from './routers/Router';
import { ThemeProvider } from '@material-ui/styles';
import theme from './constants/theme';

export default function App() {
  return (
    <div>
    <ThemeProvider theme={theme}>
      <Router/>
    </ThemeProvider>
    </div>
  );
}

