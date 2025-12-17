import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function App() {
    const [todos, setTodos] = useState([]);

    function handleAdd(text) {
        const newTodo = { id: Date.now(), text, completed: false };
        setTodos([newTodo, ...todos]);
    }

    function handleToggleComplete(id) {
        setTodos(
            todos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    }

    function handleDelete(id) {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4">
            <h1 className="text-3xl font-bold mb-6">Opdracht-08-Todo-list</h1>
            <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-md">
                <TodoForm onAdd={handleAdd} />
                <TodoList
                    todos={todos}
                    onToggleComplete={handleToggleComplete}
                    onDelete={handleDelete}
                />
            </div>
        </div>
    );
}

