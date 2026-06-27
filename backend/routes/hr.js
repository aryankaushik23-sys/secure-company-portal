const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth');
const checkRole = require('../middleware/rbac');

router.get('/', verifyToken, checkRole('admin', 'manager', 'employee'), (req, res) => {
  res.json({
    department: 'HR',
    user: req.user.preferred_username,
    roles: req.user.roles,
    data: [
      { id: 1, name: 'John Employee', position: 'Developer', status: 'Active' },
      { id: 2, name: 'Jane Manager', position: 'Team Lead', status: 'Active' },
    ]
  });
});

module.exports = router;