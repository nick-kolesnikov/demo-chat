import { useEffect, useState } from "react";
import { Avatar } from "../components/avatar/avatar";
import { Contact } from "../components/contact/contact";
import "./contacts.css";

export const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=20")
      .then((res) => res.json())
      .then(({ results }) => setContacts(results));
  }, []);

  return (
    <aside>
      <header>
        <Avatar image="https://i.pravatar.cc/50" />
        Your name
      </header>
      <div className="contact-list">{contacts.map(Contact)}</div>
      <footer>© demo-chat</footer>
    </aside>
  );
};
