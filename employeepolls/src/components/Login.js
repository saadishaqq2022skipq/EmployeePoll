import React from 'react'
import {  Button, MenuItem, Select } from '@mui/material';
import  './login.css'
import {useState, useEffect} from 'react'
import {setAuthedUser} from '../action/authedUser'
import {connect} from 'react-redux'
import { useNavigate } from 'react-router-dom';

function Login({dispatch, authUser, users}) {


  const [user, setUser] = useState('')
  

  const navigate = useNavigate()

  useEffect(()=>{
    authUser && navigate(-1)
  },[authUser, navigate])

  function handleLogin(){

  
      dispatch(setAuthedUser(user))
      navigate(-1)
    
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
    
    {Object.keys(users).map(s =>(
      <MenuItem  key={users[s].id} value={users[s].id}>
        {users[s].name}
      </MenuItem>
    ))}
    
  </Select>

       
      </div>
      <div>
        {  (user !== '') ?(
        <Button variant="contained" color="success" onClick={handleLogin}>
           Submit
        </Button>):(<Button variant='contained' disabled>Submit</Button>)
        }
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