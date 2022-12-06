const router = require('express').Router();
const api = require('./api');
const homeRoutes = require('./homeRoutes');
const dahsboardRoutes = require('./dashbboardRoutes');

router.use('/users', usersoutes);
router.use('/api', postRoutes);
router.use('/api', commentRoutes);


module.exports = router;
