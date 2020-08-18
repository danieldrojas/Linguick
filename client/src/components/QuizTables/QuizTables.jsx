import React from "react";
import HighScoreEl from "../HighScoreEl/HighScoreEl";
import "./style.css";

const QuizTables = (props) => {
  let filteredArray = [];
  // get all scores based on the name of the current quiz
  filteredArray = props.scoreArray.filter(
    (quiz) => quiz.newQuizName === props.quizName
  );
  let userArray = [];
  // get the names of all users for filtering purposes
  userArray = [...new Set(filteredArray.map((item) => item.newUsername))];
  let singleUserArray = [];
  // return the highest score on the given quiz for the given user
  for (let i = 0; i < userArray.length; i++) {
    let newEntry = filteredArray.find((e) => e.newUsername === userArray[i]);
    // push into array
    singleUserArray.push(newEntry);
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
          {singleUserArray.map((score, index) => (
            <HighScoreEl
              key={index}
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
