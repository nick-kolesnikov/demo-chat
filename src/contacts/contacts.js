import { useContext } from "react";
import { ChatContext } from "../App";
import { Avatar } from "../components/avatar/avatar";
import { Contact } from "../components/contact/contact";
import "./contacts.css";

export const Contacts = () => {
  const { contacts, setSelectedContact, messages } = useContext(ChatContext);

  return (
    <aside>
      <header>
        <Avatar image="https://i.pravatar.cc/50" />
        Your name
      </header>
      <div className="contact-list">
        {contacts.map((contact) => {
          const msgs = messages[contact.login.uuid] || [{ text: "" }];
          const lastMessage = msgs[msgs.length - 1].text;
          return (
            <Contact
              key={contact.login.uuid}
              {...contact}
              text={lastMessage}
              onClick={() => setSelectedContact(contact)}
            />
          );
        })}
      </div>
      <footer>© demo-chat</footer>
    </aside>
  );
};
