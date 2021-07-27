import { Person } from "../person/person";
import "./contact.css";

export const Contact = ({
  login: { uuid },
  name: { first, last },
  picture: { thumbnail },
}) => (
  <div className="contact" key={uuid}>
    <Person name={`${first} ${last}`} image={thumbnail} />
  </div>
);