import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import { width } from '@mui/system';
import { Button, Typography } from '@mui/material';

const appointmentBg={
    background: `url(${bg})`,
   backgroundColor:'#5CE7ED',
    backgroundBlendMood: 'darken,luminosity',
    backgroundRepeat:'no-repeat',
    marginTop: 150,
   
			
		
			

}
const AppointmentBanner = () => {
    return (
        <Box className="banner" style={appointmentBg} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img 
            style={{width:450,marginTop:'-110px'}}
            src={doctor} alt="" />
          </Grid>
          <Grid item xs={12} md={6} sx={{display:'flex',justifyContent:'flex-start',textAlign:'left',alignItems: 'center'}}>
             <Box>
             <Typography variant="h6" sx={{mb:5}}  style={{color:'#5CE7ED'}}>
                  Appointment
              </Typography>
              <Typography variant="h6" sx={{my:3}} style={{fontSize:30,fontWeight:600}}>
                 Make an  Appointment Today
              </Typography>
              <Typography variant="h6" sx={{my:3}} style={{fontWeight:300}}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis porro ducimus 
                dolores quis pariatur quo sit saepe neque veritatis illo obcaecati laboriosam fuga
                 nulla, dicta ex, esse amet ab minus.
              </Typography>
              <Button variant="contained"  style={{backgroundColor:'#5CE7ED'}}>Learn more</Button>
             </Box>
          
          </Grid>
        </Grid>
      </Box>
    );
};

export default AppointmentBanner;