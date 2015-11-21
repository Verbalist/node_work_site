var express = require('express');
var request = require('request');
var router = express.Router();
var requestMaker = require('../libs/requestMaker.js');

router.post('/employee/:id/resumes', function(req, res, next) {
	console.log('/employee/:id/resumes')
	var result = {};

	//some logic
	var resumes = [
		{
			"id":"1",
			"name":"programmer",
			"description":"super programmer",
			"skills":"html, css",
			"experience":"over 9000 hours",
			"education":"full",
			"salary":"1m dollars"
		},
		{
			"id":"1",
			"name":"Deer",
			"description":"super deer",
			"skills":"moss consumption",
			"experience":"over 9000 hours",
			"education":"full",
			"salary":"1k dollars"
		}
	]
	result.error_code = 0;
	result.resumes = resumes;
	result.total = 1;

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
/*
	console.log(req.body)
	result = requestMaker.send('/employee/resume', req.params);
	console.log(result);	
	//some logic
	if(result !== undefined)
		result.error_code = 0;
  	res.json(result);
*/
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
	requestMaker.send('/employee/updateResume', req.params, 
		function (result) {
		  	res.json(result);
  	});

});

router.post('/employee/addResume', function(req, res, next) {
	console.log('/employee/addResume')
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
	var profile = 
		{
			"id":"1",
			"name":"John",
			"category":"it",
			"status":"looking for job",
			"email":"example@gmail.com",
			"phone":"1234567"
		}
	result.error_code = 0;
	result.profile = profile;

	console.log(result);
  res.json(result);
});

router.post('/employee/updateProfile/:id', function(req, res, next) {
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