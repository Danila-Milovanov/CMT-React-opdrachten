import React, {useState} from "react";

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
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Enter een Todo-Task..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
             />
             <button type="submit">Toevoegen</button>
        </form>
    );
}










