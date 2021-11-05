import React from 'react';
import Footer from '../../components/footer/Footer';
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'
import { Header } from '../../components/header/Header';
import useProtectedPage from '../../hooks/useProtectedPage'

import Card1 from '../../components/card1/Card1';
import Card3 from '../../components/card3/Card3';
import { goToRestaurantPage } from '../../routers/Coordinator';
import { useHistory } from 'react-router-dom';







export const HomePage = () => {
  useProtectedPage(); 

  const restaurants = useRequestData([], `${BASE_URL}/restaurants`)
  // console.log(restaurants)

  const history = useHistory()

  return (
    <div>

      <Header title={'FutureEats'}/>


      {/* <h1>Home</h1>
      <Card1/>
      <br/>
      <Card1/>
      <br/>
      <Card1/>
      <br/>
      <Card3/> */}


      <h1>Home</h1>
      <button onClick={()=>goToRestaurantPage(history, 8)}>ver restaurante</button>
      <Footer />

    </div>
  );
}