import React from 'react';
import { useKeycloak } from '@react-keycloak/web';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { keycloak } = useKeycloak();

  return (
    <nav style={{ background: '#1a1a2e', padding: '1rem 2rem',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/hr" style={linkStyle}>HR</Link>
        <Link to="/finance" style={linkStyle}>Finance</Link>
        <Link to="/it" style={linkStyle}>IT</Link>
        <Link to="/security" style={linkStyle}>Security</Link>
      </div>
      <div>
        {keycloak.authenticated ? (
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <span style={{ color: '#fff' }}>
              {keycloak.tokenParsed?.preferred_username}
            </span>
            <button onClick={() => keycloak.logout()} style={btnStyle}>
              Logout
            </button>
          </div>
        ) : (
          <button onClick={() => keycloak.login()} style={btnStyle}>
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

const linkStyle = { color: '#fff', textDecoration: 'none', fontSize: '1rem' };
const btnStyle = {
  background: '#e94560', color: '#fff',
  border: 'none', padding: '0.5rem 1rem',
  borderRadius: '4px', cursor: 'pointer'
};

export default Navbar;