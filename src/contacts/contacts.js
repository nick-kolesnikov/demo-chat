import { useContext } from "react";
import { ChatContext } from "../App";
import { Avatar } from "../components/avatar/avatar";
import { Contact } from "../components/contact/contact";
import "./contacts.css";

const getDateForSort = (contact) =>
    contact.lastMessage?.timestamp.getTime() || 0;

export const Contacts = () => {
  const { contacts, setSelectedContact } = useContext(ChatContext);
  const sortedContacts = Object.values(contacts).sort(
    (a, b) => getDateForSort(b) - getDateForSort(a)
  );

  return (
    <aside>
      <header>
        <Avatar image="https://i.pravatar.cc/50" />
        Your name
      </header>
      <div className="contact-list">
        {sortedContacts.map((contact) => (
          <Contact
            key={contact.login.uuid}
            {...contact}
            text={contact.lastMessage?.text}
            onClick={() => setSelectedContact(contact)}
          />
        ))}
      </div>
      <footer>© demo-chat</footer>
    </aside>
  );
};
