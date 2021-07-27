import "./message.css";

export const Message = ({ text, datetime, incoming }) => {
  const classes = `message${incoming ? ' incoming' : ''}`;
  return (
    <div className={classes}>
      <p className="message-text">{text}</p>
      <span>{datetime}</span>
    </div>
  );
};
