var express = require('express');
var router = express.Router();
var request = require('request');

router.post('/auth/login', function(req, res, next) {
	console.log('back /auth/login')
	//some logic
	var result = {};
	// console.log(req)
	try {
		if (req.body.login.length > 3 && req.body.password == 123) {
			result.success = true;
			if (req.body.login.length == 5) {
				result.role = 'employer';
			} else {
				result.role = 'employee';
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

router.post('/auth/registration', function(req, res, next) {
	console.log('back /auth/registration')
	var result = {};

	//some logic
	var a = req.body;
	console.log(req.body);
	result.error_code = 0;
	result.success = true;

	console.log(result);
  res.json(result);
});

module.exports = router;