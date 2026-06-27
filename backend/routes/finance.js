const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth');
const checkRole = require('../middleware/rbac');

router.get('/', verifyToken, checkRole('admin', 'manager'), (req, res) => {
  res.json({
    department: 'Finance',
    user: req.user.preferred_username,
    roles: req.user.roles,
    data: [
      { id: 1, month: 'January', budget: 50000, spent: 42000 },
      { id: 2, month: 'February', budget: 55000, spent: 48000 },
    ]
  });
});

module.exports = router;