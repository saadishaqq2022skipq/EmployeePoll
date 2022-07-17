import {useEffect} from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../action/shared'
import Login from './Login'
import NavBar from './NavBar'
import PollPage from './PollPage'
//import Question from './Question'
import Leaderboard from './Leaderboard'
import Vote from './Vote'
//import QuestionList from './QuestionList';
import Home from './Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App({dispatch, auth}) {
  console.log(auth)

  useEffect(()=>{
    dispatch(handleInitialData())
  },[dispatch])
 
  return (<>
    <BrowserRouter>
    {auth && <NavBar />}
    <div>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/leaderboard' element={<Leaderboard />} />
        <Route exact path='/pollpage' element={<PollPage />} />
        <Route exact path='/questions/:question_id' element={<Vote />} />
      </Routes>
    </div>
    
    </BrowserRouter>
    </>
  );
}

const mapStateToProps = ({questions, authedUser}) =>({
  questions:questions,
  auth:authedUser
})

export default connect(mapStateToProps)(App);
