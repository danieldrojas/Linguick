import React from "react";

const HighScoreEl = (props) => {
  return (
    <tr>
      <td>{props.username}</td>
      <td>{props.quizName}</td>
      <td>{props.score}</td>
    </tr>
  );
};

export default HighScoreEl;
