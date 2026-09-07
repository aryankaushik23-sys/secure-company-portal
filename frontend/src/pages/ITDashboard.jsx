import React, { useEffect, useState } from 'react';
import { useKeycloak } from '@react-keycloak/web';
import axios from 'axios';

const ITDashboard = () => {
  const { keycloak } = useKeycloak();
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/it', {
      headers: { Authorization: `Bearer ${keycloak.token}` }
    }).then(res => setData(res.data))
      .catch(err => console.error(err));
  }, [keycloak.token]);

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ color: '#1a1a2e' }}>IT Department</h2>
      {data ? (
        <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead style={{ background: '#1a1a2e', color: '#fff' }}>
            <tr><th>ID</th><th>Ticket</th><th>Priority</th><th>Status</th></tr>
          </thead>
          <tbody>
            {data.data.map(row => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.ticket}</td>
                <td>{row.priority}</td>
                <td>{row.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : <p>Loading...</p>}
    </div>
  );
};

export default ITDashboard;