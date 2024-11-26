import React, { createContext, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
 
    const login = async (email) => {
        const exist=true;
        if(exist){ 
            sessionStorage.setItem('email',email);
            return true;
        }else{
            return false;
        }
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
