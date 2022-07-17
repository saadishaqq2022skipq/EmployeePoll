import React, {useEffect}from 'react'
import QuestionList from './QuestionList'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
//import {Box} from '@mui/material'
//import './home.css'

function Home({done, newQs, auth}) {

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
        {
            info.map((k)=>(
                <div key={k.key} >
                    
                        <QuestionList title={k.title} ids={k.ids} />
                    
                </div>
            ))
        }
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