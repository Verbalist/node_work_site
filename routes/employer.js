var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log('/')
	console.log(req.params.name)
  res.render('employer/employer_index', {auth: req.cookies.auth || false, role: req.cookies.role || 'employer'});
});

router.get('/positions', function(req, res, next) {
	console.log('/positions')
	console.log(req.params.name)
	console.log(req.query.ids)
  res.render('employer/employer_positions', {auth: req.cookies.auth || false, role: req.cookies.role || 'employer'});
});

router.get('/position/new', function(req, res, next) {
	console.log('/position/new')
	console.log(req.params.name)
  res.render('employer/employer_position_new', {auth: req.cookies.auth || false, role: req.cookies.role || 'employer'});
});

router.get('/position/:position_id', function(req, res, next) {
	console.log('/:name/position/edit/:position_id')
	console.log(req.params.name)
  res.render('employer/employer_position_edit', {auth: req.cookies.auth || false, role: req.cookies.role || 'employer'});
});

router.get('/profile', function(req, res, next) {
	console.log('/profile/')
	console.log(req.params.name)
  res.render('employer/employer_profile', {auth: req.cookies.auth || false, role: req.cookies.role || 'employer'});
});

module.exports = router;