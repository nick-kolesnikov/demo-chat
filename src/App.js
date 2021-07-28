import { createContext, useEffect, useState } from "react";
import { Chat } from "./chat/chat";
import { Contacts } from "./contacts/contacts";
import "./App.css";

export const ChatContext = createContext({
  contacts: {},
  selectedContact: null,
  messages: {},
  setSelectedContact: () => {},
  addMessage: () => {},
});

function App() {
  const [selectedContact, setSelectedContact] = useState(null);
  const [messages, setMessages] = useState({});
  const [contacts, setContacts] = useState({});
  const addMessage = (contactId, text) => {
    const oldMessages = messages[contactId] || [];
    const response = [];
    const responseCount = Math.floor(Math.random() * 3);
    for (let i = 0; i < responseCount; i++) {
      response.push({
        incoming: true,
        text: `response message ${oldMessages.length}-${i + 1}`,
        timestamp: new Date(),
      });
    }
    const msgs = [...oldMessages, { text, timestamp: new Date() }, ...response];
    setMessages({
      ...messages,
      [contactId]: msgs,
    });
    setContacts({
      ...contacts,
      [contactId]: {
        ...contacts[contactId],
        lastMessage: msgs[msgs.length - 1],
      },
    });
  };

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=20")
      .then((res) => res.json())
      .then(({ results }) =>
        setContacts(
          results.reduce((acc, c) => ({ ...acc, [c.login.uuid]: c }), {})
        )
      );
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
