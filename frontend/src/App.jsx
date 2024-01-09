import { useState } from "react"
import { CreateTodo } from "./components/CreateTodo"
import { Todos } from "./components/Todos"

function App() {
  const [todos, setTodos] = useState([])
  fetch("http://localhost:3000/todos")
  .then(async function (res){
    const data = await res.json();
    setTodos(data.todos);
  })
  // useEffect(() => {

  // })
  return (
    <>
    <div className="flex items-center justify-center min-h-screen bg-slate-900">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">Add Todo Here</h1>
        <CreateTodo />
        <Todos todos={todos} />
      </div>
    </div>
    </>
  )
}

export default App
