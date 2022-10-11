import { useStore, actions } from "./store";
function App() {
  const [state,dispatch] = useStore()
  const {todos, todoInput} = state 
  const handleAdd= () =>{
     dispatch(actions.addToDo(todoInput))
  }
  console.log(todos);
 return (
  <div>
    <input 
      value={todoInput}
      placeholder='Enter todo...'
      onChange={e => {
        dispatch(actions.setToDoInPut(e.target.value))
      }}
    />
    <button onClick={handleAdd}>Add</button>
    {todos.map((todo,index)=>(
      <li key={index}>
        {todo}
      </li>
    ))}
  </div>
 )
}
export default App