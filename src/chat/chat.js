import { useState } from "react";
import { Avatar } from "../components/avatar/avatar";
import { Message } from "../components/message/message";
import "./chat.css";

const messages = [
  {
    text: "hi",
    datetime: "27.07.99 23:59:59",
  },
  {
    text: "how are you?",
    datetime: "27.07.99 23:59:59",
  },
  {
    text: "hi",
    datetime: "27.07.99 23:59:59",
    incoming: true,
  },
  {
    text: "I seee you!",
    datetime: "27.07.99 23:59:59",
  },
  {
    text: "whaat?!",
    datetime: "27.07.99 23:59:59",
    incoming: true,
  },
];

export const Chat = () => {
  const [message, setMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(message);
  };

  return (
    <main>
      <header>
        <Avatar image="https://i.pravatar.cc/50" />
        Contact name
      </header>
      <section>{messages.map(Message)}</section>
      <form onSubmit={submitHandler}>
        <textarea
          value={message}
          onChange={({ target: { value } }) => setMessage(value)}
        />
        <button>Send</button>
      </form>
    </main>
  );
};
