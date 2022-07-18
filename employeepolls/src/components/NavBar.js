import { Avatar } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../action/authedUser'
import './navBar.css'
import {connect} from 'react-redux'
import {Button} from '@mui/material'

function NavBar({dispatch, auth }) {
    const navigate = useNavigate()
    function handleLogout(){
        dispatch(logout())
        navigate('/login')
    }
  return (
    <div className='navBar'>
        <div className='navBar_link'>
            <Link to="/" underline='none' data-testid='home'>
                Home 
            </Link>
            <Link to="/leaderboard" underline='none' data-testid='leaderboard'>
                Leaderboard
            </Link>
            <Link to='/pollpage' underline='none' data-testid='new'>
                New
            </Link>
        </div>
        <div className='navBar_Avatar'>
            { auth &&<>
            <Avatar src={auth.avatarURL} />
               
            
            </>
            }
            <Button variant="text" onClick={handleLogout} data-testid= "logout">logout</Button>
        </div>
    </div>
  )
}

const mapStateToProps = ({authedUser, users})=> ({
    auth: users[authedUser]
})

export default connect(mapStateToProps)(NavBar)