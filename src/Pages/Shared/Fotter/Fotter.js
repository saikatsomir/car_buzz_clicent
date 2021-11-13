import { Button, Grid, TextField, Typography } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import IconButton from '@mui/material/IconButton';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import React from 'react';
import { Box } from '@mui/system';

const Fotter = () => {
    return (
      <Box>
          <Grid container spacing={2} sx={{backgroundColor:"#3D3D3D",mt:5, py:5, px:5}}>
          <Grid xs={12} md={4} sx={{pr:3}} >
              <Typography variant="h4" sx={{color: 'white'}}>
                    News Letter
              </Typography>
              <Typography variant="h6" sx={{color: 'white', mt: 4}}>
                    By subscribing to our company newsletter you will always be up-to-date on our latest promotions, deals and vehicle inventory!
              </Typography><br/>
              <TextField sx={{backgroundColor: 'white', width: 300}} label="Your Email" variant="standard" /> <br/>
              <Button  sx={{backgroundColor: "#C7081B", borderRadius: '3px', color: 'white',  my:2, px:2}}>Subscribe</Button>

          </Grid>
          <Grid xs={12} md={4} sx={{pr:2}} >
              <Typography variant="h4" sx={{color: 'white'}}>
              Twitter Feed
              </Typography>
              <Typography variant="h6" sx={{color: 'white', mt: 4}}>
             <TwitterIcon/> You Can contect with us in twitter, if You feel any problem.
              <br/>
              As an online business that you wants to the best car and we can give you that.Its sales by successful social media marketing, it can be tough for you.
              </Typography>
          </Grid>
          <Grid xs={12} md={4}  >
              <Typography variant="h4" sx={{color: 'white'}}>
                Contact Us
              </Typography>
              <Typography variant="h6" sx={{color: 'white', mt: 4, lineHeight: 3, }}>
                <LocationOnIcon/> Address:1234 Porhsa, Nagon, BD 12345 <br/>
                <PhoneAndroidIcon/> 017272723890 <br/>
                <ContactMailIcon/> saikatsomri@gmail.com
              </Typography>
          </Grid>
      </Grid>
      <Grid container  sx={{backgroundColor:" #2F2F1F", px:5, py:2}}>
          
         <Grid xs={12} md={4}>
         <Typography variant="h2" sx={{fontFamily: 'Courgette', color:'white', fontWeight:'400'}}>
                Car Buzz <br/>
          </Typography>
          <Typography variant="h6" sx={{ letterSpacing: 10, color:'white' }}>
              TEMPLATE
          </Typography>
         </Grid>
         <Grid xs={12} md={8} sx={{fontSize:'30px'}}>
   <Typography variant="h6" sx={{color:'white', textAlign: 'center'}}>
        

  <Tooltip>
  <IconButton
   color="inherit"
   >
<FacebookIcon  sx={{ fontSize: 50, backgroundColor:'black', mx:3, p:1, borderRadius:'10px' }}/>
</IconButton>
</Tooltip>
    
<Tooltip>
  <IconButton
   color="inherit"
   >
<TelegramIcon  sx={{ fontSize: 50, backgroundColor:'black', mx:3, p:1, borderRadius:'10px' }}/>
</IconButton>
</Tooltip>
    
<Tooltip>
  <IconButton
   color="inherit"
   >
<TwitterIcon  sx={{ fontSize: 50, backgroundColor:'black', mx:3, p:1, borderRadius:'10px' }}/>
</IconButton>
</Tooltip>
    
<Tooltip>
  <IconButton
   color="inherit"
   >
<LinkedInIcon  sx={{ fontSize: 50, backgroundColor:'black', mx:3, p:1, borderRadius:'10px' }}/>
</IconButton>
</Tooltip>
    
<Tooltip>
  <IconButton
   color="inherit"
   >
<YouTubeIcon  sx={{ fontSize: 50, backgroundColor:'black', mx:3, p:1, borderRadius:'10px' }}/>
</IconButton>
</Tooltip>
    
<Tooltip>
  <IconButton
   color="inherit"
   >
<AttachEmailIcon  sx={{ fontSize: 50, backgroundColor:'black', mx:3, p:1, borderRadius:'10px' }}/>
</IconButton>
</Tooltip>
    saikatsomir &copy; 2021 from car buzz in super car
      
   </Typography>

          
         </Grid>
      </Grid>
      </Box>
    );
};

export default Fotter;