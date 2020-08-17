import React, { Component } from "react";
import UDQuizSore from "../../components/UDQuizScore/UDQuizScore";
import "./User.css";
import { Link } from "react-router-dom";
import { UserConsumer } from "../../util/UserContext";
import API from "../../util/API";
import AuthContext from "../../util/AuthContext"
import { useContext } from "react";

class User extends Component {
  state = {
    user: {
      quizzes_taken: [],
    },
    localUserName: "",
  };

  static contextType = AuthContext;  


  componentDidMount() {
    const access_token = this.context
    console.log('this is from class component', access_token)

    let config = {
      headers: {
        auth: access_token,
      }
    }

    const userInfo = JSON.parse(localStorage.getItem("UserInfo"));
    //console.log(userInfo);

    API.getUser(userInfo._id).then((res) => {
      this.setState({
        user: res.data,
      });
    });

    // change to getUser when we have authentification worked out
    // API.getAllUsers().then((res) => {
    //   this.setState({ user: res.data[0] });
    // });
  }

  quizArray = this.state.user.quizzes_taken;

  userID = this.state.user._id;

  render() {
    return (
      <UserConsumer>
        {(props) => {
          return (
            <div>
              <div className="container">
                <h1>Welcome to your dashboard, {this.state.user.username} </h1>
                {/* {console.log(props.user.username)} */}
                <Link to="/leaderboard">
                  <button className="sq-btn">See World Rankings</button>
                </Link>
                <Link to="/selectquiz">
                  <button className="sq-btn">Take Another Quiz</button>
                </Link>
                <h2>Quizzes Taken:</h2>
                <table>
                  <tbody className="table">
                    <tr>
                      <th>Quiz Name</th>
                      <th>Score</th>
                    </tr>
                    {this.state.user.quizzes_taken.map((quiz) => (
                      <UDQuizSore
                        quizId={this.state.user.quizzes_taken.indexOf(quiz)}
                        key={this.state.user.quizzes_taken.indexOf(quiz)}
                        quizName={quiz.quizName}
                        score={quiz.score}
                        quizArray={this.state.user.quizzes_taken}
                        userID={this.state.user._id}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}

export default User;
