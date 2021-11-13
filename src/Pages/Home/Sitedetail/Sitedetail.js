import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Sitedetail = () => {
    return (
        <Box>
            <Grid container  sx={{textAlign:'center', backgroundColor:'#dEEdff',py:3, mt:10,}}>
                <Grid xs={12} md={3} sx={{pl:2}}>
                <i class="fas fa-chart-bar fa-7x"></i>  
                <Typography variant="h4" sx={{fontWeight:'medium', pt:2,}}>
                    Results Driven
                </Typography>
                <Typography variant="h6" sx={{fontWeight:'medium'}}>
                Our Car drieven lessong is fully  heigh recomonded. Everybody love this to learn Car Driving
                </Typography>
                </Grid>
                <Grid xs={12} md={3} sx={{pl:2}}>
                <i class="fas fa-road fa-7x"></i>
                <Typography variant="h4" sx={{fontWeight:'medium', pt:2,}}>
                    Proven Technology
                </Typography>
                <Typography variant="h6" sx={{fontWeight:'medium'}}>
               Our Technology is Too cool, Set a mind to buy our cur, We would give you a coll Technology
                </Typography>
                </Grid>
                <Grid xs={12} md={3} sx={{pl:2}}>
                <i class="fas fa-flag-checkered fa-7x"></i>
                <Typography variant="h4" sx={{fontWeight:'medium', pt:2,}}>
                    Winning Culture
                </Typography>
                <Typography variant="h6" sx={{fontWeight:'medium'}}>
                Our car marketing two times in the world fastet car buzz from our market place car buzz 
                </Typography>
                </Grid>
                <Grid xs={12} md={3} sx={{pl:2}}>
                <i class="fas fa-tachometer-alt fa-7x"></i>
                <Typography variant="h4" sx={{fontWeight:'medium', pt:2,}}>
                    Top Performance
                </Typography>
                <Typography variant="h6" sx={{fontWeight:'medium'}}>
               In our egency most three fastest car are Bugatti Veyron, Koenigsegg Agera, Koenigsegg CCR
                </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Sitedetail;