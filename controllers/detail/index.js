'use strict';

const { Router } = require('express');
const router = Router();
const ctrl = require('./detail.ctrl');

router.get('/:id', ctrl.get_posts_detail);

module.exports = router;
