var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:name', function(req, res, next) {
	console.log('/:name')
	console.log(req.params.name)
  res.render('index', { title: 'Express' });
});

router.get('/:name/positions', function(req, res, next) {
	console.log('/:name/positions')
	console.log(req.params.name)
	console.log(req.query.ids)
  res.render('index', { title: 'Express' });
});

router.post('/:name/position/new', function(req, res, next) {
	console.log('/:name/positions/new')
	console.log(req.params.name)
  res.render('index', { title: 'Express' });
});

router.post('/:name/position/edit', function(req, res, next) {
	console.log('/:name/positions/edit/')
	console.log(req.params.name)
  res.render('index', { title: 'Express' });
});

router.get('/:name/profile', function(req, res, next) {
	console.log('/:name/positions/profile/')
	console.log(req.params.name)
  res.render('index', { title: 'Express' });
});

module.exports = router;