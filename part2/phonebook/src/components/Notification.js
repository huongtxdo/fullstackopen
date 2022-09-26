const Notification = ({ message }) => {
  if (message === null) {
    return null;
  }
  const notiStyle = {
    color: "green",
    background: "rgb(187, 178, 178)",
    fontSize: 20,
    padding: 10,
    marginBottom: 10,
    borderStyle: "solid",
    borderRadius: 5,
  };
  return (
    <div style={notiStyle} className="error">
      {message}
    </div>
  );
};

export default Notification;
