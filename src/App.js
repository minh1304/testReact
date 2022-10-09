import logo from './logo.svg';
// import './App.css';
import {useState, useReducer} from 'react'
import Content from './Content';

//Inti State
const initSate = 0
//Action
const UP_ACTION = 'up'
const DOWN_ACTION = 'down'
//reducer
const reducer = (state, action) => {
  switch(action){
    case UP_ACTION:
      return state+1
    case DOWN_ACTION:
      return state-1
      default:
        throw new Error('Invalid action')
  }

}

function App() {
  const [count, dispatch] = useReducer(reducer,initSate)
  return (
    <div style={{padding: '0 20px'}}>
      <h1>{count}</h1>
      <button
        onClick={() => dispatch(DOWN_ACTION)}
      >
        Down
      </button>

      <button onClick ={()=>dispatch(UP_ACTION)}>
        Up
      </button>

    </div>
  )

}
export default App