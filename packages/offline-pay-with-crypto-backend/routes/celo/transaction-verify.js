var express = require('express');
var router = express.Router();

/* POST verify payment. */
router.post('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
