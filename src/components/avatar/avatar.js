import "./avatar.css";

export const Avatar = ({ image, alt = "" }) => {
  return <img src={image} alt={alt} />;
};
