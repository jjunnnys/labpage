const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
  res.render('gallery.html');
});

module.exports = router;
