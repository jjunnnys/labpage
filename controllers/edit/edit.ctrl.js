'use strict';

const models = require('../../models');

exports.get_posts_edit = async (req, res) => {
  try {
    const posts = await models.Posts.findByPk(req.params.id);
    res.render('posts/write.html', { posts });
  } catch (error) {
    console.log(error);
  }
};

exports.post_posts_edit = async (req, res) => {
  try {
    await models.Posts.update(req.body, {
      where: { id: req.params.id },
    });
    res.redirect(`/detail/${req.params.id}`);
  } catch (error) {
    console.log(error);
  }
};

exports.get_posts_delete = async (req, res) => {
  try {
    await models.Posts.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.redirect('/');
  } catch (error) {
    console.log(error);
  }
};
