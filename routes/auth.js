var express = require('express');
var router = express.Router();
var rp = require('request-promise');
var crypto = require('crypto');


/* GET login */
router.get('/login', function(req, res, next) {
	console.log('front GET auth/login');
	console.log(req.cookies.auth);
  res.render('auth/login', {auth: req.cookies.auth || false, role: req.cookies.role || 'employee'});
});

/* GET registration */
router.get('/registration', function(req, res, next) {
	console.log('auth/registration')
  res.render('auth/registration', {auth: req.cookies.auth || false, role: req.cookies.role || 'employee'});
});

/* GET restorepass */
router.get('/restorepass', function(req, res, next) {
	console.log('auth/restorepass')
  res.render('auth/restorepass', {auth: req.cookies.auth || false, role: req.cookies.role || 'employee'});
});

module.exports = router;
