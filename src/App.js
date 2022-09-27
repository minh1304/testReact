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
  const [checked,setChecked] = useState([])
  const handelCheck = (id) => {
    setChecked(prev => {
      const isChecked = checked.includes(id)
      if(isChecked) {
        //uncheck
        return checked.filter(item => item!==id)
        
      }else{ //check
        return [...prev,id]
      }

    } 
    )
  }

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
            type="checkbox" 
            checked ={checked.includes(course.id)}
            onChange={() => handelCheck(course.id)}>
          </input> 
          {course.name}
        </div>
      ))}

      <button onClick={handelSubmit}>Change</button> 
    </div>
  )
}
export default App;
