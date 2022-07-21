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

/* GET home page. */
router.get('/about_me', function(req, res, next) {
  if('id' in req.query) return next();
  res.render('pages/about_me');
});

/* GET home page. */
router.get('/about_me', function(req, res, next) {
  res.render('news/' + req.query.id);
});

/* GET home page. */
router.get('/experience', function(req, res, next) {
  res.render('pages/experience');
});

/* GET home page. */
router.get('/contact_us', function(req, res, next) {
  res.render('pages/contacts');
});

module.exports = router;
