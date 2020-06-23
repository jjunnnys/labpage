const models = require('../../models');

exports.get_posts_write = (req, res) => {
  res.render('posts/write.html');
};

exports.post_posts_write = async (req, res) => {
  try {
    await models.Posts.create(req.body);
    res.redirect('/');
  } catch (error) {
    console.log(error);
  }
};
