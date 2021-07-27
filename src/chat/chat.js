import { useContext, useState } from "react";
import { ChatContext } from "../App";
import { Avatar } from "../components/avatar/avatar";
import { Message } from "../components/message/message";
import "./chat.css";

export const Chat = () => {
  const [text, setText] = useState("");
  const { selectedContact, messages, addMessage } = useContext(ChatContext);

  const submitHandler = (e) => {
    e.preventDefault();
    addMessage(selectedContact.login.uuid, {
      text,
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
    setText("");
  };

  if (!selectedContact) return <main>Select contact for chatting</main>;

  const {
    picture: { thumbnail },
    name: { first, last },
    login: { uuid },
  } = selectedContact;

  return (
    <main>
      <header>
        <Avatar image={thumbnail} />
        {first} {last}
      </header>
      <section>{(messages[uuid] || []).map(Message)}</section>
      <form onSubmit={submitHandler}>
        <textarea
          value={text}
          onChange={({ target: { value } }) => setText(value)}
        />
        <button>Send</button>
      </form>
    </main>
  );
};
