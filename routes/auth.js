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

// GET logout
router.get('/logout', function(req, res, next) {
	var result = {};
	try {
		res.clearCookie('node_sessid');
		res.cookie('auth', false);
		res.cookie('role', 'employee');
		res.redirect('login');
		result.error_code = 0;
	}
	catch (e) {
		console.log(e);
		result.error_code = 2;
	}
  	res.json(result);
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
