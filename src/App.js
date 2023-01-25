import './App.css';
import Form from "./Form"
import React from "react"

function App() {
  const [messages, setMessages] = React.useState(["a", "b"])

  function message(messages) {
    if (messages.length > 0) {
      return messages.length > 1 ? `You have ${messages.length} unread messages` : "You have 1 unread message"
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <Form />
      </header>
    </div>
  );
}

export default App;
