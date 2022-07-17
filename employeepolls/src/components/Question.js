import React from 'react'
import {Card, CardContent,Typography,CardActions, Button} from '@mui/material'
//import { Padding } from '@mui/icons-material'
import {connect} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './home.css'


function Question({id, questions}) {
  const navigate = useNavigate()

  function navigateVote(){
    navigate('/questions/' + id)
  }

    function getDate(timestamp){
        const date = new Date(timestamp)
        const time = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
        return  "" + time  + " | " + date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear()
    
    }

  return (
   questions &&
    <div >
    <Card sx={{ minWidth: 275, alignItems: 'center', padding:2 }} className="homeCard">
      <CardContent>
        
        <Typography variant="h5" component="div">
          {questions[id].author
          }
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {getDate(questions[id].timestamp)}
        </Typography>
        
      </CardContent>
      <CardActions>
        <Button variant='outlined' color='success' onClick={navigateVote}>Show</Button>
      </CardActions>
    </Card>

    

    
    </div>
  )
}

const mapStateToProps = ({questions}) => ({
    questions,
    

})

export default connect(mapStateToProps)(Question)