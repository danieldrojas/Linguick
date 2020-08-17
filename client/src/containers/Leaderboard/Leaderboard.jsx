import React, { Component } from "react";
import QuizTableEl from "../../components/QuizTableEl/QuizTableEl";
//import { UserConsumer } from "../../util/UserContext";
//import APR from "../../util/API";
import API from "../../util/API";
import QuizTables from "../../components/QuizTables/QuizTables";

class Leaderboard extends Component {
  state = {
    quizes: [],
    quizNames: []
  };

  scoreArray = [];

  quizNameArray = [];

  componentDidMount() {
    API.getAllUsers({}).then((res) => {
      this.getHighScores(res.data);
    });
    API.getAllQuizzes({}).then((res) => {
      for (let i = 0; i < res.data.length; i++) {
        this.quizNameArray.push({ quizName: res.data[i].quiz_name });
        
      }
      this.setState({quizNames: this.quizNameArray})
    });
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
        {this.state.quizNames.map((quizName, index) => (
          <QuizTables
            scoreArray={this.scoreArray}
            // rank={this.state.quizes.indexOf(quiz) + 1}
            key={index}
            // username={quiz.newUsername}
            quizName={quizName.quizName}
            // score={quiz.newScore}
          />
        ))}

        <div></div>
      </div>
    );
  }
}

export default Leaderboard;
