import React from "react";
import HighScoreEl from "../HighScoreEl/HighScoreEl";

const QuizTables = (props) => {
  let filteredArray = [];
  filteredArray = props.scoreArray.filter(
    (quiz) => quiz.newQuizName === props.quizName
  );
  let userArray = [];
  userArray = [...new Set(filteredArray.map((item) => item.newUsername))];
  let singleUserArray = [];
  for (let i=0; i<userArray.length; i++) {
    let newEntry = filteredArray.find(e => e.newUsername === userArray[i])
    singleUserArray.push(newEntry)
  }
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
          {singleUserArray.map((score) => (
            <HighScoreEl
              quizName={props.quizName}
              username={score.newUsername}
              score={score.newScore}
              rank={singleUserArray.indexOf(score) + 1}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QuizTables;
