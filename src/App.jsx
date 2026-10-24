import { useState } from 'react'
import './App.css'
import { nanoid } from "nanoid";

function App() {
  const [todo, addTodo] = useState("");
  const [todoList, addTodoList] = useState([]);

  const handleTodoChange = (e) => { // Arrow function
    addTodo(e.target.value)
  }

  const handleButtonClick = (e) => {
    const currentTodoList = [...todoList]
    currentTodoList.push({
      id: nanoid(),
      title: todo,
      isCompleted: false
    });

    addTodoList(currentTodoList);
    addTodo("")
  }

  const handleMarkAsCompletedClick = (itemId) => {

    const newList = todoList.map((todoItem) => {
      let newTodoItem = todoItem
      if(todoItem.id == itemId){
        newTodoItem.isCompleted = true
      }
      return newTodoItem
    })

    addTodoList(newList)
  }

  const hanldeDelete = (itemId) => {
    addTodoList(todoList.filter((item) => item.id != itemId))
  }

  return (
    <>
      <input type='text' value={todo} onChange={handleTodoChange} />
      <button disabled={todo == ""} onClick={handleButtonClick} style={{ marginLeft: 10 }} >Add Todo</button>
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
            <td>{todoItem.title}</td>
            <td>{todoItem.isCompleted ? "Completed" : "Not Completed"}</td>
            <td>
              {!todoItem.isCompleted &&
              <button onClick={() => handleMarkAsCompletedClick(todoItem.id)}>Mark as completed</button> }
              <button onClick={() => hanldeDelete(todoItem.id)}>Delete</button>
            </td>
          </tr>
        })}

      </table>
    </>
  )
}

export default App
