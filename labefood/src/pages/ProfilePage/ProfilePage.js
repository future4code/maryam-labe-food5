import React from 'react';
import { Header } from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { Typography } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { DivAddress, DivSetting } from './styled';



export const ProfilePage = () => {
  return (
    <div>
      <Header title={'Meu Perfil'}/>

      <div>
        <DivSetting>
          <Typography>Bruna Oliveira</Typography>
          <EditOutlinedIcon/>
        </DivSetting>

        <Typography 
          marginLeft={'4%'}
          marginBottom={'1%'}>
            bruna_o@gmail.com
        </Typography>

        <Typography marginLeft={'4%'} marginBottom={'3%'}>333.333.333-33</Typography>
      </div>
      
      <DivAddress>
        <Typography
          variant={'body2'} 
          color={'#bdbdbd'}>
            Endereço Cadastrado
        </Typography>

        <Typography>
            Rua Alessandra Vieira, 42 - Santana
        </Typography>
      </DivAddress>

      <Typography
        marginTop={'3vh'}
        marginLeft={'4%'}>
          Histórico de pedidos
      </Typography>

      <hr/>

      <Typography marginTop={'3vh'} align={'center'}>Você não realizou nenhum pedido</Typography>

      <Footer />
    </div>
  );
}