import React from 'react';
import { useParams } from 'react-router';
import { Header } from '../../components/header/Header';
import useProtectedPage from '../../hooks/useProtectedPage';
import useRequestData from '../../hooks/useRequestData';
import { BASE_URL } from '../../constants/urls';
import Card2 from '../../components/card2/Card2'
import { Image } from './styled';
import { Typography } from '@mui/material';
import { ScreenContainer } from './styled';


export const RestaurantPage = () => {
  useProtectedPage()

  const params = useParams()

  const rest = useRequestData({}, `${BASE_URL}/restaurants/${params.id}`)

  const restaurant = rest.restaurant
  console.log("rest", restaurant)


  // const productsCards = () => {

  // }


  return (
    <ScreenContainer>
      <Header title={'Restaurante'} />
      <Image src={restaurant && restaurant.logoUrl} />
      <Typography>
        {restaurant && restaurant.name}
      </Typography>

      {restaurant && restaurant.products.map((prod) => {
        console.log("prod", prod)
        return (
          <Card2
            name={prod.name}
            image={prod.photoUrl}
            description={prod.description}
            price={prod.price}
          />
        )
      })}


    </ScreenContainer>
  );
}