import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import Typography from '@mui/material/Typography'
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'

const services=[
    {
        name: 'fluoride Treatment',
        descripton: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, voluptatem quibusdam nam non sint aliquid autem similique voluptatibus placeat a.',
        img: fluoride
    },
    {
        name: 'Cavity Treatment',
        descripton: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, voluptatem quibusdam nam non sint aliquid autem similique voluptatibus placeat a.',
        img: cavity
    },
    {
        name: 'Whitening Treatment',
        descripton: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, voluptatem quibusdam nam non sint aliquid autem similique voluptatibus placeat a.',
        img: whitening
    },
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}  mt={5}>
      <Container>
      <Typography sx={{fontWight:500,color:'info.main', m:2}} variant="h5" component="div" >
         Our Service
        </Typography>   
      <Typography variant="h4" component="div" sx={{fontWight:600, m:2}}>
         Services we provided
        </Typography>   
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {
            services.map(service=><Service 
                key={service.name}
                service={service}
            ></Service>)
        }
      </Grid>

      </Container>
    </Box>
    );
};

export default Services;