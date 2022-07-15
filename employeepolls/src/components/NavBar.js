import { Avatar, Link } from '@mui/material'
import React from 'react'
import './navBar.css'

function NavBar() {
  return (
    <div className='navBar'>
        <div className='navBar_link'>
            <Link href='#' underline='none'>
                Home
            </Link>
            <Link href='#' underline='none'>
                Leaderboard
            </Link>
            <Link href='#' underline='none'>
                New
            </Link>
        </div>
        <div className='navBar_Avatar'>
            <Avatar>
                S
            </Avatar>
            <Link href='#' underline='none' >
                Logout
            </Link>
        </div>
    </div>
  )
}

export default NavBar