
import {useRef, useReducer} from 'react'
import reducer, {initState} from './reducer'
import {setJob, addJob, deleteJob} from './actions'

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