var express = require('express');
var router = express.Router();


router.get('/:name', function(req, res, next) {
	console.log('/:name')
	console.log(req.params.name)
  res.render('employee/employee_index', {'employee_name': req.params.name});
});

router.get('/:name/resumes', function(req, res, next) {
	console.log('/:name/resumes')
	console.log(req.params.name + " resumes")
	console.log(req.query.id)
  res.render('employee/employee_resumes');
});

router.get('/:name/resume/new', function(req, res, next) {
	console.log('/:name/resume/new')
	console.log(req.params.name + " resume/new")
  	res.render('employee/employee_resume_new');
});

router.get('/:name/resume/:resume_id', function(req, res, next) {
	console.log('/:name/resume/edit/:resume_id');
	console.log(req.params.name);
	console.log(req.params.resume_id);
  	res.render('employee/employee_resume_edit', {auth: true, role: 'employer'});
});

router.get('/:name/profile', function(req, res, next) {
	console.log('/:name/profile/')
	console.log(req.params.name)
  res.render('employee/employee_profile');
});

module.exports = router;
