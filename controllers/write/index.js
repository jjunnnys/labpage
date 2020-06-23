const { Router } = require('express');
const router = Router();
const ctrl = require('./write.ctrl');

router.get('/', ctrl.get_posts_write);
router.post('/', ctrl.post_posts_write);

module.exports = router;
