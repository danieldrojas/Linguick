import React, { Component } from "react";
import HighScoreEl from "../../components/HighScoreEl/HighScoreEl";
import UserContext from "../../util/UserContext"

class Leaderboard extends Component {
  state = {
    quizes: [
      { username: "User 1", quizName: "Korean Alphabet", score: 100 },
      { username: "User 2", quizName: "Korean Alphabet", score: 100 },
      { username: "User 3", quizName: "Korean Alphabet", score: 90 },
      { username: "User 4", quizName: "Korean Alphabet", score: 80 },
      { username: "User 5", quizName: "Korean Alphabet", score: 70 },
      { username: "User 6", quizName: "Korean Alphabet", score: 60 },
      { username: "User 7", quizName: "Korean Alphabet", score: 50 },
    ],
  };

  static contextType = UserContext

  componentDidMount() {
    const user = this.context

    console.log("this is from learderboard: ",user)
  }

  render() {
    return (
      <div className="container">
        <h1>World Rankings</h1>
        <h3>Username QuizName Score</h3>
        {/* <h5>username: {user} </h5>   */}

        {/* <tbody>
          <tr>
            <th>Name</th>
            <th>Quiz</th>
            <th>Score</th>
          </tr> */}
          {/* {this.state.quizes.map((quiz) => (
            <HighScoreEl
              username={quiz.username}
              quizName={quiz.quizName}
              score={quiz.score}
            />
            
          ))} */}
          {/* />
        </tbody> */}
      </div>
    );
  }
}

export default Leaderboard;
