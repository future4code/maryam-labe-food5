import React from 'react';
import { Header } from '../../components/header/Header';
import Footer from '../../components/footer/Footer';


export const ProfilePage = () => {
  return (
    <div>
      <Header title={'Meu Perfil'}/>
      <h1>Perfil</h1>
      <Footer />
    </div>
  );
}