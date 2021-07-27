import { createContext, useEffect, useState } from "react";
import { Chat } from "./chat/chat";
import { Contacts } from "./contacts/contacts";
import "./App.css";

export const ChatContext = createContext({
  contacts: [],
  selectedContact: null,
  messages: {},
  setSelectedContact: () => {},
  addMessage: () => {},
});

function App() {
  const [selectedContact, setSelectedContact] = useState(null);
  const [messages, setMessages] = useState({});
  const [contacts, setContacts] = useState([]);
  const addMessage = (contactId, message) => {
    const response = [];
    const responseCount = Math.floor(Math.random() * 3);
    for (let i = 0; i < responseCount; i++) {
      response.push({
        incoming: true,
        text: "response message",
        datetime: new Intl.DateTimeFormat("en", {
          year: "numeric",
          month: "numeric",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: false,
        }).format(new Date()),
      });
    }
    setMessages({
      ...messages,
      [contactId]: [...(messages[contactId] || []), message, ...response],
    });
  };

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=20")
      .then((res) => res.json())
      .then(({ results }) => setContacts(results));
  }, []);

  return (
    <ChatContext.Provider
      value={{
        contacts,
        selectedContact,
        messages,
        setSelectedContact,
        addMessage,
      }}
    >
      <Contacts />
      <Chat />
    </ChatContext.Provider>
  );
}

export default App;
