const router = require('express').Router();
const api = require('../routes/api');
const homeRoutes = require('./homeRoutes');
const dashboardRoutes = require('./dashboardRoutes');

router.use('/users', usersRoutes);
router.use('/api', postRoutes);
router.use('/api', commentRoutes);


module.exports = router;
