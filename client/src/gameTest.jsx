import React, { Component } from "react";
import question from "./testQuestions.json";
//import Game from "./utils/game"

let timer; 
class GameTest extends Component {
  state = {
    quiestion:"",
    choices: [],
    answer:"",
    index:0,
    time:100,
  };

  //on mount set up the next questions
  componentDidMount(){
    this.setState(question[0]) 
    timer = setInterval( () => {
      this.setState({time:this.state.time-1})
    },1000)
  }
  
  //handler for handling a guess
  handleButtonPress = (event) => {
    event.preventDefault();
    //check if the guess is correct
    if(event.target.id === this.state.answer){
      console.log("You Guessed Correctly")

      //handling for when the game is completed
      if(question.length === this.state.index+1){
        console.log("You completed the game")
        clearInterval(timer)
        window.location.href = "/home"
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


  render() {
    return (
      <div>
        <h2>{this.state.time}</h2>
        <h1>Question: {this.state.question}</h1>
        <button onClick = {this.handleButtonPress} id = {this.state.choices[0]}>{this.state.choices[0]}</button>
        <button onClick = {this.handleButtonPress} id = {this.state.choices[1]}>{this.state.choices[1]}</button>
        <button onClick = {this.handleButtonPress} id = {this.state.choices[2]}>{this.state.choices[2]}</button>
        <button onClick = {this.handleButtonPress} id = {this.state.choices[3]}> {this.state.choices[3]}</button>
      </div>
    );
  }
}

export default GameTest;
