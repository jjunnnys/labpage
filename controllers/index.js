const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
  res.render('index.html');
});

router.use('/contact', require('./contact'));
router.use('/digitalTwin', require('./digitalTwin'));
router.use('/gallery', require('./gallery'));
router.use('/member', require('./member'));
router.use('/research', require('./research'));
module.exports = router;
