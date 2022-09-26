import logo from './logo.svg';
// import './App.css';
import {useState} from 'react'

function App() {

  const order = [100,200,300]
  const [counter, setCounter] = useState(() => {
    const total = order.reduce((total,curr) =>total + curr )
    return  total
  });
  const handleIncrease = () => {
    setCounter(counter+1)

  }
  return (
    <div className="App" style={{padding:20}}>
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
    
  );
}

export default App;
