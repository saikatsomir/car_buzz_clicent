import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React, { useEffect, useState } from 'react';
import Products from '../../Shared/Products/Products';
import Typography from '@mui/material/Typography';


const Product = () => {
  const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch('https://shielded-waters-42294.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data.slice(0,6)))
    },[])
    return (
        <>
        <Box sx={{ flexGrow: 1,  py: 15, px:3 }}>
        <Typography variant="h3" sx={{textAlign:'center', fontWeight:'bold', mb:4}}>
            Products
        </Typography>
        
        <Grid container spacing={2} columns={13} sx={{gap:'20px', pl:3}}>
            {
                products.map(product => <Products
                key={product._id}
                product={product}
                /> )
            }
         </Grid>
    </Box>
    </>
    );
};

export default Product;