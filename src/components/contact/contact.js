import { Person } from "../person/person";
import "./contact.css";

export const Contact = ({
  name: { first, last },
  picture: { thumbnail },
  onClick,
  text,
}) => (
  <div className="contact" onClick={onClick}>
    <Person name={`${first} ${last}`} image={thumbnail} text={text} />
  </div>
);
