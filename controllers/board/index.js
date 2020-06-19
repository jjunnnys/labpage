const { Router } = require('express');
const router = Router();
// const ctrl = require('./board.ctrl');

router.get('/', (req, res) => {
  res.render('board/board-list.html', {});
});

// router.get('/topic', ctrl.get_topic);

// router.post('/topic', ctrl.get_topic);

module.exports = router;
