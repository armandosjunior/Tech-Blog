const router = require('express').Router();

const userRoutes = require('./useRoutes');
const postsRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/users', userRoutes);
router.use('/posts', postsRoutes);
router.use('/comments', commentRoutes);


module.exports = router;
