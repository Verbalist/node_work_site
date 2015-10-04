var express = require('express');
var router = express.Router();
var request = require('request');
var crypto = require('crypto')

router.post('/auth/login', function(req, res, next) {
	console.log('back /auth/login')
	//some logic
	var result = {};
	try {
		if (req.query.login.length > 3 && req.query.password == 123) {
			result.success = true;
			hash = crypto.randomBytes(32);
	  		token = hash.toString('hex');
			res.cookie('node_sessid', token);
			res.cookie('auth', true)
			if (req.query.login.length == 5) {
				res.cookie('role', 'employer')
			} else {
				res.cookie('role', 'employee')
			}
		} else {
			result.success = false;
		}
		result.error_code = 0;
		
	}
	catch (e) {
		console.log(e);
		result.error_code = 1;
		result.success = false;
	}
	console.log(result);
  res.json(result);
});

router.post('/auth/logout', function(req, res, next) {
	console.log('back /auth/logout')
	//some logic
	var result = {};
	try {
		result.error_code = 0;
		result.success = true;
		console.log('cookie before: ' + req.cookies.role)
		res.clearCookie('node_sessid');
		res.cookie('auth', false);
		res.clearCookie('role', 'employee');
	}
	catch (e) {
		console.log(e);
		result.error_code = 1;
		result.success = false;
	}
	console.log(result);
  res.json(result);
});

router.post('/auth/registration', function(req, res, next) {
	console.log('back /auth/registration')
	var result = {};

	//some logic
	var a = req.query;
	console.log(req.query);
	result.error_code = 0;
	result.success = true;

	console.log(result);
  res.json(result);
});

module.exports = router;