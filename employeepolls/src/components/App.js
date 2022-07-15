import {useEffect} from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../action/shared'
import Login from './Login'
import NavBar from './NavBar'

function App(props) {
  useEffect(()=>{
    props.dispatch(handleInitialData())
  },[])
  return (
    <div >
      <NavBar />
      <Login />
    </div>
  );
}

export default connect()(App);
