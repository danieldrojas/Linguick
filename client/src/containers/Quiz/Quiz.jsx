import React, { Component } from "react";
// import question from "./testQuestions.json"
import Timer from "../../components/Timer/Timer";
import Soundbtn from "../../components/Soundbtn/Soundbtn";
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
    name:"",
    id: 0
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
    API.getOneQuiz(this.props.match.params.id).then((res) => {
      let quiz = this.randomizeArray(res.data.questions);
      this.setState({
        quiz: quiz,
        question: quiz[0].question,
        choices: this.randomizeArray(quiz[0].choices),
        answer: quiz[0].answer,
        name:res.data.quiz_name,
        id: res.data._id
      });
    });
  }

  handleButtonPress = (event) => {
    event.preventDefault();
    //if there a penalty then handleButtonPress does nothing
    if (!this.state.penalty) {
      //check if the guess is correct
      if (event.target.value === this.state.answer) {
        let btn = document.getElementsByClassName(`quizChoice`);
        for (let i = 0; i < btn.length; i++) {
          btn[i].className = "quizChoice btn";
        }
        //handling for when the game is completed
        if (this.state.quiz.length === this.state.index + 1) {
          this.setState({ 
            isDone: true,
            wrongMessage:"YOU COMPLETED THE QUIZ"
           });
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
        //Give the user a wrong answer message and sets the penalty to true
        this.setState({
          wrongMessage: "Wrong Answer! Wait 1 second before trying again",
          penalty: true,
        });
        //Change the button pressed to be red to show it is wrong
        document.querySelector(
          `button[value=${event.target.value}]`
        ).className = "quizChoice btn wrong";

        //change all other buttons that are not red to be greyed out and unclickable 
        let btn = document.getElementsByClassName(`quizChoice`);
        console.log(btn)
        for (let i = 0; i < btn.length; i++) {
          if (!btn[i].classList.contains("wrong")) {
            btn[i].className = "quizChoice btn penalty";
          }
        }
        //Time out to change the button back to their normal colors unless it was already known to be wrong
        setTimeout(() => {
          this.setState({ penalty: false });
          let btn = document.getElementsByClassName(`quizChoice`);
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
        {this.state.quiz.length < 1 ? (
          <h1>
            An error has occurred. Please return to the home page and try again.
          </h1>
        ) : (
          <Timer isDone={this.state.isDone} quizName={this.state.name} quizId={this.state.id}/>
        )}

        <h1 className="question">{this.state.question}</h1>
        <Soundbtn sound = {this.state.question}/>

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
