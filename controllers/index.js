const router = require('express').Router();

const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/users', usersoutes);
router.use('/api', postRoutes);
router.use('/api', commentRoutes);


module.exports = router;
