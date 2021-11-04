import React from 'react';
import { Header } from '../../components/header/Header';
import Footer from '../../components/footer/Footer';


export const CartPage = () => {
  return (
    <div>
      <Header title={'Meu carrinho'}/>
      <h1>Cart</h1>
      <Footer />
    </div>
  );
}