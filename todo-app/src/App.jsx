import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoList } from "./components/TodoList"
import { TodoInput } from "./components/TodoInput"

import { useState, useEffect } from "react"

function App() {
  // const todos = [
  //   {input: "Hello! Add your first task!", complete: true},
  //   {input: "This is a sample task.", complete: false},
  //   {input: "You can add more tasks using the input below.", complete: false},
  //   {input: "Click on a task to mark it as complete.", complete: true},
  // ]

  const [todos, setTodos] = useState([
    { input: "Hello! Add your first task!", complete: true }
  ])
  const [selectedTab, setSelectedTab] = useState("Open")

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, {input: newTodo, complete: false}]
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleCompleteTodo(index) {
    // Update/Edit/Modify a todo item
    let newTodoList = [...todos]
    let completedTodo = newTodoList[index]
    completedTodo["complete"] = true
    newTodoList[index] = completedTodo
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleDeleteTodo(index) {
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex != index
    })
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleSaveData(currTodos) {
    localStorage.setItem('todo-app', JSON.stringify({ todos: currTodos }))
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem('todo-app')) {
      return }
    let db = JSON.parse(localStorage.getItem('todo-app'))
    setTodos(db.todos)
  }, [])


  return (
    <>
      <Header todos={todos} />
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab}
      todos={todos} />
      <TodoList handleCompleteTodo={handleCompleteTodo}
      handleDeleteTodo={handleDeleteTodo}
      selectedTab={selectedTab}
      todos={todos} />
      <TodoInput handleAddTodo={handleAddTodo}/>
    </>
  )
}

export default App
