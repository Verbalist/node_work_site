var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:name', function(req, res, next) {
	console.log('/:name')
	console.log(req.params.name)
  res.render('employer/employer_index', {auth: req.cookies.auth || false, role: req.cookies.role || 'employer'});
});

router.get('/:name/positions', function(req, res, next) {
	console.log('/:name/positions')
	console.log(req.params.name)
	console.log(req.query.ids)
  res.render('employer/employer_positions', {auth: req.cookies.auth || false, role: req.cookies.role || 'employer'});
});

router.get('/:name/position/new', function(req, res, next) {
	console.log('/:name/position/new')
	console.log(req.params.name)
  res.render('employer/employer_position_new', {auth: req.cookies.auth || false, role: req.cookies.role || 'employer'});
});

router.get('/:name/position/:position_id', function(req, res, next) {
	console.log('/:name/position/edit/:position_id')
	console.log(req.params.name)
  res.render('employer/employer_position_edit', {auth: req.cookies.auth || false, role: req.cookies.role || 'employer'});
});

router.get('/:name/profile', function(req, res, next) {
	console.log('/:name/profile/')
	console.log(req.params.name)
  res.render('employer/employer_profile', {auth: req.cookies.auth || false, role: req.cookies.role || 'employer'});
});

module.exports = router;