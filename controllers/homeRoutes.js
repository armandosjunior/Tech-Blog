const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const postData = await Post.findAll({
      where: {
          user_id: req.session.user_id,
        },
        attributes: [
          'id',
          'title',
          'date_created',
          'content',
          'user_id']
      });

    // Serialize data so the template can read it
    const projects = projectData.map((project) => project.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      projects, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/dashboard', withAuuth, async (req, res) => {
  try {
    const postData = await Post.findAll(req.params.id, {
      where: {
        user_id: req.session.user_id,
        },
        include: [
          {
            model: User,
            attributes: ['username']
          },
      ],
    });
    const post = postData.get({ plain: true });

    res.render('dashboard', {
      post,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/comment/:id', withAuth, async (req, res) => {
  try {

    res.render('comment', {
      user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('dashboard');
    return;
  }

  res.render('login');
});


router.get('/signup', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }
  res.render('signup');
});


module.exports = router;
