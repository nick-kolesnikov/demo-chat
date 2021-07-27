import "./App.css";
import { Chat } from "./chat/chat";
import { Contacts } from "./contacts/contacts";

function App() {
  return (
    <div className="App">
      <Contacts />
      <Chat />
    </div>
  );
}

export default App;
