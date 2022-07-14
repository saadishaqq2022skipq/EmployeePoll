import {useEffect} from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../action/shared'

function App(props) {
  useEffect(()=>{
    props.dispatch(handleInitialData())
  },[])
  return (
    <div >
      <h1>Starter Code</h1>
    </div>
  );
}

export default connect()(App);
