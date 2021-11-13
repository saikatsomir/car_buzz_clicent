import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './Banner.css'


const theme = createTheme();

theme.typography.h2 = {
  fontSize: '1.2rem',
  '@media (min-width:500px)': {
      fontSize:'7px',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '50px',
    },
};
theme.typography.h6 = {
    
    '@media (min-width:500px)': {
        fontSize:'7px',
        
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '20px',
    paddingTop: '20px'
  },
};



const Banner = () => {
    const bannerImg = "https://i.ibb.co/fnXc0CM/bannerimg.jpg"
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={8}>
           <Box>
           <img  style={{width: "100vw ", position: "relative"}} src={bannerImg} alt="banner Car"/>
           </Box>
            <Box style={{position: "absolute", top: "13%",left: '3%'}}>
            <ThemeProvider theme={theme}>
            <Typography variant="h2" sx={{fontWeight: "bold", fontFamily: " italic", color: 'white'}} >
            BEST CAR <br/>
            FOR RENT<br/>
            </Typography>
            <Typography variant="h2" sx={{color: 'orange', fontWeight:"bold"}}>
                TODAY
            </Typography>
            <Typography variant="h5" sx={{color: "white", fontSize:'17px', pt:3, lineHeight:1.5}}>
            Find Car Service In Bangladesh. Unlimited Access. 100% Secure. <br/> Always Facts. Privacy Friendly. The Best Resources.<br/> Results & Answers. Types: Best Results,  Explore Now, <br/> New Sources, Best in Search.
            </Typography>
    </ThemeProvider>
            </Box>
          </Grid>
        </Grid>
      </Box>
    );
};

export default Banner;