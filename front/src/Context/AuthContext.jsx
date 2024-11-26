import React, { createContext, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
 
    const login = async (email) => {
        sessionStorage.setItem('email',email);
    };

  const logout = () => {
        sessionStorage.removeItem('email');
  };

  return (
    <AuthContext.Provider value={{  login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};
