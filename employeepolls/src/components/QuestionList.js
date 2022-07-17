import React from 'react'
import {Box} from '@mui/material'
import Question from './Question'
import {connect} from 'react-redux'
import './home.css'

function QuestionList({title,ids,questions}) {
  
  return (
    <div className='home'>
    <Box
        
      sx={{
        minWidth:650,
        border: '2px solid grey',
        
      }}
      
    >
        <div style={{textAlign:'center'}}><h1>{title}</h1></div>
        {
            ids && ids.map((k) => (
                <div key={k}>
                    <Question id={k} />
                </div>
            ))
        }
    </Box>
    <br />
    </div>
  )
}

const mapStateToProps = ({questions})=>(
    {
        questions: questions
    }
)

export default connect(mapStateToProps)(QuestionList)