import React, {Component} from "react";
// import question from "./testQuestions.json"
import Timer from "../../components/Timer/Timer"
import API from "../../util/API"

class Quiz extends Component{
  state = {
    question:"",
    choices: [],
    answer:"",
    index:0,
    quizLength:0
  };
  
//Start timer and get 1st question from database
  componentDidMount(){

      API.getQuestions().then(res =>{
        this.setState(res.data[0])
        this.setState({quizLength:res.data.length})
      })

  }

  handleButtonPress = (event) => {
    event.preventDefault();
    //check if the guess is correct
    console.log(event.target.value)
    if(event.target.value === this.state.answer){
      console.log("You Guessed Correctly")

      //handling for when the game is completed
      if(this.state.quizLength === this.state.index+1){
        console.log("You completed the game")
        window.location.href = "/leaderboard"
      }
      //update the page with the next set of questions
      this.setState({index:this.state.index +1} , ()=>{
        //this.setState(question[this.state.index])
        API.getQuestions().then(res =>{
          this.setState(res.data[this.state.index])
        })

      })
    }
    //if guess incorrectly
    else{
      console.log("You Guessed Incorrectly")
      console.log(event.target.value)
    }
  };


  render(){
    return (
      <div className = "container">
        <Timer wrong = {this.setState.isWrong}/>
        <h1>{this.state.question}</h1>
        <button onClick = {this.handleButtonPress} value = {this.state.choices[0]}>{this.state.choices[0]}</button>
        <button onClick = {this.handleButtonPress} value = {this.state.choices[1]}>{this.state.choices[1]}</button>
        <button onClick = {this.handleButtonPress} value = {this.state.choices[2]}>{this.state.choices[2]}</button>
        <button onClick = {this.handleButtonPress} value = {this.state.choices[3]}> {this.state.choices[3]}</button>
      </div>
    );
  }
};

export default Quiz;
