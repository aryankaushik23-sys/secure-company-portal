const checkRole = (...allowedRoles) => {
  return (req, res, next) => {
    const userRoles = req.user?.roles || [];
    const hasRole = allowedRoles.some(role => userRoles.includes(role));
    if (!hasRole) {
      return res.status(403).json({
        error: 'Access denied',
        message: `Required roles: ${allowedRoles.join(', ')}`
      });
    }
    next();
  };
};

module.exports = checkRole;