import { Typography } from '@mui/material';
import React from 'react';
import { ErrorImage, ErrorPageContainer } from './styled';
import erro from '../../images/erro404.jpg'
import { Header } from '../../components/header/Header';


export const ErrorPage = () => {

  return (
    <div>
      <Header/>
      <ErrorPageContainer>
        <ErrorImage src={erro} alt={'Acidente de carro'}/>
        <Typography variant={'h3'} align={'center'}>404 <br/> Page not found </Typography>
      </ErrorPageContainer>
    </div>
  );
}