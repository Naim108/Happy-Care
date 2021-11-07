import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png'
import banner from '../../../images/bg.png'
import { Button, Container, Typography } from '@mui/material';
import { height } from '@mui/system';


const bannerBg={
    background:`url(${banner})`,
    marginTop:'10px',
   
    
}
const verticalCenter={
    display:'flex',
    alignItems: 'center',
    height: 400,
   
}

const Banner = () => {
    return (
       <Container style={bannerBg}>
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item sx={{...verticalCenter,textAlign:'left'}} xs={12} md={5}>
            <Box>
            <Typography variant="h3">
                Your New Smile <br />
                Starts Here
            </Typography>
            <Typography variant="h6" style={{fontSize:14,color:'gray', fontWeight:300}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti officiis
                 impedit totam? Repudiandae, animi consectetur. Alias, consectetur et? Et, quibusdam!
            </Typography>
            <Button variant="contained"  style={{backgroundColor:'#5CE7ED'}}>GET APPOINTMENT</Button>
            </Box>
        
        </Grid>
        <Grid item xs={12} md={7} style={verticalCenter}>
            <img style={{width:'450px'}} src={chair} alt="" />
        
        </Grid>
      </Grid>
    </Box>
       </Container>
    );
};

export default Banner;