import React, { Component } from "react";
import SelectQuizButton from "../../components/SelectQuizButton/SelectQuizButton";
import API from "../../util/API";

class SelectQuiz extends Component {
  state = {
    quizzes: [],
  };

  componentDidMount() {
    API.getAllQuizzes("/quiz").then((res) => {
      this.setState({ quizzes: res.data });
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Select quiz to take:</h1>
        {this.state.quizzes.map((quiz) => (
          <SelectQuizButton
            quizName={quiz.quiz_name}
            id={quiz._id}
            key={quiz._id}
          />
        ))}
      </div>
    );
  }
}

export default SelectQuiz;
