'use strict';

const models = require('../../models');

exports.get_posts_detail = async (req, res) => {
  try {
    const posts = await models.Posts.findByPk(req.params.id);
    res.render('posts/detail.html', { posts });
  } catch (error) {
    console.log(error);
  }
};
