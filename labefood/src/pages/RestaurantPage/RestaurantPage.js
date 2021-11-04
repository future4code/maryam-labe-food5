import React from 'react';
import { useParams } from 'react-router';
import { Header } from '../../components/header/Header';
import useProtectedPage from '../../hooks/useProtectedPage';
import useRequestData from '../../hooks/useRequestData';
import { BASE_URL } from '../../constants/urls';


export const RestaurantPage = () => {
  useProtectedPage()

  const params = useParams()

  const restaurant = useRequestData([], `${BASE_URL}/restaurants/${params.id}`)
  console.log(restaurant)
  
  
  return (
    <div>
      <Header title={'Restaurante'}/>
      <h1>Feed restaurante</h1>
    </div>
  );
}