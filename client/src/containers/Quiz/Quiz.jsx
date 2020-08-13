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
    penalty: false,
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
    console.log(this.props)
    API.getOneQuiz(this.props.match.params.id).then((res) => {
      // console.log(this.props.id)
      let quiz = this.randomizeArray(res.data.questions);
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
    //if there a penalty then handleButtonPress does nothing
    if (!this.state.penalty) {
      //check if the guess is correct
      if (event.target.value === this.state.answer) {
        let btn = document.querySelectorAll(`button`);
        for (let i = 0; i < btn.length; i++) {
          btn[i].className = "quizChoice btn";
        }
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
              wrongMessage: "",
            });
          });
        }
      }
      //if guess incorrectly
      else {
        this.setState({
          wrongMessage: "Wrong Answer! Wait 1 second before trying again",
          penalty: true,
        });
        document.querySelector(
          `button[value=${event.target.value}]`
        ).className = "quizChoice btn wrong";

        let btn = document.querySelectorAll(`button`);
        for (let i = 0; i < btn.length; i++) {
          if (!btn[i].classList.contains("wrong")) {
            btn[i].className = "quizChoice btn penalty";
          }
        }

        setTimeout(() => {
          this.setState({ penalty: false });
          let btn = document.querySelectorAll(`button`);
          for (let i = 0; i < btn.length; i++) {
            if (!btn[i].classList.contains("wrong")) {
              btn[i].className = "quizChoice btn";
            }
          }
        }, 1000);
      }
    }
  };

  render() {
    return (
      <div className="container">
        <Timer isDone={this.state.isDone} />
        <h1 className="question">{this.state.question}</h1>

        {this.state.choices.map((choice) => (
          <button
            key={choice}
            className="quizChoice btn"
            value={choice}
            onClick={this.handleButtonPress}
          >
            {choice}
          </button>
        ))}

        {this.state.wrongMessage === "" ? (
          <></>
        ) : (
          <h6>{this.state.wrongMessage}</h6>
        )}
      </div>
    );
  }
}

export default Quiz;
