function checkRole(requiredRole) {
  return (req, res, next) => {
    if (req.auth.role !== requiredRole) {
      return res.status(403).json({ error: 'Forbidden: Insufficient role' })
    }

    next()
  }
}

export default checkRole
