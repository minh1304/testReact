import logo from './logo.svg';
// import './App.css';
import {useState} from 'react'

function App() {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const handelSubmit = () => {
    //Call API  
    console.log({
      name, 
      email
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
      <button onClick={handelSubmit}>Change</button> 
    </div>
  )
}
export default App;
