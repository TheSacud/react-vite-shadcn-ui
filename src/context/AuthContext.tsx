import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
//import jwt_decode from 'jwt-decode';

interface AuthContextType {
  isAuthenticated: boolean;
  //user: any; // Defina um tipo mais específico de acordo com seus dados de usuário
  login: (access: string, refresh: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  //const [user, setUser] = useState<any>(null); // Ajuste o tipo conforme necessário

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      //const decoded: any = jwt_decode(token);
      //setUser(decoded);
      setIsAuthenticated(true);
    }
  }, []);

  const login = (access: string, refresh: string) => {
    localStorage.setItem('jwtToken', access);
    localStorage.setItem('refreshToken', refresh);
    //const decoded: any = jwt_decode(access);
    //setUser(decoded);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('refreshToken');
    //setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
