import React from "react";
import HighScoreEl from "../HighScoreEl/HighScoreEl";

const QuizTables = (props) => {

  let filteredArray = [];
  filteredArray = props.scoreArray.filter(
    (quiz) => quiz.newQuizName === props.quizName
  );
  return (
    <div>
      <h3>{props.quizName}</h3>
      <table>
        <tbody>
          <tr>
            <th>Rank</th>
            <th>Username</th>
            <th>Score</th>
          </tr>
          {filteredArray.map((score) => (
            <HighScoreEl
              quizName={props.quizName}
              username={score.newUsername}
              score={score.newScore}
              rank={filteredArray.indexOf(score) + 1}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QuizTables;
