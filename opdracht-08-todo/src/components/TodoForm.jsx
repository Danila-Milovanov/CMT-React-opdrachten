import React, { useState } from "react";

export default function TodoForm({ onAdd }) {
    const [inputValue, setInputValue] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        const text = inputValue.trim();
        if (!text) return;
        onAdd(text);
        setInputValue("");
    }

    return (
        <form className="flex gap-2 mb-4" onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Enter een Todo-Task..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-xl
                           focus:outline-none focus:ring-2 focus:ring-blue-400
                           placeholder-gray-400"
             />
             <button 
                 type="submit" 
                 className="px-5 py-2 bg-blue-500 text-white font-semibold
                            rounded-xl hover:bg-blue-600 active:scale-95 transition"
             >
                 Toevoegen
             </button>
        </form>
    );
}











