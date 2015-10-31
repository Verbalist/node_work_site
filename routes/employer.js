var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:name', function(req, res, next) {
	console.log('/:name')
	console.log(req.params.name)
  res.render('employer/employer_index', {'employer_name': req.params.name});
});

router.get('/:name/positions', function(req, res, next) {
	console.log('/:name/positions')
	console.log(req.params.name)
	console.log(req.query.ids)
  res.render('employer/employer_positions');
});

router.get('/:name/position/new', function(req, res, next) {
	console.log('/:name/position/new')
	console.log(req.params.name)
  res.render('employer/employer_position_new');
});

router.get('/:name/position/:position_id', function(req, res, next) {
	console.log('/:name/position/edit/:position_id')
	console.log(req.params.name)
  res.render('employer/employer_position_edit');
});

router.get('/:name/profile', function(req, res, next) {
	console.log('/:name/profile/')
	console.log(req.params.name)
  res.render('employer/employer_profile');
});

module.exports = router;