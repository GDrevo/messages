import './App.css';
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
        {
          messages.length === 0 ?
          <h1>You're all caught up!</h1> :
          <h1>You have {messages.length} unread {messages.length > 1 ? "messages" : "message"}</h1>
        }
      </header>
    </div>
  );
}

export default App;
