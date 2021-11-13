import Box from '@mui/material/Box';
import {Grid} from '@mui/material';
import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Explores from './Explores';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Fotter from '../Pages/Shared/Fotter/Fotter';

const Explore = () => {
    const [allProducts, setAllProducts] = useState([])

    useEffect(()=>{
        fetch('https://shielded-waters-42294.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setAllProducts(data))
    },[])

    return (
        <>
        <Navbar/>
        <Box sx={{ flexGrow: 1,  py: 10, px:3 }}>
        <Typography variant="h3" sx={{textAlign:'center', fontWeight:'bold', mb:4}}>
            Products
        </Typography>
        
        <Grid container spacing={2} columns={13} sx={{gap:'20px', pl:3}}>
            {
                allProducts.map(product => <Explores
                key={product._id}
                product={product}
                /> )
            }
         </Grid>
    </Box>
    <Fotter/>
    </>
    );
};

export default Explore;