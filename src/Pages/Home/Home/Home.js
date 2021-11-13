import { Box } from '@mui/system';
import React from 'react';
import Fotter from '../../Shared/Fotter/Fotter';
import Navbar from '../../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import GetReview from '../HomeReview/GetReview';
import Product from '../Product/Product';
import Sitedetail from '../Sitedetail/Sitedetail';

const Home = () => {
    return (
   <Box>
    <Navbar/>
    <Banner/>
    <Sitedetail/>
    <Product/>
    <GetReview/>
    <Fotter/>
   </Box>
    );
};

export default Home;