import CreateTodo from "./components/CreateTodo"
import Todos from "./components/Todos"
import { useEffect, useState } from "react"

function App() {

  const [todos, setTodos] = useState([])
  useEffect(()=>{
    const fetchTodos = async () => {
      try {
        const response = await fetch('http://localhost:3000/todos')
        const data = await response.json()
        setTodos(data.todos)
      } catch (error) {
        console.error("Error fetching todos:", error)
      }
    }
    fetchTodos()
  },[])
  return (
    <>
    <CreateTodo />
    <Todos todos = {todos} />
    </>
  )
}

export default App
