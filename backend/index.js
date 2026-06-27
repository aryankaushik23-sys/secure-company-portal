const express = require('express');
const cors = require('cors');
require('dotenv').config();

const hrRoutes = require('./routes/hr');
const financeRoutes = require('./routes/finance');
const itRoutes = require('./routes/it');
const securityRoutes = require('./routes/security');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Secure Company Portal API is running' });
});

app.use('/api/hr', hrRoutes);
app.use('/api/finance', financeRoutes);
app.use('/api/it', itRoutes);
app.use('/api/security', securityRoutes);

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});