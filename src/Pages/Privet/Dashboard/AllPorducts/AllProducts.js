import React, {useState, useEffect} from 'react';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';


const AllProducts = () => {
    const [products, setProducts] = useState([])
        useEffect(()=>{
            fetch('https://shielded-waters-42294.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
        })

        const handleDlete = id => {
      
            const url = `https://shielded-waters-42294.herokuapp.com/products/${id}`
            fetch(url, {
              method:'DELETE'
            })
            .then()
            .then(res => res.json())
            .then(data=>{
              
              if(data.deletedCount){
                alert('deleted')
                const remainingOrders = products.filter(oreder => oreder._id !== id)
                setProducts(remainingOrders)
              }
              
              
            })
          }
    return (
        <div>
            {
                products.map(product => <Grid container sx={{px:5, py:7,}} style={{border:'1px solid red',padding:'30px', borderRadius:'10px', boxShadow:" rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px", marginBottom:'40px', width:"90%", }}>
                <Grid xs={12} md={7} >
                    <Box>
                    <Typography variant="h4">
                        Name: {product?.name}
                    </Typography>
                    <Typography variant="h6">
                        Details: <small>{product?.description}</small>
                    </Typography>
                    <Typography variant="h4" sx={{fontSize:'25px'}}>
                        Price: <small>{product?.price} dollar</small>
                    </Typography>
                    <Typography variant="h4" sx={{fontSize:'25px'}}>
                        Seller: <small>{product?.seller} People</small>
                    </Typography>
                    <Typography variant="h4" sx={{fontSize:'25px', display:'inline', mr:7}}>
                        Review: <small>({product?.review}) </small>
                    </Typography>
                    <Button onClick={()=> handleDlete(product?._id)}  sx={{background:'linear-gradient(90deg, rgba(200,47,168,1) 12%, rgba(219,81,191,1) 49%, rgba(227,110,230,0.989233193277311) 100%)', color:'black', px:5, py:1, mb:3}}>Delete</Button>
                    </Box>
                </Grid>
                <Grid xs={12} md={5} sx={{p:3}}>
                    <img 
                    width="100%"
                    src={product?.imgURL} alt=" "/>
                </Grid>
            </Grid>
            )
            }
        </div>
    );
};

export default AllProducts;