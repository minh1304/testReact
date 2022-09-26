import logo from './logo.svg';
// import './App.css';
import {useState} from 'react'

function App() {

  const [info, setInfo] = useState({
    name: "Minh",
    age: 21,
  });
  const handleUpdate = () => {
    setInfo(prev => ({
      ...prev,
      id: 19521858
    }))

  }
  return (
    <div className="App" style={{padding:20}}>
      <h1>{JSON.stringify(info)}</h1>
      <button onClick={handleUpdate}>Update</button>
    </div>
    
  );
}

export default App;
