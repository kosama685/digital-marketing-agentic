import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [twoFAEnabled, setTwoFAEnabled] = useState(false);
  const [sessionToken, setSessionToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('auth_token');
    const savedUser = localStorage.getItem('user_data');
    if (token && savedUser) {
      setSessionToken(token);
      setUser(JSON.parse(savedUser));
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const login = async (email, password, twoFACode = null) => {
    // Simulated login - replace with actual API call
    const mockUser = {
      id: '1',
      email,
      name: 'Demo User',
      role: 'Admin',
      avatar: 'https://i.pravatar.cc/150?u=demo',
      twoFAEnabled: false
    };
    
    const mockToken = 'jwt_mock_token_' + Date.now();
    
    localStorage.setItem('auth_token', mockToken);
    localStorage.setItem('user_data', JSON.stringify(mockUser));
    
    setSessionToken(mockToken);
    setUser(mockUser);
    setIsAuthenticated(true);
    setTwoFAEnabled(mockUser.twoFAEnabled);
    
    return { success: true, user: mockUser };
  };

  const logout = () => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_data');
    setSessionToken(null);
    setUser(null);
    setIsAuthenticated(false);
  };

  const enable2FA = () => {
    setTwoFAEnabled(true);
    if (user) {
      const updatedUser = { ...user, twoFAEnabled: true };
      setUser(updatedUser);
      localStorage.setItem('user_data', JSON.stringify(updatedUser));
    }
  };

  const disable2FA = () => {
    setTwoFAEnabled(false);
    if (user) {
      const updatedUser = { ...user, twoFAEnabled: false };
      setUser(updatedUser);
      localStorage.setItem('user_data', JSON.stringify(updatedUser));
    }
  };

  const updateProfile = (updates) => {
    const updatedUser = { ...user, ...updates };
    setUser(updatedUser);
    localStorage.setItem('user_data', JSON.stringify(updatedUser));
  };

  const value = {
    user,
    isAuthenticated,
    isLoading,
    twoFAEnabled,
    sessionToken,
    login,
    logout,
    enable2FA,
    disable2FA,
    updateProfile
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
