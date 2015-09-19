var express = require('express');
var router = express.Router();


router.get('/:name', function(req, res, next) {
	console.log('/:name')
	console.log(req.params.name)
  res.render('index', { title: 'Express' });
});

router.get('/:name/resumes', function(req, res, next) {
	console.log('/:name/resumes')
	console.log(req.params.name + " resumes")
	console.log(req.query.id)
  res.render('index', { title: 'Express' });
});

router.post('/:name/resume/new', function(req, res, next) {
	console.log('/:name/resume/new')
	console.log(req.params.name + " resumes/new")
  	res.render('index', { title: 'Express' });
});

router.post('/:name/resume/edit', function(req, res, next) {
	console.log('/:name/resume/edit')
	console.log(req.params.name)
  	res.render('index', { title: 'Express' });
});

router.get('/:name/profile', function(req, res, next) {
	console.log('/:name/profile/')
	console.log(req.params.name)
  res.render('index', { title: 'Express' });
});

module.exports = router;
