import React, { useEffect } from 'react'
import {TableContainer, Table,TableRow, TableCell, TableHead, TableBody, Avatar} from '@mui/material'
import {connect} from 'react-redux'
//import NavBar from './NavBar'
import { useNavigate } from 'react-router-dom'
import './leaderboard.css'

function Leaderboard({users, sorted, auth}) {
  
    const navigate = useNavigate()

    useEffect(()=>{
        !auth && navigate('/login')
    },[auth, navigate])
  
    return (
        users &&
    <div >
    <div className='leaderboard'>
    <TableContainer className='leaderboardTable'>
      <Table sx={{ maxWidth: 650 }} aria-label="simple table" border='2px'>
        <TableHead>
          <TableRow>
            <TableCell>Users</TableCell>
            <TableCell align="right" data-testid='answered'>Answered</TableCell>
            <TableCell align="right">Created</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sorted.map((row) => (
            <TableRow
              key={row}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Avatar src={users[row].avatarURL}/>
                {users[row].name}
              </TableCell>
              <TableCell align="right">{Object.keys(users[row].answers).length}</TableCell>
              <TableCell align="right">{Object.keys(users[row].questions).length}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </div>
  )
}

const mapStateToProps = ({users, authedUser })=>({
    sorted: Object.keys(users).sort(
        (i,j) => {
            const addA = Object.keys(users[i].answers).length + Object.keys(users[i].questions).length
            const addB = Object.keys(users[j].answers).length + Object.keys(users[j].questions).length
            return addB - addA
        }
    ),
    users: users,
    auth: authedUser
})

export default connect(mapStateToProps)(Leaderboard)