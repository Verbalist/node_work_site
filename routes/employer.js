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

/* GET home page. */
router.get('/', [requireRole('employer'), function(req, res, next) {
	console.log('/')
	console.log(req.params.name)
  res.render('employer/employer_index', {auth: true, role: req.session.user.role});
}]);

router.get('/positions', [requireRole('employer'), function(req, res, next) {
	console.log('/positions')
	console.log(req.params.name)
	console.log(req.query.ids)
  res.render('employer/employer_positions', {auth: true, role: req.session.user.role});
}]);

router.get('/position/new', [requireRole('employer'), function(req, res, next) {
	console.log('/position/new')
	console.log(req.params.name)
  res.render('employer/employer_position_new', {auth: true, role: req.session.user.role});
}]);

router.get('/position/:position_id', [requireRole('employer'), function(req, res, next) {
	console.log('/:name/position/edit/:position_id')
	console.log(req.params.name)
  res.render('employer/employer_position_edit', {auth: true, role: req.session.user.role});
}]);

router.get('/profile', [requireRole('employer'), function(req, res, next) {
	console.log('/profile/')
	console.log(req.params.name)
  res.render('employer/employer_profile', {auth: true, role: req.session.user.role});
}]);

module.exports = router;