import "./index.scss";

const Button = ({ text, icon, link, download }) => {
  if (download) {
    return (
      <a className="AppButton" href={link} download>
        <p>{text}</p>
        {icon}
      </a>
    );
  }
  const handleClick = () => {
    window.open(link, "_blank");
  };
  return (
    <button className="AppButton" onClick={handleClick}>
      <p>{text}</p>
      {icon}
    </button>
  );
};

export default Button;
