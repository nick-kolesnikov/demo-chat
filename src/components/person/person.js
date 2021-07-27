import { Avatar } from "../avatar/avatar";
import "./person.css";

export const Person = ({ name, image, text }) => {
  return (
    <div className="person">
      <Avatar image={image} />
      <div className="details">
        <span className="name">{name}</span>
        {text && <em className="text">{text}</em>}
      </div>
    </div>
  );
};
