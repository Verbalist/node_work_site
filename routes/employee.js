var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
	console.log('/')
  res.render('employee/employee_index', {auth: req.cookies.auth || false, role: req.cookies.role || 'employee'});
});

router.get('/resumes', function(req, res, next) {
	console.log('/resumes')
	console.log(req.query.id)
  res.render('employee/employee_resumes', {auth: req.cookies.auth || false, role: req.cookies.role || 'employee'});
});

router.get('/resume/new', function(req, res, next) {
	console.log('/resume/new')
  	res.render('employee/employee_resume_new', {auth: req.cookies.auth || false, role: req.cookies.role || 'employee'});
});

router.get('/resume/:resume_id', function(req, res, next) {
	console.log('/resume/edit/:resume_id');
	console.log(req.params.resume_id);
  	res.render('employee/employee_resume_edit', {auth: req.cookies.auth || false, role: req.cookies.role || 'employee'});
});

router.get('/profile', function(req, res, next) {
	console.log('/profile/')
  res.render('employee/employee_profile', {auth: req.cookies.auth || false, role: req.cookies.role || 'employee'});
});

module.exports = router;
