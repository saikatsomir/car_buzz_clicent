import { Button, TextField, Typography } from '@mui/material';
import { Box,  } from '@mui/system';
import React, { useState } from 'react';
import './AddProduct.css'

const AddProduct = () => {

    const initialInfo = { name:' ', description:' ', imgURL: ' ', price:' ', seller:' ', review: ' ' }
    const [bookingInfo, setBookingInfo] = useState(initialInfo)


    const handleOnBlur = e =>{
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


        fetch('https://shielded-waters-42294.herokuapp.com/products',{
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('Product Added Successfully')
            }
        })
        e.preventDefault()
    }


    return (
        <Box sx={{textAlign:'center'}} >
            <Typography variant="h3" sx={{fontWeight:"bold", mb:5}}>Add Products</Typography>
            <form onSubmit={hanldeOnSubmit} style={{border:'1px solid red',padding:'30px', borderRadius:'10px', boxShadow:" rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",margin:'auto', width:"fit-content"}} >
            <TextField 
            id="standard-basic" 
            label="Name"
            name="name" 
            sx={{width:300}}
            onBlur={handleOnBlur}
            variant="standard" />
            
            <br/><br/>
            <TextField 
            id="standard-basic" 
            label="Img Url"
            name="imgURL" 
            sx={{width:300}}
            onBlur={handleOnBlur}
            variant="standard" />
            
            <br/><br/>
            <TextField 
            id="standard-basic" 
            label="Price"
            name="price" 
            sx={{width:300}}
            onBlur={handleOnBlur}
            variant="standard" />
            <br/><br/>
            
            <TextField
            id="outlined-multiline-static"
            label="Description"
            name="description"
            sx={{width:300}}
            onBlur={handleOnBlur}
            multiline
            rows={4}
            />
            <br/><br/>
            <TextField 
            id="standard-basic" 
            label="Review"
            sx={{width:300}}
            name="review" 
            type="number"
            min="0"
            onBlur={handleOnBlur}
            variant="standard" />
            <br/><br/>
            <TextField 
            id="standard-basic" 
            label="Seller"
            name="seller" 
            sx={{width:300}}
            onBlur={handleOnBlur}
            variant="standard" /><br/><br/>
            <Button sx={{px:3, py:1,backgroundColor:'hotpink',borderRadius:'0px', color:'black'}} type="submit">Add Product</Button>
            </form>
        </Box>
    );
};

export default AddProduct;