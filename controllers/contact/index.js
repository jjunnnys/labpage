const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
  res.render('contact.html');
});

module.exports = router;
