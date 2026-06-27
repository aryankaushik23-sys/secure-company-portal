const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth');
const checkRole = require('../middleware/rbac');

router.get('/', verifyToken, checkRole('admin', 'manager', 'employee'), (req, res) => {
  res.json({
    department: 'IT',
    user: req.user.preferred_username,
    roles: req.user.roles,
    data: [
      { id: 1, ticket: 'Server down', priority: 'High', status: 'Open' },
      { id: 2, ticket: 'VPN issue', priority: 'Medium', status: 'Resolved' },
    ]
  });
});

module.exports = router;