
import { Typography } from '@material-ui/core';
import React from 'react';
import { Router } from './routers/Router';
import Button from '@material-ui/core/Button';


export default function App() {
  return (
    <div>
      <Typography variant={'h1'}>FutureEats</Typography>
      <Router/>
      <Button variant="contained" color="primary">
          Primary
      </Button>
    </div>
  );
}

