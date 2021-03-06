import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia';

const Service = (props) => {
    const {name,descripton,img}=props.service;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, border: 0,boxShadow:0 }}>
            <CardMedia
        component="img"
        style={{width:'auto',height:'80px',margin:'0 auto'}}
        image={img}
        alt="Paella dish"
      />
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        </Typography>
        <Typography variant="h5" component="div">
         {name}
        </Typography>        
        <Typography variant="body2" color="text.secondary">
         {descripton}
        </Typography>
      </CardContent>
    </Card>
       
      </Grid>
    );
};

export default Service;