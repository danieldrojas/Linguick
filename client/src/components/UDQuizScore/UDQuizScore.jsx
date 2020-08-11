import React from "react";

const UDQuizScore = (props) => {
  return (
    <tr>
      <td className="quizNameCol">{props.quizName}</td>
      <td className="scoreCol">{props.score}</td>
    </tr>
  );
};

export default UDQuizScore;
