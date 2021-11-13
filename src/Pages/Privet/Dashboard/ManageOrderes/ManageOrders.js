import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AllOrder from './AllOrder';

const ManageOrders = () => {
    const [manageOrders, setMangeOrders] = useState([])
        useEffect(()=>{
            fetch('https://shielded-waters-42294.herokuapp.com/appoinments')
            .then(res => res.json())
            .then(data => setMangeOrders(data))
        },[])


        

    return (
       <>
        <Typography sx={{textAlign:'center', my:7}} variant="h3">
              Your All Orders
          </Typography>
       {
           manageOrders.map(allOrder => <AllOrder
           key={allOrder._id}
           setMangeOrders={setMangeOrders}
           manageOrders={manageOrders}
           allOrder={allOrder}
           />)
       }
       </>
    );
};

export default ManageOrders;