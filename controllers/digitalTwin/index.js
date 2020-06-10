const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
  res.render('digitalTwin.html');
});

module.exports = router;
