import React from 'react';
import { useKeycloak } from '@react-keycloak/web';

const ProtectedRoute = ({ children, roles }) => {
  const { keycloak } = useKeycloak();

  if (!keycloak.authenticated) {
    keycloak.login();
    return null;
  }

  const userRoles = keycloak.tokenParsed?.realm_access?.roles || [];
  const hasRole = roles.some(role => userRoles.includes(role));

  if (!hasRole) {
    return (
      <div style={{ padding: '3rem', textAlign: 'center' }}>
        <h1 style={{ color: 'red' }}>403 - Access Denied</h1>
        <p>You do not have permission to view this page.</p>
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;