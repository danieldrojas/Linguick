import React, {Component} from "react";
//import Timer from '../../components/Timer/Timer'
import question from "./testQuestions.json"
import Timer from "../../components/Timer/Timer"

class Quiz extends Component{
  state = {
    quiestion:"",
    choices: [],
    answer:"",
    index:0,
  };
  
//Start timer and get 1st question from database
  componentDidMount(){
    this.setState(question[0]) 
  }

  handleButtonPress = (event) => {
    event.preventDefault();
    //check if the guess is correct
    if(event.target.id === this.state.answer){
      console.log("You Guessed Correctly")

      //handling for when the game is completed
      if(question.length === this.state.index+1){
        console.log("You completed the game")
        window.location.href = "/leaderboard"
      }
      //update the page with the next set of questions
      this.setState({index:this.state.index +1} , ()=>{
        this.setState(question[this.state.index])
      })
    }
    //if guess incorrectly
    else{
      console.log("You Guessed Incorrectly")
    }
  };


  render(){
    return (
      <div className = "container">
        <Timer wrong = {this.setState.isWrong}/>
        <h1>Question: {this.state.question}</h1>
        <button onClick = {this.handleButtonPress} id = {this.state.choices[0]}>{this.state.choices[0]}</button>
        <button onClick = {this.handleButtonPress} id = {this.state.choices[1]}>{this.state.choices[1]}</button>
        <button onClick = {this.handleButtonPress} id = {this.state.choices[2]}>{this.state.choices[2]}</button>
        <button onClick = {this.handleButtonPress} id = {this.state.choices[3]}> {this.state.choices[3]}</button>
      </div>
    );
  }
};

export default Quiz;
