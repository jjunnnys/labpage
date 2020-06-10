const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
  res.render('member.html');
});

module.exports = router;
