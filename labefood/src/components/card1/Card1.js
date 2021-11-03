import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CardActionArea } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { styled } from '@material-ui/core/styles';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body3,
    // padding: theme.spacing(1),
    elevation: 0,
    color: theme.palette.text.secondary,
}));
const Item2 = styled(Paper)(({ theme }) => ({
    ...theme.typography.body3,
    textAlign: 'right',
    color: theme.palette.text.secondary,
    
}));
export default function Card1() {
    return (
        <Card sx={{ flexGrow: 1, maxWidth: 345}}>
            <CardActionArea sx={{maxWidth: 90}}>
                <CardMedia
                component="img"
                height="140"
                image="https://picsum.photos/400/140"
                alt="green iguana"
                />
            <CardContent>
            <Typography gutterBottom variant="h7" component="div">
                Chico's bar
            </Typography>
            <Grid container spacing={2} >
                <Grid item xs={8} >
                    <Item elevation={0}>50-60min</Item>
                </Grid>
                <Grid item xs={4}  >
                    <Typography  gutterBottom variant="h7" component="div">  
                        <Item2 elevation={0}>Frete R$6,00</Item2>
                    </Typography>
                </Grid>
            </Grid>
            </CardContent>
        </CardActionArea>
        </Card>
    );
}
