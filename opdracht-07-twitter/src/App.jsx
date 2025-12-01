import { useState } from 'react'
import './App.css'
import CreateMessage from './components/CreateMessage'
import MessageList from './components/MessageList'

function App() {
  const [messages, setMessages] = useState([]);
  let name = "Johnny";

  return (
    <>
      <h1>Opdracht 7 - Twitter</h1>

      <CreateMessage messages={messages} setMessages={setMessages} />
      
      <MessageList name={name} messages={messages} />
    </>
  )
}

export default App

