import React from "react";

const HighScoreEl = (props) => {
  return (
    <tr>
      <td>{props.rank}</td>
      <td>{props.username}</td>
      <td>{props.score}</td>
    </tr>
  );
};

export default HighScoreEl;
