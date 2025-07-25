import CreateTodo from "./components/CreateTodo"
import Todos from "./components/Todos"
import { useEffect, useState } from "react"

function App() {

  const [todos, setTodos] = useState([])
  useEffect(()=>{
    const fetchTodos = async () => {
      try {
        // const response = await fetch('http://localhost:3000/todos')
        const response = await fetch(import.meta.env.VITE_BACKEND_URL + '/todos', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
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
