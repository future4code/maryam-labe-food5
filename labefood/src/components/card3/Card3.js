import * as React from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {AccessTimeIcon} from '@material-ui/icons/AccessTime';

export default function Card3() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" >
          Pedido em andamento 
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Chico's bar
        </Typography>
        <Typography gutterBottom variant="h1" component="div" variant="body2">
          SUBTOTAL R$63,00
        </Typography>
      </CardContent>
    </Card>
  );
}