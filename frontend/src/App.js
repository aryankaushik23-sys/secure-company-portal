import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useKeycloak } from '@react-keycloak/web';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import HRDashboard from './pages/HRDashboard';
import FinanceDashboard from './pages/FinanceDashboard';
import ITDashboard from './pages/ITDashboard';
import SecurityDashboard from './pages/SecurityDashboard';
import AccessDenied from './pages/AccessDenied';

function App() {
  const { initialized } = useKeycloak();

  if (!initialized) {
    return <div style={{ padding: '2rem' }}>Loading...</div>;
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hr" element={
          <ProtectedRoute roles={['employee', 'manager', 'admin']}>
            <HRDashboard />
          </ProtectedRoute>
        } />
        <Route path="/finance" element={
          <ProtectedRoute roles={['manager', 'admin']}>
            <FinanceDashboard />
          </ProtectedRoute>
        } />
        <Route path="/it" element={
          <ProtectedRoute roles={['employee', 'manager', 'admin']}>
            <ITDashboard />
          </ProtectedRoute>
        } />
        <Route path="/security" element={
          <ProtectedRoute roles={['admin']}>
            <SecurityDashboard />
          </ProtectedRoute>
        } />
        <Route path="/denied" element={<AccessDenied />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;