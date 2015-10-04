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

/* POST login */
router.post('/login', function(req, res, next) {
	console.log('front POST auth/login');

	try {
		// console.log(req.body.login);
		rp({
			method: 'POST', 
			uri: 'http://localhost/api/auth/login',
			json: true,
			body: {
			// formData: {
				login: req.body.login,
				password: req.body.password
			}
		}).then(function(data) { 
			if (data.success) {
				hash = crypto.randomBytes(32);
		  		token = hash.toString('hex');
				res.cookie('node_sessid', token);	
				res.cookie('auth', true);
				res.cookie('role', data.role);
			 	res.redirect('login');
			} else {
				res.json(data);
			}
		})
		.catch(function(error) {
			console.log(error);
			res.json({success: false, error_code: 2});
		});
	}
	catch (e){
		console.log(e);
	}
  	// res.render('auth/login', {auth: req.cookies.auth || false, role: req.cookies.role || 'employee'});
});

// GET logout
router.get('/logout', function(req, res, next) {
	console.log('front GET /auth/logout')
	//some logic
	var result = {};
	try {
		result.error_code = 0;
		result.success = true;
		console.log('cookie before: ' + req.cookies.role)
		res.clearCookie('node_sessid');
		res.cookie('auth', false);
		res.cookie('role', 'employee');
		res.redirect('login');
	}
	catch (e) {
		console.log(e);
		result.error_code = 1;
		result.success = false;
	}
	console.log(result);
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
