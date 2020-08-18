import React, { Component } from "react";
//import { UserConsumer } from "../../util/UserContext";
//import APR from "../../util/API";
import API from "../../util/API";
import QuizTables from "../../components/QuizTables/QuizTables";

class Leaderboard extends Component {
  // set the state to empty
  state = {
    quizes: [],
    quizNames: [],
  };

  // scoreArray holds the score data passed in from the props
  scoreArray = [];

  // holds the names of all quizzes for sorting purposes
  quizNameArray = [];

  // when the component mounts
  componentDidMount() {
    // get all quiz scores from the database
    API.getAllUsers({}).then((res) => {
      this.getHighScores(res.data);
    });
    // get all quiz data from the database
    API.getAllQuizzes({}).then((res) => {
      // get the name of each quiz and puts it into an array
      for (let i = 0; i < res.data.length; i++) {
        this.quizNameArray.push({ quizName: res.data[i].quiz_name });
      }
      // set the quiz data into the state
      this.setState({ quizNames: this.quizNameArray });
    });
  }

  getHighScores(array) {
    for (var i = 0; i < array.length; i++) {
      // get the username from the score entry
      let newUsername = array[i].username;
      let newQuizName = "";
      let newScore = "";
      // get the quizname and score from each quiz taken
      for (let j = 0; j < array[i].quizzes_taken.length; j++) {
        newQuizName = array[i].quizzes_taken[j].quizName;
        newScore = array[i].quizzes_taken[j].score;
        // push the data into the score array
        this.scoreArray.push({ newUsername, newQuizName, newScore });
      }
      // sort the data based on score
      this.scoreArray.sort(this.sortScores);
      // push the score data into the array
      this.setState({ quizes: this.scoreArray });
    }
  }

  sortScores(a, b) {
    // sort the data based on score
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
            key={index}
            quizName={quizName.quizName}
          />
        ))}

        <div></div>
      </div>
    );
  }
}

export default Leaderboard;
