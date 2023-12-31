import { useEffect, useState } from 'react'
import { NewTodoForm } from './NewTodoForm'
import { TodoList } from './TodoList'

import './App.scss'

function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []
    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {
    const id = crypto.randomUUID()
    const newTodo = { id, title, completed: false }

    setTodos(currentTodos => {
      return [
          ...todos,
          newTodo,
      ]
    })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }

        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <div className='container'>
      <NewTodoForm onSubmit={addTodo} />
      <br />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </div>
  )
}

export default App;