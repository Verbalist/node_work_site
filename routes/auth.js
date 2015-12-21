var express = require('express');
var router = express.Router();
var rp = require('request-promise');
var crypto = require('crypto');

var requireRole = function() {
  return function(req, res, next) {
    if('user' in req.session){
		console.log('ERRRRROR')
	  	res.redirect('/search');
    }else{	
    	next();
    }
  }
};

/* GET login */
router.get('/login', [requireRole(), function(req, res, next) {
	console.log('front GET auth/login');
  	res.render('auth/login', {auth: req.cookies.auth || false,  role: req.cookies.role || ''});
}]);

/* GET registration */
router.get('/registration', [requireRole(), function(req, res, next) {
	console.log('auth/registration')
	res.render('auth/registration', {auth: req.cookies.auth || false, role: req.cookies.role || ''});
}]);

/* GET restorepass */
router.get('/restorepass', [requireRole(), function(req, res, next) {
	console.log('auth/restorepass')
  	res.render('auth/restorepass', {auth: req.cookies.auth || false, role: req.cookies.role || ''});
}]);
 
module.exports = router;
