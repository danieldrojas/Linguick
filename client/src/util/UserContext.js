import React from "react";

const UserContext = React.createContext({
    name: "",
    email: "",
    total_scores: 91,
});

export const UserProvider = UserContext.Provider
export const UserConsumer = UserContext.Consumer


export default UserContext;
