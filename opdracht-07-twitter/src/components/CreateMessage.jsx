import { useState } from "react";

const CreateMessage = ({ messages, setMessages }) => {

    const [input, setInput] = useState("");

    const userInputHandler = (e) => {
        setInput(e.target.value);
    };

    const submitMessageHandler = (e) => {
        e.preventDefault();

        setMessages([...messages, input]);

        setInput("");
    };

    return (
       <form onSubmit={submitMessageHandler}>
            <textarea 
                value={input}
                cols="50"
                rows="5"
                onChange={userInputHandler}
            />
            <button type="submit">Toevoegen</button>
       </form>
    );
};

export default CreateMessage;
