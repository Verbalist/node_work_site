var express = require('express');
var router = express.Router();

/* GET login */
router.get('/login', function(req, res, next) {
	console.log('auth/login')
  res.render('auth/login', {title: 'login'});
});

/* GET registration */
router.get('/registration', function(req, res, next) {
	console.log('auth/registration')
  res.render('auth/registration', {title: 'registration'});
});

/* GET restorepass */
router.get('/restorepass', function(req, res, next) {
	console.log('auth/restorepass')
  res.render('auth/restorepass', {title: 'restorepass'});
});

module.exports = router;
