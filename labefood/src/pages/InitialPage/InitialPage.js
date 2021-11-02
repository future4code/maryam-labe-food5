import React from 'react';
import { InitialPageContainer, Logo } from './styled';
import futureEats from '../../images/futureEats.png'
import { CircularProgress } from '@material-ui/core';
import { useHistory } from 'react-router-dom';



export const InitialPage = () => {
  const history = useHistory()


  setTimeout(function () {
    window.location.href = '/'

  }, 3000);

  return (
    <InitialPageContainer>
      <Logo src={futureEats} />
      <CircularProgress color={'primary'}/>
    </InitialPageContainer>
  );
}