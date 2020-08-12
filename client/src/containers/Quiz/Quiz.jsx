import React, { Component } from "react";
// import question from "./testQuestions.json"
import Timer from "../../components/Timer/Timer";
import API from "../../util/API";
import "./Quiz.css";

class Quiz extends Component {
  state = {
    quiz: [],
    question: "",
    choices: [],
    answer: "",
    index: 0,
    isDone: false,
    wrongMessage: "",
  };

  //function to randomize an array
  randomizeArray(oldArray) {
    var newArray = [];
    for (var i = oldArray.length; i > 0; i--) {
      var randIndex = Math.floor(Math.random() * oldArray.length);
      newArray.push(oldArray[randIndex]);
      oldArray.splice(randIndex, 1);
    }
    return newArray;
  }

  //Start timer and get 1st question from database
  componentDidMount() {
    API.getQuestions().then((res) => {
      console.log(res)
      let quiz = this.randomizeArray(res.data);
      this.setState({
        quiz: quiz,
        question: quiz[0].question,
        choices: this.randomizeArray(quiz[0].choices),
        answer: quiz[0].answer,
      });
    });
  }

  handleButtonPress = (event) => {
    event.preventDefault();
    //check if the guess is correct
    if (event.target.value === this.state.answer) {

      //handling for when the game is completed
      if (this.state.quiz.length === this.state.index + 1) {
        this.setState({ isDone: true });
      } else {
        
        //update the page with the next set of questions
        this.setState({ index: this.state.index + 1 }, () => {
          this.setState({
            question: this.state.quiz[this.state.index].question,
            choices: this.randomizeArray(
              this.state.quiz[this.state.index].choices
            ),
            answer: this.state.quiz[this.state.index].answer,
            wrongMessage:"",
          });
        });
      }
    }
    //if guess incorrectly
    else {
      this.setState({ wrongMessage: "Wrong Answer" });
    }
  };

  render() {
    return (
      <div className="container">
        <Timer isDone={this.state.isDone} />
        <h1 className="question">{this.state.question}</h1>

        <button
          className="quizChoice btn"
          onClick={this.handleButtonPress}
          value={this.state.choices[0]}
        >
          {this.state.choices[0]}
        </button>

        <button
          className="quizChoice btn"
          onClick={this.handleButtonPress}
          value={this.state.choices[1]}
        >
          {this.state.choices[1]}
        </button>

        <button
          className="quizChoice btn"
          onClick={this.handleButtonPress}
          value={this.state.choices[2]}
        >
          {this.state.choices[2]}
        </button>

        <button
          className="quizChoice btn"
          onClick={this.handleButtonPress}
          value={this.state.choices[3]}
        >
          {this.state.choices[3]}
        </button>
        {this.state.wrongMessage === "" ? <></> : <h6>{this.state.wrongMessage}</h6>}
      </div>
    );
  }
}

export default Quiz;
