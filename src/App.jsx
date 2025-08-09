import { useEffect, useState } from 'react'
import './App.css'
import { AddTodoForm } from './components/AddTodoForm'
import { TodoList } from './components/TodoList.jsx'

const getInitialTodos = () => {
  const savedTodos = localStorage.getItem('todos');
  return savedTodos ? JSON.parse(savedTodos) : [];
}

function App() {

  const [todos, setTodos] = useState(getInitialTodos)

  //addTodo logic
  const addTodo = (value) => {
    const todo = {
      id: Date.now(),
      text: value,
      completed: false
    }
    setTodos([...todos, todo])
  }

  //deleteTodo Logic
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => id !== todo.id))
  }

  //toggleTodo Logic
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => (
        todo.id === id ? {...todo, completed: !todo.completed} : todo 
      ))
    )
  }

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if(storedTodos) {
      const Todos = JSON.parse(storedTodos);
      setTodos(Todos)
    }
  },[])

  useEffect(() => {
    localStorage.setItem('todos',JSON.stringify(todos));
  },[todos])

  return (
    <>
      <div>
        <h1>Task Manager</h1>
        <AddTodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
        />
      </div>
    </>
  )
}

export default App
