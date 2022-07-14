import React from 'react'
import { Box, TextField, Button } from '@mui/material';
import  './login.css'

function Login() {
  return (
    <div className='login'>
        
        <div>
          <h1>Login</h1>
        </div>
        <div className='login_text'>
          
         <TextField
            
            fullwidth
            margin='dense'
            id="user-required"
            label="User"
            
          />

        <TextField
          fullwidth
          margin='dense'
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
      </div>
      <div>
        <Button variant="contained" color="success">
           Submit
        </Button>
      </div>
   

        

    </div>
  )
}

export default Login