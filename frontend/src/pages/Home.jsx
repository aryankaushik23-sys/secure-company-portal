import React from 'react';
import { useKeycloak } from '@react-keycloak/web';

const Home = () => {
  const { keycloak } = useKeycloak();

  return (
    <div style={{ padding: '3rem', textAlign: 'center' }}>
      <h1>Secure Company Portal</h1>
      {keycloak.authenticated ? (
        <div>
          <p>Welcome, <strong>{keycloak.tokenParsed?.preferred_username}</strong>!</p>
          <p>Your roles: <strong>
            {keycloak.tokenParsed?.realm_access?.roles
              .filter(r => ['admin','manager','employee'].includes(r))
              .join(', ')}
          </strong></p>
          <p>Use the navbar to navigate to your department.</p>
        </div>
      ) : (
        <div>
          <p>Please login to access the portal.</p>
          <button onClick={() => keycloak.login()} style={{
            background: '#e94560', color: '#fff',
            border: 'none', padding: '0.8rem 2rem',
            borderRadius: '4px', cursor: 'pointer', fontSize: '1rem'
          }}>
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;