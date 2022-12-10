import React, { useState } from "react";

const UserContext = React.createContext();

function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState({
    name: "John Doe",
    email: "john@gmail.com",
    phone: "08012345678"
  });
  
  return <UserContext.Provider value={{currentUser, setCurrentUser}}>{children}</UserContext.Provider>;
}

export { UserContext, UserProvider }
