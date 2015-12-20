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
      
    //res.render('employee/employee_index', {auth: req.cookies.auth || false, role: req.cookies.role || 'employee'});
   	//res.render('search/search', {auth: req.cookies.auth || false, role: req.cookies.role || 'employee'});
  	/*res.writeHead(302, {
	  'Location': 'http://localhost/search'
	  //add other headers here...
	});
	res.end();
	*/
  }
};

router.get('/resumes', [requireRole('employee'), function(req, res, next) {
	console.log('/resumes')
  	res.render('employee/employee_resumes', {auth: req.cookies.auth || false, role: req.cookies.role || 'employee'});
}]);

router.get('/', [requireRole('employee'), function(req, res, next) {
	console.log('/')
	res.render('employee/employee_index', {auth: req.cookies.auth || false, role: req.cookies.role || 'employee'});
}]);

router.get('/resume/new', [requireRole('employee'), function(req, res, next) {
	console.log('/resume/new')
	res.render('employee/employee_resume_new', {auth: req.cookies.auth || false, role: req.cookies.role || 'employee'});
}]);

router.get('/resume/:resume_id', [requireRole('employee'), function(req, res, next) {
	console.log('/resume/edit/:resume_id');
	console.log(req.params.resume_id);
  	res.render('employee/employee_resume_edit', {auth: req.cookies.auth || false, role: req.cookies.role || 'employee'});
}]);

router.get('/profile', [requireRole('employee'), function(req, res, next) {
	console.log('/profile/')
  	res.render('employee/employee_profile', {auth: req.cookies.auth || false, role: req.cookies.role || 'employee'});
}]);

module.exports = router;
