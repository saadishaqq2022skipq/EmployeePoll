import {useEffect} from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../action/shared'
//import Login from './Login'
//import NavBar from './NavBar'
//import PollPage from './PollPage'
//import Question from './Question'
import Leaderboard from './Leaderboard'

function App(props) {
  useEffect(()=>{
    props.dispatch(handleInitialData())
  },[])
  return (
    <div >
      <Leaderboard />
    </div>
  );
}

export default connect()(App);
