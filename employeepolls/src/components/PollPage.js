import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { handleAddQuestion } from '../action/shared'
//import Login from './Login'
import NavBar from './NavBar'
import './PollPage.css'
import {connect} from 'react-redux'

function PollPage({dispatch,auth}) {
const [firstOption, setFirstOption] = useState('')
const [secondOption, setSecondOption] = useState('')
function handlePoll(e){
    e.preventDefault()
    const question = {
        optionOneText: firstOption,
        optionTwoText: secondOption,
        author: auth
    }

    dispatch(handleAddQuestion(question))
    setFirstOption('')
    setSecondOption('')


}  
  
  return (
    <>
        <div>
            <NavBar />
        </div>
        <div className='pollForm'>
            <h1>Would you Rather</h1>
            <caption>First Option</caption>
            <TextField fullWidth id="outlined-basic" label="Enter First Option"
            value={firstOption}
            onChange={(e)=>setFirstOption(e.target.value)}
            margin="dense"
            
            />

            <caption>Second Option</caption>
            <TextField fullWidth id="outlined-basic" label="Enter Second Option"
            value={secondOption}
            onChange={(e)=>setSecondOption(e.target.value)}
            margin="dense"
            
            />

            {(firstOption && secondOption)? (<Button variant="contained" color='success' onClick={handlePoll} >Submit</Button>): (<Button variant='contained' disabled > Submit</Button>)}
        
        </div>
    </>
  )
}

const mapStateToProps = ({authedUser})=>({
    auth: authedUser

})

export default connect(mapStateToProps)(PollPage)