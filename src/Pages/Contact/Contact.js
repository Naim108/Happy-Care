import { Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Contact = () => {
    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
       
          <Grid item xs={2} sm={4} md={4}>
          <Paper elevation={3} sx={{py:4}}> 
            <Typography sx={{fontWeight:700}} variant="h5" gutterBottom component="div">
                Opening Hours
            </Typography >
            <Typography  variant="p" gutterBottom component="div">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, commodi.
            </Typography >
            </Paper>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
          <Paper elevation={3} sx={{py:4}}> 
            <Typography sx={{fontWeight:700}} variant="h5" gutterBottom component="div">
                Opening Hours
            </Typography >
            <Typography  variant="p" gutterBottom component="div">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, commodi.
            </Typography >
            </Paper>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
          <Paper elevation={3} sx={{py:4}}> 
            <Typography sx={{fontWeight:700}} variant="h5" gutterBottom component="div">
                Opening Hours
            </Typography >
            <Typography  variant="p" gutterBottom component="div">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, commodi.
            </Typography >
            </Paper>
          </Grid>
      </Grid>
    </Box>
        </Container>
    );
};

export default Contact;