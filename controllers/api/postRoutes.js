const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/:id', async (req, res) => {
  try {
    const postData = await Post.findOne({
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ]
    });
    if (!postData) {
      res
        .status(400)
        .json({ message: 'Please try again!' });
      return;
    }
    const post = postData.map((post) => project.get({ plain: true }));

    console.log(posts)
    res.render('editpost',{
      posts,
      logged_in: req.session.logged_in
    }); 
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;