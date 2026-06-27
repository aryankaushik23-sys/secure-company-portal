const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth');
const checkRole = require('../middleware/rbac');

router.get('/', verifyToken, checkRole('admin'), (req, res) => {
  res.json({
    department: 'Security',
    user: req.user.preferred_username,
    roles: req.user.roles,
    data: [
      { id: 1, alert: 'Failed login attempt', severity: 'High', time: '14:05' },
      { id: 2, alert: 'Unauthorized access', severity: 'Critical', time: '14:10' },
    ]
  });
});

module.exports = router;