import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CardActionArea } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { styled } from '@material-ui/core/styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body3,
    elevation: 0,
    color: theme.palette.text.secondary,
}));
const Item2 = styled(Paper)(({ theme }) => ({
    ...theme.typography.body3,
    textAlign: 'right',
    color: theme.palette.text.secondary,
    
}));
export default function Card1({name, image, description, price}) {
    return (
        <Card sx={{ flexGrow: 2, maxWidth: 345}}>
            <CardActionArea sx={{maxWidth: 90}}>
                <CardMedia
                component="img"
                height="140"
                width="140"
                image={image}
                alt="green iguana"
                />
            <CardContent>
            <Typography gutterBottom variant="h7" component="div">
                {name}
            </Typography>
            <Grid container spacing={2} >
                <Grid item xs={8} >
                    <Item elevation={0}>{description}</Item>
                </Grid>
                <Grid item xs={4}  >
                  <Typography gutterBottom variant="h7" component="div">
                    R${price},00
                  </Typography>
                  <Stack spacing={2} direction="row" component="div">
                    <Button variant="outlined">Adicionar</Button>
                  </Stack>
                </Grid>
            </Grid>
            </CardContent>
        </CardActionArea>
        </Card>
    );
}