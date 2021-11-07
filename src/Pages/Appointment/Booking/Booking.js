import { Button, Grid, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({booking,date}) => {
    const {name,time,space}=booking;
    
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);
    return (
        <>
                <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{py:4}}> 
            <Typography sx={{color:'info.main',fontWeight:700}} variant="h5" gutterBottom component="div">
                {name}
            </Typography >
            <Typography sx={{fontWeight:600}} variant="h6" gutterBottom component="div">
                {time}
            </Typography >
            <Typography variant="caption" gutterBottom display="block">
                {space} SPACES AVAILEABLE
            </Typography >
            <Button onClick={handleBookingOpen} variant="contained">Book Appointment</Button>
            </Paper>

        </Grid>
        <BookingModal
        handleBookingClose={handleBookingClose}
        openBooking={openBooking}
        booking={booking}
        date={date}
        ></BookingModal>
        </>
    );
};

export default Booking;