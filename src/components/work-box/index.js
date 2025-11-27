import "./index.scss";

const WorkBox = ({ work }) => {
  const handleClick = () => {
    window.open(work.link, "_blank");
  };
  return (
    <div
      className={`WorkBox ${work.width}`}
      style={{
        backgroundColor: work.bgcolor,
        color: work.textcolor,
        outlineColor: work.bordercolor,
      }}
      onClick={() => (work.link !== null ? handleClick() : null)}
    >
      <div className="upper-line">
        <div className="id">{work.id}</div>
        <div>{work.name}</div>
      </div>
      <div className={`${work.width === "full" ? "small-logo" : "logo"}`}>
        <img src={work.logo} alt={work.name} />
      </div>
      <div className="bottom-line">
        <div>{work.info}</div>
        {work.link && (
          <span className="material-symbols-outlined icon">north_east</span>
        )}
      </div>
    </div>
  );
};

export default WorkBox;
