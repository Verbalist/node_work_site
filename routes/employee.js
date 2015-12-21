var express = require('express');
var router = express.Router();

var requireRole = function(role) {
  return function(req, res, next) {
    if('user' in req.session && req.session.user.role === role)
      next();
    else{
	  	console.log('ERRRRROR')
	  	res.redirect('/search');	
    }
  }
};

router.get('/resumes', [requireRole('employee'), function(req, res, next) {
	console.log('/resumes')
  	res.render('employee/employee_resumes', {auth: true, role: req.session.user.role});
}]);

router.get('/', [requireRole('employee'), function(req, res, next) {
	console.log('/')
	res.render('employee/employee_index', {auth: true, role: req.session.user.role});
}]);

router.get('/resume/new', [requireRole('employee'), function(req, res, next) {
	console.log('/resume/new')
	res.render('employee/employee_resume_new', {auth: true, role: req.session.user.role});
}]);

router.get('/resume/:resume_id', [requireRole('employee'), function(req, res, next) {
	console.log('/resume/edit/:resume_id');
	console.log(req.params.resume_id);
  	res.render('employee/employee_resume_edit', {auth: true, role: req.session.user.role});
}]);

router.get('/profile', [requireRole('employee'), function(req, res, next) {
	console.log('/profile/')
  	res.render('employee/employee_profile', {auth: true, role: req.session.user.role});
}]);

module.exports = router;
