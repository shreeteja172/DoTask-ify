import CreateTodo from "./components/CreateTodo"
import { useState } from "react"

function App() {

  const [todos, setTodos] = useState([])
  const fetchTodos = async () => {
    const response = await fetch("http://localhost:3000/todos")
    const data = await response.json()
    setTodos(data.todos)
  }
  return (
    <>
    <CreateTodo />
    <Todos todos = {todos} />
    </>
  )
}

export default App
