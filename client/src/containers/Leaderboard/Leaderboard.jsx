import React, { Component } from "react";
import HighScoreEl from "../../components/HighScoreEl/HighScoreEl";

class Leaderboard extends Component {
  state = {
    quizes: [
      { username: "User 1", score: 100 },
      { username: "User 2", score: 100 },
      { username: "User 3", score: 90 },
      { username: "User 4", score: 80 },
      { username: "User 5", score: 70 },
      { username: "User 6", score: 60 },
      { username: "User 7", score: 50 },
    ],
  };

  render() {
    return (
      <div className="container">
        <h1>World Rankings</h1>
        <h3>Username QuizName Score</h3>
        <ol>
          {this.state.quizes.map((quiz) => (
            <HighScoreEl
              username={quiz.username}
              score={quiz.score}
            />
          ))}
          {/* Create component for each li */}
          {/* <li>Username QuizName Score</li>
          <li>Username QuizName Score</li>
          <li>Username QuizName Score</li>
          <li>Username QuizName Score</li>
          <li>Username QuizName Score</li>
          <li>Username QuizName Score</li> */}
        </ol>
      </div>
    );
  }
}

export default Leaderboard;
