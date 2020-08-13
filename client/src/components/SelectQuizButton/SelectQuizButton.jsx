import React from "react";
import { Link } from "react-router-dom";

const SelectQuizButton = (props) => {
  const linkAddress = `/quiz/${props.id}`;
  return (
    <div>
      <Link to={linkAddress} id={props.id}>
        <button className="sq-btn">{props.quizName}</button>
      </Link>
    </div>
  );
};

export default SelectQuizButton;
