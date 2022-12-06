const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// GET all galleries for homepage
router.get('/', async (req, res) => {
    try {
      const postData = await Post.findAll({
        where: [
          {
            user_id: req.session.user_id,
            attributes: 
            ['id',
             'title',
             'data_created', 
             'content', 
             'user_id'],
          },
        ],
      });
  
      const Posts = postData.map((post) =>
        post.get({ plain: true })
      );
  
      res.render('homepage', {
        posts,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
// GET all posts for homepage
router.get('/dashboard', withAuth, async (req, res) => {
    try {
      const postData = await Post.findAll({
        where:{
            user_id: req.session.user_id,
          },
          include: [{
            model: User,
            attributes: ['username'],
          }
        ]
      });
  
      const post = postData.map((post) =>
        post.get({ plain: true })
      );
      // Send over the 'loggedIn' session variable to the 'dash' template
      res.render('dashboard', {
        posts,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });



// Login route
router.get('/login', (req, res) => {
  
    if (req.session.loggedIn) {
      res.redirect('/dashboard');
      return;
    }
    res.render('login');
  });
  
  module.exports = router;