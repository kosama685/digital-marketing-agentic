import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import LoginPortal from './components/LoginPortal';
import DashboardLayout from './components/DashboardLayout';

const AppContent = () => {
  const { isAuthenticated, isLoading } = useAuth();
  const [showLogin, setShowLogin] = useState(!isAuthenticated);

  if (isLoading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="card">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return isAuthenticated ? <DashboardLayout /> : <LoginPortal onLoginSuccess={() => setShowLogin(false)} />;
};

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
