import React, {useEffect, useState}from 'react'
import QuestionList from './QuestionList'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
//import {Box} from '@mui/material'
//import './home.css'

function Home({done, newQs, auth}) {

    const [isToggle, setIsToggle] = useState('newQs');


    const navigate = useNavigate()
    const info =[
        {
            key:'d1',
            title: 'New',
            ids: newQs
        },
        {
            key:'d2',
            title:'Done',
            ids:done
        }
    ]
    useEffect(()=>{
        !auth && navigate('./login')
    }, [auth,navigate])
  return (
    <div>
        <label>Type of Questions</label><br></br>
            <select value={isToggle} onChange={(e) => setIsToggle(e.target.value)}>
                <option value='newQs'>
                    Un answered Questions
                </option>
                <option value='done'>
                    Answered Question
                </option>

            </select>
            {isToggle === 'newQs' && <div>
                <QuestionList title={info[0].title} ids={info[0].ids} />
            </div>}
            {isToggle === 'done' && <div>

                <QuestionList title={info[1].title} ids={info[1].ids} />
            </div>}
    </div>
  )
}

const mapStateToProps = ({questions, authedUser, users})=>{
    if(authedUser) return{
        done: Object.keys(questions).filter(k => Object.keys(users[authedUser].answers).includes(k)).sort(
            (a,b) => questions[b].timestamp - questions[a].timestamp
        ),
        newQs : Object.keys(questions).filter(k => !Object.keys(users[authedUser].answers).includes(k)).sort(
            (a,b) => questions[b].timestamp - questions[a].timestamp
        ),
        auth: users[authedUser]
    }
    else return {}
}

export default connect(mapStateToProps)(Home)