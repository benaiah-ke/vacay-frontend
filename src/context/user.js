import React, { useEffect, useState } from "react";
import { API_ENDPOINTS } from "../config/api";
import { get } from "../helpers/requests";

const UserContext = React.createContext();

function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  // Load the user info
  useEffect(() => {
    // Fetch the user info from the backend
    get(API_ENDPOINTS.GET_CURRENT_USER)
      .then((response) => {

        // Check if successful
        if (response.success) {
          // Set the user info
          setCurrentUser(response.data);
        }

      })
      .catch((error) => {
        console.log(error);
      });
  }, [])
  
  return <UserContext.Provider value={{currentUser, setCurrentUser}}>{children}</UserContext.Provider>;
}

export { UserContext, UserProvider }
