import React, { useEffect, useState } from 'react';
import SetReview from './SetReview';
import { Grid, Typography } from '@mui/material';





const GetReview = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://shielded-waters-42294.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])

    return (

        <>
       <Typography variant="h3" sx={{fontWeight:'bold', textAlign:'center'}}>All Reviews </Typography><br/>
   <Grid container columns={13} style={{gap:'20px', justifyContent:'center'}}>
       {
           reviews.map(review => <SetReview
            key={review._id}
            review ={review}
            />
            )
       }
   </Grid>
        </>

    );
};

export default GetReview;