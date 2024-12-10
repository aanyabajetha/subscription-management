import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Define valid users
  const validUsers = [
    { email: "john.doe@example.com", password: "JD@pass123" },
    { email: "sarah.smith@example.com", password: "SS@pass456" },
    { email: "mike.wilson@example.com", password: "MW@pass789" },
    { email: "emma.brown@example.com", password: "EB@pass321" }
  ];

  const login = (credentials) => {
    // Check if the provided credentials match any valid user
    const userFound = validUsers.find(user => 
      user.email === credentials.email && user.password === credentials.password
    );

    if (userFound) {
      setUser({
        name: userFound.email.split('@')[0], // Use the email prefix as the name
        email: userFound.email,
        avatar: `https://ui-avatars.com/api/?name=${userFound.email.split('@')[0]}`
      });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext); 