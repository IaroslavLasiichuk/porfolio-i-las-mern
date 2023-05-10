const router = require('express').Router();
const userRoutes = require('./userRoutes');

// Route to handle all API routes
router.use('/users', userRoutes);

module.exports = router;