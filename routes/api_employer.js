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

router.get('/employee/resume/:id', function(req, res, next) {
	console.log('/employee/resumes/' + req.params.id)
	var result = {};

	//some logic
	var resume = {
			"id":"1",
			"name":"programmer",
			"description":"super programmer",
			"skills":"html, css",
			"experience":"over 9001 hours",
			"education":"full",
			"salary":"1m dollars"
		}

	result.error_code = 0;
	result.resume = resume;

	console.log(result);
  res.json(result);
});

router.post('/employee/deleteResumes/:id', function(req, res, next) {
	console.log('/employee/deleteResumes/' + req.params.id)
	var result = {};
	
	//some logic
	
	result.error_code = 0;
  res.json(result);
});

router.post('/employee/updateResumes/:id', function(req, res, next) {
	console.log('/employee/updateResumes/' + req.params.id)
	var result = {};
	
	console.log(req.body)

	//some logic
	
	result.error_code = 0;
  res.json(result);
});

router.post('/employee/addResumes/', function(req, res, next) {
	console.log('/employee/addResumes/')
	var result = {};
	
	console.log(req.body)

	//some logic
	
	result.error_code = 0;
  res.json(result);
});


router.get('/employee/profile', function(req, res, next) {
	console.log('/employee/profile')
	var result = {};

	//some logic
	var profile_info = [
		{
			"id":"1",
			"name":"John",
			"category":"it",
			"status":"looking for job",
			"email":"example@gmail.com",
			"phone":"1234567"
		}
	]
	result.error_code = 0;
	result.profile_info = profile_info;

	console.log(result);
  res.json(result);
});

router.post('/employee/updateProfile', function(req, res, next) {
	console.log('/employee/updateProfile')
	var result = {};

	console.log(req.body)
	
	//some logic

	result.error_code = 0;

	console.log(result);
  res.json(result);
});

router.post('/employee/deleteCustomer', function(req, res, next) {
	console.log('/employee/deleteCustomer' + req.params.id)
	var result = {};
	
	//some logic
	
	result.error_code = 0;
  res.json(result);
});

module.exports = router;