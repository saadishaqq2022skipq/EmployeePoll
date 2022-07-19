import React, { useEffect } from 'react'
import {handleSaveAnswer} from '../action/shared'
import {connect} from 'react-redux'
import {useParams} from 'react-router-dom'
import { Avatar,Card,CardActions,Button,CardContent,Typography } from '@mui/material'
import {useNavigate} from 'react-router-dom'
import './vote.css'

function Vote({dispatch, questions, users, auth}) {
    const {question_id} = useParams()
    const navigate = useNavigate()

    
    useEffect(()=>{
        !auth.id && navigate('/login')
    },[auth, navigate])
    function handleVote(answer){
        const info ={
            authedUser:auth.id,
            qid: question_id,
            answer
        }
        console.log(info)
        dispatch(handleSaveAnswer(info))
    }

    if(!questions[question_id]) return (<h1 data-testid='404'>Error 404 Page not found</h1>)
  else return ( users &&
    <div className='VotePoll'>
        <h1>Poll By {questions[question_id].author} </h1>
        <Avatar src= {users[questions[question_id].author].avatarURL} sx={{ width: 250, height: 250 }}/>
        <h3>Would You Rather</h3>
    <div className='voteCard'>
        <div>
        <Card sx={{ maxWidth: 275 }}>
            <CardContent>
        
                 <Typography variant="p" component="div">
                    {questions[question_id].optionOne['text']}
                 </Typography>
        
            </CardContent>
            <CardActions>
                {
                    Object.keys(auth['answers']).includes(question_id) ? 
                    (auth['answers'][question_id]==='optionOne'? (<Button disabled fullWidth variant='outlined' color='success'>Voted</Button>)
                    :(<Button disabled fullWidth variant='outlined' color='success'>Click</Button>)):
                    (<Button fullWidth variant='outlined' color='success' onClick={()=>handleVote('optionOne')}>Click</Button>)
                }
                
            </CardActions>
         </Card>
         <p>Total votes: {questions[question_id].optionOne['votes'].length} ({100*questions[question_id].optionOne['votes'].length/(questions[question_id].optionOne['votes'].length+questions[question_id].optionTwo['votes'].length)}%)</p>
        </div>

        <div>
        
         <Card sx={{ maxWidth: 275 }}>
            <CardContent>
        
                 <Typography variant="p" component="div">
                    {questions[question_id].optionTwo['text']}
                 </Typography>
        
            </CardContent>
            <CardActions>
                {
                    Object.keys(auth['answers']).includes(question_id) ? 
                    (auth['answers'][question_id]==='optionTwo'? (<Button disabled fullWidth variant='outlined' color='success'>Voted</Button>)
                    :(<Button disabled fullWidth variant='outlined' color='success'>Click</Button>)):
                    (<Button fullWidth variant='outlined' color='success' onClick={()=>handleVote('optionTwo')}>Click</Button>)
                }
                
            </CardActions>
         </Card>
         <p>Total votes: {questions[question_id].optionTwo['votes'].length} ({100*questions[question_id].optionTwo['votes'].length/(questions[question_id].optionOne['votes'].length+questions[question_id].optionTwo['votes'].length)}%)</p>
        </div>
        </div>

    </div>
  )
}

const mapStateToProps = ({users, authedUser, questions}) => ({
    auth: authedUser ? users[authedUser]: {id: null},
    questions,
    users
})

export default connect(mapStateToProps)(Vote)