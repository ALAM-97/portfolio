import "./index.scss";

const WorkBox = ({ work, isFlipped, onFlip, onUnflip }) => {
  return (
    <div className={`WorkBox ${work.width}`}>
      <div className={`card-inner ${isFlipped ? "flipped" : ""}`}>
        <div
          className="card-face card-front"
          style={{
            backgroundColor: work.bgcolor,
            color: work.textcolor,
            outlineColor: work.bordercolor,
          }}
          onClick={onFlip}
        >
          <div className="upper-line">
            <div className="id">{work.id}</div>
            <div>{work.name}</div>
          </div>
          <div className={work.width === "full" ? "small-logo" : "logo"}>
            <img src={work.logo} alt={work.name} />
          </div>
          <div className="bottom-line">
            <div>{work.info}</div>
            <span className="material-symbols-outlined icon">north_east</span>
          </div>
        </div>

        <div
          className="card-face card-back"
          style={{
            backgroundColor: work.bgcolor,
            color: work.textcolor,
            outlineColor: work.bordercolor,
          }}
        >
          <div className="back-header">
            <button
              className="back-btn"
              onClick={onUnflip}
              style={{ color: work.textcolor }}
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <div className="back-name">{work.name}</div>
          </div>
          <div className="back-description">
            {work.description.split("\n\n").map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          {work.link && (
            <div className="back-link">
              <a
                href={work.link}
                target="_blank"
                rel="noreferrer"
                style={{ color: work.textcolor }}
              >
                <span className="material-symbols-outlined">open_in_new</span>
                Visita il sito
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkBox;
