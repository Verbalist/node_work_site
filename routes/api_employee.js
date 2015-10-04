var express = require('express');
var router = express.Router();

router.get('/employee/resumes', function(req, res, next) {
	console.log('/employee/resumes')
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
		}
	]
	result.error_code = 0;
	result.resumes = resumes;

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
	var options = {
	  uri: 'http://localhost:9000/test',
	  //type: 'Content-Type: application/json',
	  method: 'POST',
	  json: {
	    "name": "Ivan"
	  }
	};
	//curl -H "Content-Type: application/json" -X POST -d '{"name":"xyz"}' http://localhost:9000/test
	request(options, function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	    console.log(body) // Print the shortened url.
	  }
	});
	console.log("done");

	result.error_code = 0;
  res.json(result);
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