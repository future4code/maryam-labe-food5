
import { Button, Typography } from '@material-ui/core';
import React from 'react';
import { Router } from './routers/Router';


export default function App() {
  return (
    <div>
      <Typography variant={'h1'}>FutureEats</Typography>
      <Button>Entrar</Button>
      <Router/>
    </div>
  );
}

