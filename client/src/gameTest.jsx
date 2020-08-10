import React, { Component } from "react";
import question from "./testQuestions.json";

class GameTest extends Component {
  state = {
    quiestion:"",
    choices: [],
    answer:"",
    index:0,
  };

  componentDidMount(){
    this.setState(question[0]) 
  }

  handleButtonPress = (event) => {
    event.preventDefault();
    console.log(event.target.id)
    if(event.target.id === this.state.answer){
      console.log("You Guessed Correctly")
      if(question.length === this.state.index+1){
        console.log("You completed the game")
        
      }
      this.setState({index:this.state.index +1} , ()=>{
        this.setState(question[this.state.index])
      })
    }
    else{
      console.log("You Guessed Incorrectly")
    }
  };


  render() {
    return (
      <div>
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
