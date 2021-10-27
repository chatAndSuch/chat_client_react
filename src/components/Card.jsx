import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import '../styles/Card.scss'
import theme from '../styles/Styles'


  


export default function ImageCard(props) {
  return (
    <ThemeProvider theme={theme}>
    <Card sx={{ maxWidth: 345 }} className='centered'>
      <CardActionArea>
        <CardMedia
          component="img"
          height={props.height}
          image={props.img}
          alt={props.alt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {props.body}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {props.propButtOne}
        {props.propButtTwo}
        {props.propButtThree}
      </CardActions>
    </Card>
    </ThemeProvider>
  );
}