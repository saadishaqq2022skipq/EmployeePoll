import React from 'react'
import {  TextField, Button, MenuItem, Select } from '@mui/material';
import  './login.css'
import {useState} from 'react'
import {setAuthedUser} from '../action/authedUser'
import {connect} from 'react-redux'

function Login({dispatch, authUser, users}) {


  const [user, setUser] = useState('select')
  const [password, setPassword]=useState("")


  function handleLogin(){
    if(user !== 'select' && user !== 'Select User' && password === user.password){
      dispatch(setAuthedUser(user))
    }
  }
  return (
    <div className='login'>
        
        <div>
          <h1>Login</h1>
        </div>
        <div className='login_text'>
        

        <caption>Select User</caption>
        <Select
           value={user}
           onChange={(e)=>setUser(e.target.value)}
         >
    <MenuItem>
      <em>Select User</em>
    </MenuItem>
    {Object.keys(users).map(s =>(
      <MenuItem  key={users[s].id} value={users[s].id}>
        {users[s].name}
      </MenuItem>
    ))}
    
  </Select>

        <caption>Password</caption>
        <TextField
          fullWidth
          margin='dense'
          id="outlined-password-input"
          label="Password"
          type="password"
          onChange={(e)=>setPassword(e.target.value)}
        />
      </div>
      <div>
        <Button variant="contained" color="success" onClick={handleLogin}>
           Submit
        </Button>
      </div>
   

        

    </div>
  )
}

const mapStateToProps = ({authUser, users})=>{
  return{
    authUser,
    users
  }
}

export default connect(mapStateToProps)(Login)