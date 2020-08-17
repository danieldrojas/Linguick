import React, { Component } from "react";
import UDQuizSore from "../../components/UDQuizScore/UDQuizScore";
import "./User.css";
import { Link } from "react-router-dom";
import UserContext, { UserConsumer } from "../../util/UserContext";
import API from "../../util/API";

class User extends Component {
  state = {
    user: {
      quizzes_taken: [],
    },
    localUserName: "",
  };

  static contextType = UserContext;

  componentDidMount() {
    // const user = this.context
    // console.log(user)
    // console.log(this.context.user);

    const userInfo = JSON.parse(localStorage.getItem("UserInfo"));
    //console.log(userInfo);

    API.getUser(userInfo._id).then((res) => {
      this.setState({
        user: res.data,
      });
    });
  }

  handleDelete = () => {
    let confirmDelete = window.confirm(
      "Are you sure you want to delete your account?"
    );
    if (confirmDelete) {
      // console.log(this.state.user._id)
      API.deleteUser(this.state.user._id).then(() => {
        localStorage.clear();
        window.location.href = "/";
        console.log("It worked");
      });
    }
  };

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
                <button className="danger" onClick={this.handleDelete}>
                  Delete Account
                </button>
              </div>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}

export default User;
