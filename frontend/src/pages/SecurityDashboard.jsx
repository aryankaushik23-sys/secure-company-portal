import React, { useEffect, useState } from 'react';
import { useKeycloak } from '@react-keycloak/web';
import axios from 'axios';

const SecurityDashboard = () => {
  const { keycloak } = useKeycloak();
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/security', {
      headers: { Authorization: `Bearer ${keycloak.token}` }
    }).then(res => setData(res.data))
      .catch(err => console.error(err));
  }, [keycloak.token]);

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ color: '#1a1a2e' }}>Security Department</h2>
      {data ? (
        <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead style={{ background: '#1a1a2e', color: '#fff' }}>
            <tr><th>ID</th><th>Alert</th><th>Severity</th><th>Time</th></tr>
          </thead>
          <tbody>
            {data.data.map(row => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.alert}</td>
                <td style={{ color: row.severity === 'Critical' ? 'red' : 'orange' }}>
                  {row.severity}
                </td>
                <td>{row.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : <p>Loading...</p>}
    </div>
  );
};

export default SecurityDashboard;