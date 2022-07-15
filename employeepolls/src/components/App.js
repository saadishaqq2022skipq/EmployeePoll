import {useEffect} from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../action/shared'
//import Login from './Login'
//import NavBar from './NavBar'
//import PollPage from './PollPage'
import Question from './Question'

function App(props) {
  useEffect(()=>{
    props.dispatch(handleInitialData())
  },[])
  return (
    <div >
      <Question />
    </div>
  );
}

export default connect()(App);
