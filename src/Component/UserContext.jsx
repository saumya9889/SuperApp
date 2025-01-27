import React, { createContext, useState } from "react";

// Create Context
export const UserContext = createContext();

// Context Provider Component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    username: "",
    choices: [],
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
