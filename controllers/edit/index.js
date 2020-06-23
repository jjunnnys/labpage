'use strict';

const { Router } = require('express');
const router = Router();
const ctrl = require('./edit.ctrl');

router.get('/:id', ctrl.get_posts_edit);
router.post('/:id', ctrl.post_posts_edit);
router.get('/delete/:id', ctrl.get_posts_delete);

module.exports = router;
