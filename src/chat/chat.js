import { useContext, useEffect, useRef, useState } from "react";
import { ChatContext } from "../App";
import { Avatar } from "../components/avatar/avatar";
import { Message } from "../components/message/message";
import "./chat.css";

export const Chat = () => {
  const [text, setText] = useState("");
  const [flipper, flip] = useState(false);
  const { selectedContact, messages, addMessage } = useContext(ChatContext);

  const elementRef = useRef();
  useEffect(
    () => elementRef.current && elementRef.current.scrollIntoView(),
    [flipper]
  );

  const submitHandler = (e) => {
    e.preventDefault();
    addMessage(selectedContact.login.uuid, {
      text,
      datetime: new Date(),
    });
    setText("");
    flip(!flipper);
  };

  const keyUpHandler = (e) => {
    if (e.key === "Enter" && e.ctrlKey) {
      submitHandler(e);
    }
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
      <section>
        {(messages[uuid] || []).map((message, i) => (
          <Message key={i} {...message} />
        ))}
        <span ref={elementRef} />
      </section>
      <form onSubmit={submitHandler}>
        <textarea
          value={text}
          onChange={({ target: { value } }) => setText(value)}
          onKeyUp={keyUpHandler}
        />
        <button>Send</button>
      </form>
    </main>
  );
};
