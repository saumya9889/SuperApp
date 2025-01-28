import React, { createContext, useState } from "react";

// Create Context
export const UserContext = createContext();

// Context Provider Component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    username: "",
  });

  const [userSelect, setUserSelect] = useState({
    choices: [],
  });

  return (
    <UserContext.Provider value={{ user, setUser, userSelect, setUserSelect }}>
      {children}
    </UserContext.Provider>
  );
};
