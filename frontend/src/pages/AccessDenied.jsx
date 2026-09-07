import React from 'react';
import { useKeycloak } from '@react-keycloak/web';

const AccessDenied = () => {
  const { keycloak } = useKeycloak();

  return (
    <div style={{ padding: '3rem', textAlign: 'center' }}>
      <h1 style={{ color: 'red' }}>403 - Access Denied</h1>
      <p>You do not have permission to view this page.</p>
      <p>Logged in as: <strong>{keycloak.tokenParsed?.preferred_username}</strong></p>
      <p>Your role does not have access to this department.</p>
    </div>
  );
};

export default AccessDenied;