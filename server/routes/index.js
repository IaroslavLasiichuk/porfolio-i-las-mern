const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

// Route to handle all API routes
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

// Route to handle wrong routes
router.use((req, res) => res.send('Wrong page'));

module.exports = router;