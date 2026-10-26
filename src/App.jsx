import { useState } from 'react'
import './App.css'
import { nanoid } from "nanoid";
import { Button } from './component/Button';
import { InputField } from './component/InputField';
import { TodoList } from './component/TodoList';

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
    addTodoList(todoList.map((todoItem) =>
      todoItem.id === itemId ? { ...todoItem, isCompleted: true } : todoItem
    ))
  }

  const hanldeDelete = (itemId) => {
    addTodoList(todoList.filter((item) => item.id != itemId))
  }

  return (
    <>
      <InputField testid={"todo-input"} value={todo} onChange={handleTodoChange} />
      <Button testid="add-todo" label="Add Todo" disabled={todo === ""} onClick={handleButtonClick} />
      <br />
      <br />
      <TodoList
        todoList={todoList}
        onMarkAsCompleted={handleMarkAsCompletedClick}
        onDelete={hanldeDelete}
      />
    </>
  )
}

export default App
