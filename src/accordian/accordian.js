import React, { useState } from "react";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./accordian.css";

const Accordian = (props) => {
  const [active, setActive] = useState(false);

  const changeStatusHandler = () => {
    setActive((status) => !status);
  };

  return (
    <div className="accordian">
      <div
        className={`accordian__title-bar ${active ? "active" : ""}`}
        onClick={changeStatusHandler}
      >
        <div className="accordian__title">{props.title}</div>
        <div className={`accordian__icon ${active ? "rotate" : ""}`}>
          <FontAwesomeIcon icon={faChevronUp} />
        </div>
      </div>
      <div className={`accordian__content ${active ? "display" : ""}`}>
        {props.content}
      </div>
    </div>
  );
};

export default Accordian;
