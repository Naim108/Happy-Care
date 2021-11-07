import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { NavLink, useHistory} from 'react-router-dom';
import login from '../../../images/login.png'
import useAuth from '../../../hooks/useAuth';
import { Alert, CircularProgress } from '@mui/material';



const Register = () => {
    const [loginData,setLoginData]=useState({})
    const history=useHistory()
    const {registerUser,isLoading,user,authError}=useAuth()
    


    const handleOnBlur=e=>{
        const field=e.target.name;
        const value=e.target.value;
        const newLoginData={...loginData}
        newLoginData[field]=value;
        setLoginData(newLoginData);
       

    }
    const handleLogin=e=>{
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email,loginData.password,loginData.name, history)

        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{mt:8}} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom >Register</Typography>
                    {!isLoading && <form onSubmit={handleLogin}>
                    <TextField  sx={{width:'75%',m:1}} id="standard-basic" name="name" onBlur={handleOnBlur} label="Your Name" variant="standard" /> <br />
                    <TextField  sx={{width:'75%',m:1}} id="standard-basic" name="email" onBlur={handleOnBlur} label="Your Email" variant="standard" /> <br />
                    <TextField sx={{width:'75%',m:1}} id="standard-basic" type="password" name="password" onBlur={handleOnBlur} label="Enter your Password" variant="standard" />
                    <TextField sx={{width:'75%',m:1}} id="standard-basic" type="password2" name="password2" onBlur={handleOnBlur} label="Re-enter your Password" variant="standard" />
                    <br />
                    <Button sx={{width:'75%',m:1}} type="submit" variant="contained">Register</Button> <br />
                    <NavLink style={{textDecoration:'none'}}
                    to="/login">
                        <Button variant="text">Already registered?Please login.</Button>


                    </NavLink>
                    </form>} 
                    {
                      isLoading &&  <CircularProgress />

                    }
                    {
                        user?.email && <Alert severity="success">Registration successfully.Please login</Alert>
                    }
                    {
                        authError && <Alert severity="error">{authError}</Alert>
                    }
                    </Grid>
                <Grid item xs={12} md={6}>
                    <img src={login} alt="" />
                    </Grid>

            </Grid>
        </Container>
    );
};

export default Register;