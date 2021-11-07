import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { NavLink,useLocation,useHistory } from 'react-router-dom';
import login from '../../../images/login.png'
import useAuth from '../../../hooks/useAuth';
import { Alert, CircularProgress } from '@mui/material';

const Login = () => {
    const [loginData,setLoginData]=useState({})
    const {loginUser,isLoading,user,authError,signInWithGoogle}=useAuth()
    const location =useLocation()
    const history=useHistory()

    const handleOnChange=e=>{
        const field=e.target.name;
        const value=e.target.value;
        const newLoginData={...loginData}
        newLoginData[field]=value;
        setLoginData(newLoginData);
    }
    const handleGoogleLogin=()=>{
        signInWithGoogle(location,history)

    }
    const handleLogin=e=>{
        loginUser(loginData.email,loginData.password,location,history)

        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{mt:8}} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom >Login</Typography>
                    {!isLoading && <form onSubmit={handleLogin}>
                    <TextField  sx={{width:'75%',m:1}} id="standard-basic" name="email" onChange={handleOnChange} label="Your Email" variant="standard" /> <br />
                    <TextField sx={{width:'75%',m:1}} id="standard-basic" type="password" name="password" onChange={handleOnChange} label="Your Password" variant="standard" />
                    <br />
                    <Button sx={{width:'75%',m:1}} type="submit" variant="contained">Login</Button> <br />
                    <NavLink style={{textDecoration:'none'}}
                    to="/register">
                        <Button variant="text">New user?Please register.</Button>


                    </NavLink>
                    </form>}
                    {
                      isLoading &&  <CircularProgress />

                    }
                    {
                        authError && <Alert severity="error">{authError}</Alert>
                    }
                    <hr sx={{width:'75%',m:1}} />
                    <p>Or</p>
                    <Button onClick={handleGoogleLogin} variant="contained"  color="success">Google Signin</Button>

                    </Grid>
                <Grid item xs={12} md={6}>
                    <img src={login} alt="" />
                    </Grid>

            </Grid>
        </Container>
    );
};

export default Login;