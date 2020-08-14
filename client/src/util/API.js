import axios from "axios";

export default {
    // Gets all posts
    // getQuestions: function () {
    //     return axios.get("/api/quiz");
    // },
    getUserInfo: function (id) {
        return axios.get("/api/user/" + id)
    },
    getOneQuiz: function (id) {
        return axios.get("/api/quiz/" + id);
    },
    getAllQuizzes: function (id) {
        return axios.get("/api/quiz/");
    },
    getUserLogin: function (email) {
        console.log("we hitthe rpute:", email)
        return axios.post("/api/user/login", email)
    },

    // // Gets the post with the given id
    // getPost: function (id) {
    //     return axios.get("/api/posts/" + id);
    // },
    // // Deletes the post with the given id
    // deletePost: function (id) {
    //     return axios.delete("/api/posts/" + id);
    // },
    // // Saves a post to the database
    // Gets the post with the given id
    getUser: function (id) {
        return axios.get("/api/user/" + id);
    },

    getAllUsers: function () {
        return axios.get("/api/user")
    },
    // Deletes the post with the given id
    deleteUser: function (id) {
        return axios.delete("/api/user/" + id);
    },
    updateUser: function (id, data) {
        return axios.put("/api/user/" + id, data)
    },
    // Saves a post to the database
    savePost: function (postData) {
        return axios.post("/api/user/signup", postData);
    }
};