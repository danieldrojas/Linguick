import axios from "axios";

export default {
    // Gets all posts
    getQuestions: function () {
        return axios.get("/api/question");
    },
    getUserInfo: function(id) {
    return axios.get("/api/user/" + id)
    },
    // Gets the post with the given id
    getUser: function (id) {
        return axios.get("/api/user/" + id);
    },

    getAllUsers: function() {
        return axios.get("/api/user")
    },
    // Deletes the post with the given id
    deleteUser: function (id) {
        return axios.delete("/api/user/" + id);
    },
    // Saves a post to the database
    savePost: function (postData) {
        return axios.post("/api/user", postData);
    }
};