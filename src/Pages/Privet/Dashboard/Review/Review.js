import React, { useState } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import useAuth from '../../../../hooks/useAuth';


const Review = () => {
    const {user} = useAuth()
  const [ratting, setRattig] = useState(2);
  const initialInfo = { name: user.displayName, email: user.email, Comment: " ", ratting: " "}
    const [bookingInfo, setBookingInfo] = useState(initialInfo)
    console.log(ratting);

    const handleOnBllur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...bookingInfo}
        newInfo[field] = value;
        console.log(newInfo);
        setBookingInfo(newInfo)
    }

    const hanldeOnSubmit = e => {
        const booking = {
            ...bookingInfo,
        }


        fetch('https://shielded-waters-42294.herokuapp.com/review',{
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('Thanks For Your Feedback')
            }
        })
        e.preventDefault()
    }

    return (
       <Grid sx={{textAlign:'center',}} style={{border:'1px solid red',padding:'30px', borderRadius:'10px', boxShadow:" rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",margin:'auto', width:'fit-content'}}>
           <Typography variant="h4" sx={{fontWeight:'bold', mb:5}}>Your Feedbacke</Typography>
        <form onSubmit={hanldeOnSubmit}>
        <TextField id="standard-basic" sx={{width:300}} label="Your Name" name="name" onBlur={handleOnBllur} defaultValue={user?.displayName} variant="standard" /><br/><br/><br/>
        <TextField id="standard-basic" sx={{width:300}} label="Your Email" name="email" onBlur={handleOnBllur} defaultValue={user?.email} variant="standard" /><br/><br/><br/>
        <TextField
        sx={{width:300}}
        name="comment"
          id="outlined-multiline-static"
          label="Your Feedback"
          multiline
          rows={6}
          onBlur={handleOnBllur}
        /><br/><br/>
            <Box
            sx={{
            '& > legend': { mt: 2 },
            }}
            >
            <Typography component="legend">Give Us Your Feedback Ratting</Typography>
            <Rating
            name="ratting"
            value={ratting}
            onBlur={handleOnBllur}
            onChange={(event, newValue) => {
                setRattig(newValue);
              }}
            />

            </Box>

        <Button type="submit">Submit</Button>
        </form>

       </Grid>
    );
};

export default Review;