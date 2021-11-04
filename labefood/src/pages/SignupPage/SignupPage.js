import React from 'react';
import { Header } from '../../components/header/Header';
import {LogoImage, ScreenContainer} from './styled'
import Logo from '../../Logo/img/Eats.png'
import SignUpForm from './SignUpForm';


export const SignupPage = () => {
  return (
    <div>
      <Header/>
      <ScreenContainer>
           <LogoImage src={Logo} />
           <SignUpForm />
      </ScreenContainer>
    </div>
  );
}