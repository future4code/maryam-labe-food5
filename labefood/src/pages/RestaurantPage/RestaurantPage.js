import React from 'react';
import { useParams } from 'react-router';
import { Header } from '../../components/header/Header';
import useProtectedPage from '../../hooks/useProtectedPage';
import useRequestData from '../../hooks/useRequestData';
import { BASE_URL } from '../../constants/urls';
import Card1 from '../../components/card1/Card1';


export const RestaurantPage = () => {
  useProtectedPage()

  const params = useParams()

  const restaurant = useRequestData([], `${BASE_URL}/restaurants/${params.id}`)
  console.log(restaurant)

  .filter((produto) => {
    return produto.nome.toLowerCase().includes(props.busca.toLowerCase())
}) 


  return (
    <div>
      <Header title={'Restaurante'}/>
      <h1>Feed restaurante</h1>
      <Card1
        name={prod.name}
        imagem={prod.photoUrl}
        description={prod.description}
        price={prod.price}
      />  
    </div>
  );
}