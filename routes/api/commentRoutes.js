const router = require('express').Router();
const { Comments, Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/comment/:id', async (req, res) => {
  try {
    const postData = await Post.findAll({
      where:{
      user_id: req.session.user_id,
    },
    attributes: [
      'id',
      'title',
      'date_created',
      'content',
      'user_id',],
    include: [
      {
        model: Post,
        attributes: ['id,', 'post_id']
      },
    ],
  });

      // Serialize user data so templates can read it
      const post = postData.map((post) => post.get({ plain: true }));
      res.render('homepage', {
        post,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.post('/comment', async (req, res) => {
    // If the user is already logged in, redirect the request to another 
    try {
      const Comment = await Comment.create({
        ...req.body,
          user_id: req.params.user_id,
        });
      res.status(200).json(err);
    } catch (err) {
      res.status(500).json(err);
    };
  });
    
module.exports = router;