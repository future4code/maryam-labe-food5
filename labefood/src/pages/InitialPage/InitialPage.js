import React from 'react';
import { InitialPageContainer, Logo } from './styled';
import futureEats from '../../images/futureEats.png'
import { CircularProgress } from '@material-ui/core';




export const InitialPage = () => {
  

  setTimeout(function () {
    window.location.href = '/home'

  }, 3000);

  return (
    <InitialPageContainer>
      <Logo src={futureEats} />
      <CircularProgress color={'primary'}/>
    </InitialPageContainer>
  );
}