import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React  from 'react';
import useAuth from '../../../../hooks/useAuth';

const AllOrder = ({allOrder, manageOrders, setMangeOrders}) => {
  const {admin} = useAuth()
    const {buyerName, email, phone, adress, carName, price, shipping} = allOrder;


    
    const handleDlete = id => {
      
      const url = `https://shielded-waters-42294.herokuapp.com/appoinments/${id}`
      fetch(url, {
        method:'DELETE'
      })
      .then()
      .then(res => res.json())
      .then(data=>{
        
        if(data.deletedCount){
          alert('deleted')
          const remainingOrders = manageOrders.filter(oreder => oreder._id !== id)
          setMangeOrders(remainingOrders)
        }
        
        
      })
    }
    
      const handleAdminsubmit = e =>{
        const user = {email}
        fetch('https://shielded-waters-42294.herokuapp.com/appoinments/shifted', {
            method:'PUT',
            headers:{
  
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
           if(data.modifiedCount){
               alert('shipping sucess')
           }
        })
        e.preventDefault()
    }
      // 
    return (
      <Grid container style={{justifyContent:'center'}}>
         
          <Grid style={{ boxShadow:" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", backgroundColor:'#c6edef', padding:'10px 30px', width: '75%', marginBottom:'40px', }}>
              <Button onClick={()=> handleDlete(allOrder._id)} sx={{px:5, py:1, borderRadius:'0', backgroundColor:"hotPink", color:'black'}}>Delete</Button>
              <Typography variant="h5">
                 Your Product: {carName} Car <br/>
                Price: {price} dollar
                 
              </Typography>
              <Typography variant="para">
                  Buye Name: {buyerName}  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Buyer Email: {email}  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; BuyerPhone: {phone}  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Adress: {adress}
              </Typography><br/><br/>
             { admin && <Box><input type="button" onClick={handleAdminsubmit} value="Make Sure Product for Shift" style={{  padding:'12px 25px', borderRadius:'0px', border:'none', backgroundColor:"hotPink", color:'black', cursor:'pointer'}}></input></Box>
              }
              {
                !admin && <Typography sx={{px:5,ml:10, py:1,borderRadius:'0', backgroundColor:"pink", color:'black'}}>{shipping}</Typography>
              }
          
          </Grid>
      </Grid>
    );
};

export default AllOrder;