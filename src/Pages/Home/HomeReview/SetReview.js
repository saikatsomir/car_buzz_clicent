import React from 'react';
import Card from '@mui/material/Card';
import { Grid, Rating } from '@mui/material';
import Typography from '@mui/material/Typography';



const SetReview = ({review}) => {
    const value = (parseInt(review?.ratting))
    return (

            <Grid xs={12} md={4} sx={{p:3, textAlign:'center', mb:5}} style={{boxShadow:" rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"}}>
        <Card sx={{p:3}}>
                    <Typography variant="h4">
                        {review?.name}
                    </Typography>
                    <Typography variant=" ">
                        {review?.comment}
                    </Typography>
                    <Rating name="read-only" value={value} readOnly />
                </Card>
            </Grid>
    );
};

export default SetReview;