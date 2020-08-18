import axios from "axios";

export default {
  getUserInfo: function (id) {
    return axios.get("/api/user/" + id);
  },
  getOneQuiz: function (id) {
    return axios.get("/api/quiz/" + id);
  },
  getAllQuizzes: function (id) {
    return axios.get("/api/quiz/");
  },
  getUserLogin: function (email) {
    console.log("we hitthe rpute:", email);
    return axios.post("/api/user/login", email);
  },
  translateLetter: function (data) {
    return axios.post("/api/translate", data);
  },
  getUser: function (id) {
    return axios.get("/api/user/" + id);
  },
  getAllUsers: function () {
    return axios.get("/api/user");
  },
  deleteUser: function (id) {
    return axios.delete("/api/user/" + id);
  },
  updateUser: function (id, data) {
    return axios.put("/api/user/" + id, data);
  },
  savePost: function (postData) {
    return axios.post("/api/user/signup", postData);
  },
};
