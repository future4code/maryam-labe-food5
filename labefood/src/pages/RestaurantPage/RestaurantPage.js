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
import Loading from '../../components/loading/Loading';
import Card4 from '../../components/card4/Card4';


export const RestaurantPage = () => {
  useProtectedPage()

  const params = useParams()

  const rest = useRequestData({}, `${BASE_URL}/restaurants/${params.id}`)

  const restaurant = rest.restaurant
  console.log("rest", restaurant)

  const allCategory = []

  restaurant && restaurant.products.map((prod) => {
    allCategory.push(prod.category)
  })

  const categorys = [...new Set(allCategory)]




  return (
    <ScreenContainer>
      <Header title={'Restaurante'} />
      {restaurant ?
        <>
          <Card4 
          image={restaurant.logoUrl}
          name={restaurant.name}
          category={restaurant.category}
          deliveryTime={restaurant.deliveryTime}
          shipping={restaurant.shipping}
          address={restaurant.address}
          />
          {/* <Image src={restaurant.logoUrl} />
          <Typography>
            {restaurant && restaurant.name}
          </Typography> */}

          {
            categorys.map((cat) => {
              return (
              <>
                
                <Typography
                  marginTop={'3vh'}
                  marginLeft={'2%'}>
                  <strong>
                  {cat}
                  </strong>
                </Typography>
                <hr/>
              
                
                {
                  restaurant && restaurant.products.filter((prod) => {
                    return prod.category === cat
                  })
                  .map((prod) => {
                    return (
                      <Card2
                        name={prod.name}
                        image={prod.photoUrl}
                        description={prod.description}
                        price={prod.price}
                      />
                    )
                  })
                }
              
              </>
              )
            })
          }


          {/* {restaurant && restaurant.products.map((prod) => {
            // console.log("prod", prod)
            return (
              <Card2
                name={prod.name}
                image={prod.photoUrl}
                description={prod.description}
                price={prod.price}
              />
            )
          })}

          {
            restaurant && restaurant.products.filter((prod) => {
              return prod.category === "Refeição"
            })
              .map((prod) => {
                // console.log("Refeição", prod)
              })
          } */}

          {
            restaurant && restaurant.products.filter((prod) => {
              return prod.category === "Doce"
            })
              .map((prod) => {
                console.log("Doce", prod)
              })
          }
        </>
        :
        <Loading />
      }
    </ScreenContainer>
  );
}