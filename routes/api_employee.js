var express = require('express');
var request = require('request');
var router = express.Router();
var requestMaker = require('../libs/requestMaker.js');

router.post('/employee/:id/resumes', function(req, res, next) {
	console.log('/employee/:id/resumes')
	var result = {};
	var request = {};
	request.id = req.session.customer_id;
	
	requestMaker.post('/employee/getResumes', request, 
		function (result) {
			console.log(result)
		  	result.total = 1;
		  	res.json(result);
  	});
});

router.get('/employee/resume/:id', function(req, res, next) {
	console.log('/employee/resume/' + req.params.id)
	var result = {};

	var request = {
		id : req.params.id
	}; 

	requestMaker.post('/resume/getResume', request, 
		function (response) {
			console.log(response)
		  	result = response;
  			res.json(result);
  	});
  	
});

router.post('/employee/deleteResumes/:id', function(req, res, next) {
	console.log('/employee/deleteResumes/' + req.params.id)
	var result = {};
	
	//some logic

	var request = {
		id : req.params.id
	}; 
	
	requestMaker.post('/resume/deleteById', request, 
		function (response) {
			console.log(response)
		  	result = response;
  			res.json(result);
  	});

	result.error_code = 0;
  res.json(result);
});

router.post('/employee/updateResumes/:id', function(req, res, next) {
	console.log('/employee/updateResumes/' + req.params.id)

	var request = JSON.parse(req.body.json);
	console.log(request);
	request.id = req.params.id;
	request.creator_id =  req.session.customer_id;
	console.log(request);

	requestMaker.post('/resume/updateResume', request, 
		function (result) {
			console.log(result);
		  	res.json(result);
  	});

});

router.post('/employee/addResume', function(req, res, next) {
	console.log('/employee/addResume')
	var result = {};
	
	console.log(JSON.parse(req.body.json))

	//var resume = JSON.parse(req.body.json);
	//resume._id = "3";
	var request = JSON.parse(req.body.json);
	request.creator_id =  req.session.customer_id;
	console.log(request);
	
	try{
		requestMaker.post('/resume/newResume', request, 
			function (result) {
			  	res.json(result);
	  	});
	}catch(err){
		console.log("!!!");
	}
});


router.get('/employee/profile', function(req, res, next) {
	console.log('/employee/profile')
	
	//some logic
	var request = {};
	request.id = "5650b6df82e4f4fa52c3f7b7";

	requestMaker.post('/employee/getById', request, 
		function (result) {
		  	res.json(result);
  	});
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