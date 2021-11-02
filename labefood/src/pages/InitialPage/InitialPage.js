import React from 'react';
import { InitialPageContainer, Logo } from './styled';
import futureEats from '../../images/futureEats.png'
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { goToLoginPage } from '../../routers/Coordinator';

export const InitialPage = () => {
  const history = useHistory()
  return (
    <><InitialPageContainer>
      <Logo src={futureEats} />
    </InitialPageContainer><Button onClick={()=>goToLoginPage(history)}>Entrar</Button></>
  );
}