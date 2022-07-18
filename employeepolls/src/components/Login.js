import React from 'react'
//import {  Button, MenuItem, Select } from '@mui/material';
import  './login.css'
import {useState, useEffect} from 'react'
import {setAuthedUser} from '../action/authedUser'
import {connect} from 'react-redux'
import { useNavigate } from 'react-router-dom';

function Login({dispatch, authUser, users}) {


  const [user, setUser] = useState('Select')
  

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
        <select
           value={user}
           onChange={(e)=>setUser(e.target.value)}
           data-testid= 'dropdown' 
           style={{padding:10}}
         >
            <option>Select User</option>
    {Object.keys(users).map(s =>(
             <option  key={users[s].id} value={users[s].id}>
                {users[s].name}
             </option>
    ))}
    
  </select>

       
      </div>
      <div>
        {  user !== 'Select' && user !== 'Select User' &&
        <button  data-testid='login' style={{padding:10}} onClick={handleLogin}>
           Submit
        </button>
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