import Message from "./Message";

const MessageList = ({ name, messages }) => {
    return (
        <>
            {messages.map((msg, index) => (
                <Message 
                    key={index}
                    name={name}
                    message={msg}
                />
            ))}
        </>
    );
};

export default MessageList;

