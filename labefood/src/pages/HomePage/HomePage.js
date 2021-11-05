import React from 'react';
import Footer from '../../components/footer/Footer';
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'
import { Header } from '../../components/header/Header';
import useProtectedPage from '../../hooks/useProtectedPage'

import Card1 from '../../components/card1/Card1';
import Card3 from '../../components/card3/Card3';
import { SearchPage } from '../SearchPage/SearchPage';
import { goToSearchPage } from '../../routers/Coordinator';
import { goToRestaurantPage } from '../../routers/Coordinator';
import { useHistory } from 'react-router-dom';
import containerButtons from "./styled" 
import {Buttons} from "./styled" 
import {cardContained} from "./styled" 







export const HomePage = () => {
  useProtectedPage(); 

  const restaurants = useRequestData([], `${BASE_URL}/restaurants`)
  console.log("restaurantes", restaurants)

  const history = useHistory()

  return (
    <div>

      <Header title={'FutureEats'}/>
      {/* <containerButtons> */}
        <Buttons><h3>Massas</h3></Buttons>
        {/* <Buttons><h3>Burger</h3></Buttons> */}
        <Buttons><h3>Saudaveis</h3></Buttons>
        <Buttons><h3>Asiatica</h3></Buttons>
        <Buttons><h3>Mexicana</h3></Buttons>
      {/* </containerButtons> */}
      <Card1
      // title=
      // image=
      // onClick=
      />
      <br/>


      <button onClick={() => goToSearchPage(history)}>Busca</button>

      <Footer />

    </div>
  );
}