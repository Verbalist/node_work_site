var express = require('express');
var router = express.Router();

router.get('/employer/positions', function(req, res, next) {
	console.log('/employer/positions')
	var result = {};

	//some logic
	var positions = [
		{
			"id":"1",
			"name":"programmer",
			"description":"super programmer",
			"requirements":"html, css",
			"location":"Kyiv"
		}
	]
	result.error_code = 0;
	result.positions = positions;

	console.log(result);
  res.json(result);
});

router.get('/employer/position/:id', function(req, res, next) {
	console.log('/employer/position/' + req.params.id)
	var result = {};

	//some logic
	var positions = [
		{
			"id":"1",
			"name":"programmer",
			"description":"super programmer",
			"requirements":"html, css",
			"location":"Kyiv"
		}
	]
	result.error_code = 0;
	result.positions = positions;

	console.log(result);
  res.json(result);
});

router.post('/employer/deletePositions/:id', function(req, res, next) {
	console.log('/employer/deletePositions/' + req.params.id)
	var result = {};
	
	//some logic
	
	result.error_code = 0;
  res.json(result);
});

router.post('/employer/updatePositions/:id', function(req, res, next) {
	console.log('/employer/updatePositions/' + req.params.id)
	var result = {};
	
	console.log(req.body)

	//some logic
	
	result.error_code = 0;
  res.json(result);
});

router.post('/employer/addPositions/', function(req, res, next) {
	console.log('/employer/addPositions/')
	var result = {};
	
	console.log(req.body)

	//some logic
	
	result.error_code = 0;
  res.json(result);
});


router.get('/employer/profile', function(req, res, next) {
	console.log('/employer/profile')
	var result = {};

	//some logic
	var profile_info = [
		{
			"id":"1",
			"name":"BigCompany",
			"category":"it",
			"status":"looking for slaves",
			"email":"example@gmail.com",
			"phone":"1234567"
		}
	]
	result.error_code = 0;
	result.profile_info = profile_info;

	console.log(result);
  res.json(result);
});

router.post('/employer/updateProfile', function(req, res, next) {
	console.log('/employer/updateProfile')
	var result = {};

	console.log(req.body)
	
	//some logic

	result.error_code = 0;

	console.log(result);
  res.json(result);
});

router.post('/employer/deleteCustomer', function(req, res, next) {
	console.log('/employer/deleteCustomer' + req.params.id)
	var result = {};
	
	//some logic
	
	result.error_code = 0;
  res.json(result);
});

module.exports = router;