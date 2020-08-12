import axios from "axios";

export default {
    // Gets all posts
    getQuestions: function () {
        return axios.get("/api/question");
    },
    getUserInfo: function(id) {
    return axios.get("/api/user/" + id)
    }
    // Gets the post with the given id
    // createUser: function (id) {
    //     return axios.post("/api/user/" + id);
    // },
    // // Deletes the post with the given id
    // deletePost: function (id) {
    //     return axios.delete("/api/posts/" + id);
    // },
    // // Saves a post to the database
    // savePost: function (postData) {
    //     return axios.post("/api/posts", postData);
    // }
};