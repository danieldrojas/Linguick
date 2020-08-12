import React, { Component } from "react";
import HighScoreEl from "../../components/HighScoreEl/HighScoreEl";
import { UserConsumer } from "../../util/UserContext";
import APR from "../../util/API";
import API from "../../util/API";

class Leaderboard extends Component {
  state = {
    quizes: [],

    // { username: "User 1", quizName: "Korean Alphabet", score: 100 },
    // { username: "User 2", quizName: "Korean Alphabet", score: 100 },
    // { username: "User 3", quizName: "Korean Alphabet", score: 90 },
    // { username: "User 4", quizName: "Korean Alphabet", score: 80 },
    // { username: "User 5", quizName: "Korean Alphabet", score: 70 },
    // { username: "User 6", quizName: "Korean Alphabet", score: 60 },
    // { username: "User 7", quizName: "Korean Alphabet", score: 50 },
  };

  scoreArray = [];

  // {username: res.data.scoreArray[0].username, quizName: res.data.scoreArray[0].quizzes_taken[0].quizName, score: res.data.scoreArray[0].quizzes_taken[0].score}

  componentDidMount() {
    API.getAllUsers({}).then((res) => {
      // this.scoreArray.push(res.data);
      this.getHighScores(res.data);
      // this.setState({quizes: this.scoreArray[0]});
      // console.log(this.state.quizes.res.data);
    });
    // const user = this.context

    // console.log("this is from learderboard: ",user)
  }

  getHighScores(array) {
    for (var i = 0; i < array.length; i++) {
      let newUsername = array[i].username;
      let newQuizName = "";
      let newScore = "";
      for (let j = 0; j < array[i].quizzes_taken.length; j++) {
        newQuizName = array[i].quizzes_taken[j].quizName;
        newScore = array[i].quizzes_taken[j].score;
        this.scoreArray.push({ newUsername, newQuizName, newScore });
      }
      this.scoreArray.sort(this.sortScores);
      this.setState({ quizes: this.scoreArray });
    }
  }

  sortScores(a, b) {
    const scoreA = a.newScore;
    const scoreB = b.newScore;

    let comparison = 0;
    if (scoreA > scoreB) {
      comparison = 1;
    } else if (scoreA < scoreB) {
      comparison = -1;
    }
    return comparison * -1;
  }

  render() {
    return (
      <div className="container">
        <h1>World Rankings</h1>
        <h3>Username QuizName Score</h3>

        <tbody>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Quiz</th>
            <th>Score</th>
          </tr>
          {console.log(this.state.quizes)}
          {this.state.quizes.map((quiz) => (
            <HighScoreEl
              rank={this.state.quizes.indexOf(quiz) + 1}
              username={quiz.newUsername}
              quizName={quiz.newQuizName}
              score={quiz.newScore}
            />
          ))}
        </tbody>

        <div>
          <UserConsumer>
            {(props) => {
              return (
                <>
                  <h1>user: {props.name}</h1>
                  <h1>email: {props.email}</h1>
                  <h1>scores: {props.total_scores}</h1>
                </>
              );
            }}
          </UserConsumer>
        </div>
      </div>
    );
  }
}

export default Leaderboard;
