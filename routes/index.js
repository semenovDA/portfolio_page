var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index');
});

/* GET home page. */
router.get('/parents', function(req, res, next) {
  res.render('pages/parents');
});

module.exports = router;
