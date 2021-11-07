import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import useAuth from '../../../hooks/useAuth';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({openBooking,handleBookingClose,booking,date}) => {
    const {name,time}=booking;
    const {user}=useAuth()
    const initialInfo = { patientName: user?.displayName, email: user?.email, phone: '' }
    const [bookingInfo, setBookingInfo] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };
        console.log(newInfo)
        newInfo[field] = value;
        setBookingInfo(newInfo);
    }
    const handleBookingSubmit=e=>{
      // collect data
      const appointment={
        ...bookingInfo,
        time,
        serviceName: name
      }
      
      handleBookingClose();
      e.preventDefault();
    }

    return (
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openBooking}
        onClose={handleBookingClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openBooking}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {name}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <form onSubmit={handleBookingSubmit}>
              <TextField style={{width:"90%",m:1}}
          disabled
          id="outlined-size-small"
          defaultValue={time}
        />
              <TextField style={{width:"90%",my:2}}
              name="patientName"
              onBlur={handleOnBlur}
          
          id="outlined-size-small"
          defaultValue={user?.displayName}
        />
              <TextField style={{width:"90%",my:2}}
              name="email"
              onBlur={handleOnBlur}
          type="email"
          id="outlined-size-small"
          defaultValue={user?.email}
        />
              <TextField style={{width:"90%",my:2}}
              name="phone"
              onBlur={handleOnBlur}
          
          id="outlined-size-small"
          placeholder="Enter your phone number"
          
        />
              <TextField style={{width:"90%",my:2}}
          disabled
          id="outlined-size-small"
          defaultValue={date.toString()}
          
        />
        <Button type="submit" variant="contained">Submit</Button>
              </form>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    );
};

export default BookingModal;