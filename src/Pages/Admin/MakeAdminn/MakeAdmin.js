import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const MakeAdmin = () => {
     const [email, setEmail] = useState('')
 
    const handleOnBlur = e =>{
        setEmail(e.target.value)
    }
    const handleAdminsubmit = e =>{
        const user = {email}
        fetch('https://shielded-waters-42294.herokuapp.com/users/admin', {
            method:'PUT',
            headers:{
  
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
           if(data.modifiedCount){
               alert('Make Admin Success')
           }
        })
        e.preventDefault()
    }
    return (
        <Box sx={{textAlign:'center'}}>
            <Typography variant="h4" sx={{fontWeight:'bold', mb:5}}>Add A Admin</Typography>
            <form onSubmit={handleAdminsubmit}>
                    <TextField onBlur={handleOnBlur} name="email" label="Email" sx={{mr:3}} variant="standard"/>
                    <Button type="submit" variant="contained" sx={{mt:1}}>Add Admin</Button>
            </form>
        </Box>
    );
};

export default MakeAdmin;