import React from 'react';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


const Explores = ({product}) => {
    const {_id, imgURL, description, name, price} = product
    return (
     
        <Grid item xs={12} sm={6} md={4} style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"}} sx={{ wordSpacing:5, m: 1, py:2, borderRadius: '10px', border:'0.5px solid pink'}}>
          <img 
          width="340px"
          height=" 190px"
          style={{borderRadius: '10px',boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",}}
          
          src={imgURL} alt=""/>
          <Typography variant="h5" sx={{fontWeight: 'bold', pt:3}}>
            {name}
          </Typography>
          <Typography variant="paragraph" sx={{fontWeight: ''}}>
            {description.slice(0,50)}..... 
          <Typography variant="paragraph" sx={{fontWeight:'medium'}}>
            View More To Go <Link to={`purchase/${_id}`}>Purchase</Link> Page
          </Typography>
          </Typography> <br/>
          <Typography variant="h5" sx={{py:1}}>
            Price: ${price}
          </Typography> 
          <Link to={`purchase/${_id}`}  style={{textDecoration:'none'}}><Button   sx={{background:'linear-gradient(90deg, rgba(200,47,168,1) 12%, rgba(219,81,191,1) 49%, rgba(227,110,230,0.989233193277311) 100%)', color:'black', px:5, py:1, mb:3}} >Purchase</Button></Link>
        </Grid>
     
       
    );
};

export default Explores;