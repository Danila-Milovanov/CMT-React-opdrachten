import React from "react";

export default function TodoList({ todos, onToggleComplete, onDelete }) {
    return (
        <ul className="space-y-2">
            {todos.map((todo) => (
                <li
                    key={todo.id}
                    className={`flex justify-between items-center p-3 rounded-xl
                               ${todo.completed ? 'bg-green-100 line-through text-gray-500' : 'bg-gray-100 hover:bg-gray-200'}`}
                >
                    <span
                        onClick={() => onToggleComplete(todo.id)}
                        className="cursor-pointer flex-1"
                    >
                        {todo.text}
                    </span>
                    <button
                        onClick={() => onDelete(todo.id)}
                        className="ml-2 px-3 py-1 bg-red-500 text-white rounded-xl
                                   hover:bg-red-600 active:scale-95 transition"
                    >
                        Verwijder
                    </button>
                </li>
            ))}
        </ul>
    );
}
