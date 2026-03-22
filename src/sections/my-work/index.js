import { useState } from "react";
import WorkBox from "../../components/work-box";
import works from "../../works/index.json";
import "./index.scss";

const MyWork = ({ id }) => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div id={id} className="my-work">
      {works.map((work) => (
        <WorkBox
          key={work.id}
          work={work}
          isFlipped={selectedId === work.id}
          onFlip={() => setSelectedId(work.id)}
          onUnflip={() => setSelectedId(null)}
        />
      ))}
    </div>
  );
};

export default MyWork;
