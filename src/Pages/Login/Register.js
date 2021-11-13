import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import {Button, Typography,Skeleton, Box, Alert, AlertTitle} from '@mui/material';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const loginBg = "https://i.ibb.co/Gc6cgRx/Mobile-login-bro.png"

const Regiseter = () => {
    const {registerUser, isLoading, user, error} = useAuth()
    const location = useLocation()
    const history = useHistory()
    const [loginData, setLoginData] = useState({})
    
        const handleOnBlur = e => {
            const field = e.target.name;
            const value = e.target.value;
            const newLoginData = {...loginData}
            newLoginData[field] = value;
            console.log(loginData);
            setLoginData(newLoginData)
        }
    
        const handleOnSubmit = e => {
            registerUser(loginData.email, loginData.password, loginData.name,  location, history)
            if(loginData.password !== loginData.password2){
                e.preventDefault();
                alert('Confirm Your password, Your password has been token worng')
                return
            }
                    
        }

    return (
        <>
            {user.email && <Alert severity="success"  sx={{width:"50%", backgroundColor:'#92E3A9', justifyContent:'center', alignItems:'center'}} style={{margin:'0 auto'}}>
            <AlertTitle>Success</AlertTitle>
            This is a success alert — <strong>check it out!</strong>
          </Alert> }
        <Grid container>
            <Grid xs={12} md={7} sx={{textAlign:'center', mt:10, mb:22}}>
               { !isLoading && <form onSubmit={handleOnSubmit}>
                <Typography variant="h3" sx={{fontweight:'bold', mb:5}}>Register</Typography>
                <TextField onBlur={handleOnBlur} name="name" type="text" label="Your Name" sx={{width:300, mb:3}} variant="standard" /> <br/>
                <TextField onBlur={handleOnBlur} name="email" type="email" label="Email" sx={{width:300, mb:3}} variant="standard" /> <br/>
                <TextField onBlur={handleOnBlur} name="password" type="password" label="Select Password" sx={{width:300}} variant="standard" /> <br/><br/>
                <TextField onBlur={handleOnBlur} name="password2" type="password" label="Confirm Password" sx={{width:300}} variant="standard" /> <br/><br/>
                <Typography variant="paragraph" sx={{fontFamily:'italic'}}>Already Have An Account?<NavLink to="/login">Login</NavLink></Typography> <br/><br/>
                <Button type="submit" sx={{backgroundColor:'hotpink', px:6, color:'black', py:1, mb:5}}>Register</Button>
                {error && <Alert severity="error" sx={{width:400, margin:'0 auto'}}>{error}</Alert>}
                </form>}
                {isLoading && 
                    
                <Box>
                    <Skeleton animation="wave" sx={{py:3, width:150, ml:35, mt:1, textAlign:'center'}} />
                    <Skeleton animation="wave" sx={{py:3, width:300, ml:25,}} />
                    <Skeleton animation="wave" sx={{py:3, width:300, ml:25,}} />
                    <Skeleton animation="wave" sx={{py:3, width:300, ml:25,}} />
                    <Skeleton animation="wave" sx={{py:3, width:300, ml:25,}} />
                    <Skeleton animation="wave" sx={{py:3, width:150, ml:35, textAlign:'center'}} />
                </Box>
                }
            </Grid>
            <Grid xs={12} md={5} sx={{alignItems:'center'}}>
                <img width="100%" src={loginBg} alt=" "/>
            </Grid>
        </Grid>
        </>
    );
};

export default Regiseter