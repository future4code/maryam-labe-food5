import React from 'react';
import { Header } from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { BotaoSelecao } from '../../components/BotaoSelecao/BotaoSelecao';
import { Typography } from '@mui/material';
import { ContainerAddress, DivSpace, MargimSelecao } from './styled';


export const CartPage = () => {
  return (
    <div>
      <Header title={'Meu carrinho'}/>
      <ContainerAddress>
        <Typography
          variant={'body2'} 
          color={'#bdbdbd'}>
            Endereço de Entrega
        </Typography>

        <Typography>
          <strong>
            Rua Alessandra Vieira, 42
          </strong>
        </Typography>
      </ContainerAddress>

      <div>
        <Typography
          marginBottom={'7vh'}
          marginTop={'3vh'} 
          align={'center'}>
            Carrinho vazio
        </Typography>

        <Typography
          align={'right'}
          marginRight={'2%'}
          marginBottom={'1vh'}>
            Frete R$0,00
        </Typography>

        <DivSpace>
          <Typography>SUBTOTAL</Typography>
          <Typography 
            color={'#5cb646'}>
              R$00,00
          </Typography>
        </DivSpace>
      </div>

      <Typography
        marginTop={'3vh'}
        marginLeft={'2%'}>
        <strong>
          Forma de pagamento
        </strong>
      </Typography>

      <hr/>

      <MargimSelecao>
        <BotaoSelecao/>
      </MargimSelecao>
      
      <Footer />
    </div>
  );
}