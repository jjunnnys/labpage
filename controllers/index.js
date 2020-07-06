'use strict';

const { Router } = require('express');
const models = require('../models');
const router = Router();

router.get('/', async (req, res) => {
  try {
    const posts = await models.Posts.findAll({
      // 내림차순 (최신 순으로 봐야하기 때문에)
      order: [['id', 'DESC']],
    });
    res.render('index.html', {
      posts,
    });
  } catch (error) {
    console.log(error);
  }
});

router.use('/tutorial', require('./tutorial'));
router.use('/contact', require('./contact'));
router.use('/digitalTwin', require('./digitalTwin'));
router.use('/gallery', require('./gallery'));
router.use('/member', require('./member'));
router.use('/research', require('./research'));
router.use('/detail', require('./detail'));
router.use('/write', require('./write'));
router.use('/edit', require('./edit'));

module.exports = router;
