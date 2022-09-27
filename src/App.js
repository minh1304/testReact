import logo from './logo.svg';
// import './App.css';
import {useState} from 'react'

const courses = [
  {
    id: 1,
    name: 'HTML/CSS'
  },
  {
    id: 2,
    name: "JavaScript"
  },
  {
    id: 3,
    name: "ReactJS"
  }
]

function App() {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [checked,setChecked] = useState(1)

  const handelSubmit = () => {
    //Call API  
    console.log({
      name, 
      email,
      id: checked
    });
  } 
  return (
    <div style={{padding:32}}>


      <input 
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <br></br>
      <input 
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      {courses.map(course => (
        <div key={course.id}>
          <input
            type="radio" 
            checked ={checked === course.id}
            onChange={() => setChecked(course.id)}>
          </input> 
          {course.name}
        </div>
      ))}

      <button onClick={handelSubmit}>Change</button> 
    </div>
  )
}
export default App;
