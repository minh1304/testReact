import logo from './logo.svg';
// import './App.css';
import {useRef, useReducer} from 'react'
import Content from './Content';

//Inti State
const initState = {
  job: '',
  jobs: []
}
//Action
const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete job'


const setJob = payload => {
  return {
    type: SET_JOB,
    payload 
  }
}
const addJob = payload => {
  return {
    type: ADD_JOB,
    payload
  }
}
const deleteJob = payload => {
  return {
    type: DELETE_JOB,
    payload
  }
}

//reducer
const reducer = (state, action) => {
  let newState
  switch(action.type) {
    case SET_JOB:
        newState = {
          ...state,
          job: action.payload
        }
        break
    case ADD_JOB:
      newState = {
        ...state,
        jobs: [...state.jobs, action.payload]
      }
      break
    case DELETE_JOB:
      const newJobs = [...state.jobs]
      newJobs.splice(action.payload, 1)
      newState = {
        ...state,
        jobs: newJobs
      }
      break
    default: 
        throw new Error('Invalid action.')
  }
  return newState

}

function App() {
  const [state, dispatch] = useReducer(reducer, initState)
  const {job, jobs} = state
  const inputRef = useRef()
  const handleSubmit = () => {
    dispatch(addJob(job))
    dispatch(setJob(''))
    inputRef.current.focus()

  }
  return (
    <div style={{padding: '0 20px'}}>
      <h3>To do</h3>
      <input
        ref={inputRef}
        value={job}
        placeholder='Enter todo ...'
        onChange={(e) => {
          dispatch(setJob(e.target.value)) 
        }}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job,index) => (
           <li key={index}>
            {job} 
            <span 
              style={{cursor: 'pointer'}} 
              onClick={() => dispatch(deleteJob(index))}
            >
            &times;
            </span>  
           </li>
        ))}
       
      </ul>

    </div>
  )
 
}
export default App