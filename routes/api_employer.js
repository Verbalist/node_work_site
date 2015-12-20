var express = require('express');
var router = express.Router();
var requestMaker = require('../libs/requestMaker.js');

router.post('/employer/positions', function(req, res, next) {
	console.log('/employer/positions')
	var result = {};
	var request = {};
	//some logic
	request.id = req.session.customer_id; // enter id from session here
	console.log("wtf - " + request.id);
	requestMaker.post('/employer/getPositions', request, 
		function (result) {
			console.log(result)
		  	res.json(result);
  	});
});

router.get('/employer/position/:id', function(req, res, next) {
	console.log('/employer/position/' + req.params.id)
	var ans = {};

	//some logic
	ans.error_code = 0;
	var request = {};
	request.id = req.session.customer_id; // enter id from session here
	requestMaker.post('/position/getPosition', request, 
		function (result) {
		  	result.total = 1;
		  	res.json(result);
  	});
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
	var request = JSON.parse(req.body.json);
	console.log(request);
	request.id = req.params.id;
	request.creator_id = req.session.customer_id; // enter id from session here
	console.log(request);

	requestMaker.post('/position/updatePosition', request, 
		function (result) {
			console.log(result);
		  	res.json(result);
  	});
  	
	result.error_code = 0;
  res.json(result);
});

router.post('/employer/newPosition', function(req, res, next) {
	console.log('/position/newPosition')
	var result = {};
	try{
	console.log(JSON.parse(req.body.json))
	//some logic
	var request = JSON.parse(req.body.json);

	request.creator_id = req.session.customer_id; // enter id from session here
	requestMaker.post('/position/newPosition', request, 
		function (result) {
			res.json(result);
	});
} catch (err){
	console.log(err)
}
});


router.get('/employer/profile', function(req, res, next) {
	console.log('/employer/profile')
	var result = {};

	//some logic
	var profile_info = {
			"id":"1",
			"name":"BigCompany",
			"category":"it",
			"status":"looking for slaves",
			"email":"example@gmail.com",
			"phone":"1234567"
		};
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