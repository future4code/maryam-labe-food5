import React, { useState } from 'react';
import { Header } from '../../components/header/Header';
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'


export const SearchPage = () => {

  const [busca, setBusca] = useState("")

  const restaurants = useRequestData([], `${BASE_URL}/restaurants`)
  console.log(restaurants)

  return (
    <div>
      <Header title={'Busca'}/>
      <h1>Busca por Restaurantes</h1>

      

      <label>
        <input type={"text"}/>
      </label>
    </div>
  );
}