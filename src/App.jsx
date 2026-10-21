import { useState } from 'react'
import './App.css'

function App() {
  const [todo, addTodo] = useState("");
  const [todoList, addTodoList] = useState([]);

  const handleTodoChange = (e) => { // Arrow function
    addTodo(e.target.value)
  }

  const handleButtonClick = (e) => {
    const currentTodoList = [...todoList]
    currentTodoList.push(todo);
    addTodoList(currentTodoList);
    addTodo("")
  }

  return (
    <>
      <input type='text' value={todo} onChange={handleTodoChange} />
      <button onClick={handleButtonClick} style={{ marginLeft: 10 }} >Add Todo</button>
      {/* <div>Current value of textbox: {todo}</div>
      <div>Current todoList: {JSON.stringify(todoList)}</div> */}
      <br />
      <br />
      <table border={1}>
        <tr>
          <th>Sl no</th>
          <th>Todo Title</th>
          <th>Is Completed</th>
          <th>Action</th>
        </tr>
        {todoList.map((todoItem, index) => {
          return <tr>
            <td>{index + 1}</td>
            <td>{todoItem}</td>
            <td></td>
            <td></td>
          </tr>
        })}

      </table>
    </>
  )
}

export default App
