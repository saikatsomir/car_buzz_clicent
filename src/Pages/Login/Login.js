import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import {Button,  Skeleton, Box,  Typography, Alert} from '@mui/material';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';



const loginBg = "https://i.ibb.co/Gc6cgRx/Mobile-login-bro.png"

const Login = () => {

    const [loginData, setLoginData] = useState({})
    const{isLoading, signInUser, error} = useAuth()
    const location = useLocation()
    const history = useHistory()

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData}
        newLoginData[field] = value;
        setLoginData(newLoginData)
        
    }

    const handleOnSubmit = e => {
        signInUser(loginData.email, loginData.password, location, history)

        e.preventDefault()

    }

    return (
        <>
        <Grid container>
            <Grid xs={12} md={7} sx={{textAlign:'center', mt:10, mb:31}}>
            { !isLoading && <form onSubmit={handleOnSubmit}>
            <Typography 
            variant="h3" 
            sx={{fontweight:'bold', mb:5}}
            >Login</Typography>
            <TextField 
            name="email" 
            type="email" 
            label="Email" 
            onBlur={handleOnBlur}
            sx={{width:300, mb:3}} 
            variant="standard" 
            /> <br/>
            <TextField 
            name="password" 
            type="password" 
            label="Password" 
            sx={{width:300}} 
            onBlur={handleOnBlur}
            variant="standard" 
            /> <br/><br/>
            <Typography variant="paragraph" style={{fontFamily:'italic'}}>Are You New In car Bazz? </Typography><NavLink to="/register" sx={{fontFamily:'italic'}}>Register</NavLink><br/><br/>
            <Button type="submit" sx={{backgroundColor:'hotpink', px:6, color:'black', py:1, mb:3}}>Login</Button>
            {error && <Alert severity="error" sx={{width:400, margin:'0 auto'}}>{error}</Alert>}
            </form>}
            {isLoading && 
                    
                    <Box>
                        <Skeleton animation="wave" sx={{py:3, width:150, ml:35, mt:1, textAlign:'center'}} />
                        <Skeleton animation="wave" sx={{py:3, width:300, ml:25,}} />
                        <Skeleton animation="wave" sx={{py:3, width:300, ml:25,}} />
                        <Skeleton animation="wave" sx={{py:3, width:150, ml:35, textAlign:'center'}} />
                    </Box>
                    }
            </Grid>
            <Grid xs={12} md={5}>
                <img width="100%" sx={{alignItems:'center'}} src={loginBg} alt=" "/>
            </Grid>
        </Grid>
        </>
    );
};

export default Login;