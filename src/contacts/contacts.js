import { useContext } from "react";
import { ChatContext } from "../App";
import { Avatar } from "../components/avatar/avatar";
import { Contact } from "../components/contact/contact";
import "./contacts.css";

export const Contacts = () => {
  const { contacts, setSelectedContact } = useContext(ChatContext);

  return (
    <aside>
      <header>
        <Avatar image="https://i.pravatar.cc/50" />
        Your name
      </header>
      <div className="contact-list">
        {contacts.map((contact) => (
          <Contact
            key={contact.login.uuid}
            {...contact}
            onClick={() => setSelectedContact(contact)}
          />
        ))}
      </div>
      <footer>© demo-chat</footer>
    </aside>
  );
};
