import './App.css'
import React, {useState} from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


function App() {
    const [todos, setTodos] = useState ([]);

    function addTodo(text) {
      const newTodo = {
        id: Date.now(),
        text,
      };
      setTodos((prev) => [...prev, newTodo]);
    }

  return (
    <>
      <h1>Opdracht 8 - To Do</h1>
      <TodoForm onAdd={addTodo} />
      <TodoList todos={todos} />
    </>
  )
}




export default App
