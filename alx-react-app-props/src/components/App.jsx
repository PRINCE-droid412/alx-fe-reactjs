import React from "react";
import UserContext from "./UserContext";

import ProfilePage from "./ProfilePage"

function App() {
    const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

    return (
        <UserContext.Provider value={{ user: userData }}>
            <ProfilePage />
        </UserContext.Provider>
    );
}

export default App;