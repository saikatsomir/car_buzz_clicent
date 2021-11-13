import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Navbar from '../Shared/Navbar/Navbar';
import { Button, TextField } from '@mui/material';
import useAuth from '../../hooks/useAuth'
import Fotter from '../Shared/Fotter/Fotter';

const Purschase = () => {
    const {id} = useParams()
    const {user} = useAuth()
    const [details, setDetails] = useState({})
    const initialInfo = { buyerName: user.displayName, email: user.email, phone:' ', adress: ' '}
    const [bookingInfo, setBookingInfo] = useState(initialInfo)
  

    useEffect(()=>{
            fetch("https://shielded-waters-42294.herokuapp.com/products")
            .then(res => res.json())
            .then(data=>{
                const d = data.find(p => p._id === id)
                setDetails(d)
            })
    },[id])

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...bookingInfo}
        newInfo[field] = value;
        setBookingInfo(newInfo)
        
    }

    const handleOnSubmit = e => {

        const booking = {
            ...bookingInfo,
            carName: details?.name,
            price:details?.price,
        }

        fetch('https://shielded-waters-42294.herokuapp.com/appoinments',{
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('Order Place Successfully')
            }
        })

        e.preventDefault()
    }
    return (
       <>
   
           <Navbar/><br/><br/><br/>
            <Grid container sx={{px:5, py:7,}} style={{border:'1px solid red',padding:'30px', borderRadius:'10px', boxShadow:" rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",margin:'auto', width:"90%", }}>
            <Grid xs={12} md={7} >
                <Box>
                <Typography variant="h4">
                    Name: {details?.name}
                </Typography>
                <Typography variant="h6">
                    Details: <small>{details?.description}</small>
                </Typography>
                <Typography variant="h4" sx={{fontSize:'25px'}}>
                    Price: <small>{details?.price} dollar</small>
                </Typography>
                <Typography variant="h4" sx={{fontSize:'25px'}}>
                    Seller: <small>{details?.seller} People</small>
                </Typography>
                <Typography variant="h4" sx={{fontSize:'25px'}}>
                    Review: <small>({details?.review}) </small>
                </Typography>
                </Box>
            </Grid>
            <Grid xs={12} md={5} sx={{p:3}}>
                <img 
                width="100%"
                src={details?.imgURL} alt=" "/>
            </Grid>
        </Grid>
        <Grid  sx={{textAlign:'center', mt:15}}>
            <form onSubmit={handleOnSubmit} style={{border:'1px solid red',padding:'30px', borderRadius:'10px', boxShadow:" rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",margin:'auto', width:'fit-content'}}>
            <Typography variant="h4" sx={{fontWeight:'bold', mb:5}}>Booking Card</Typography>
            <TextField 
            sx={{width:'300px', mb:3,boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}}
            id="outlined-basic" 
            onBlur={handleOnBlur}
            name="buyerName"
            label="User Name"
            defaultValue= {user?.displayName}
            variant="outlined" /><br/>
            <TextField 
            sx={{width:'300px', mb:3, boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}}
            id="outlined-basic" 
            onBlur={handleOnBlur}
            name="email"
            label="Email"
            defaultValue= {user?.email}
            variant="outlined" /><br/>
            <TextField 
            sx={{width:'300px', mb:3, boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}}
            id="outlined-basic" 
            onBlur={handleOnBlur}
            name="phone"
            label="Phone"
            variant="outlined" /><br/>
            <TextField 
            sx={{width:'300px', mb:3, boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}}
            id="outlined-basic" 
            onBlur={handleOnBlur}
            name="adress"
            label="Adress"
            variant="outlined" /><br/>
            <Button type="onSubmit"  sx={{background:'linear-gradient(90deg, rgba(200,47,168,1) 12%, rgba(219,81,191,1) 49%, rgba(227,110,230,0.989233193277311) 100%)', color:'black', px:5, py:1, mb:3}} >Booked</Button>
            </form>
        </Grid>
        <Fotter/>
       </>
    );
};

export default Purschase;