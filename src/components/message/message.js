import "./message.css";

export const Message = ({ text, timestamp, incoming }) => {
  const classes = `message${incoming ? " incoming" : ""}`;
  return (
    <div className={classes}>
      <p className="message-text">{text}</p>
      <span>
        {new Intl.DateTimeFormat("en", {
          year: "numeric",
          month: "numeric",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: false,
        }).format(timestamp)}
      </span>
    </div>
  );
};
