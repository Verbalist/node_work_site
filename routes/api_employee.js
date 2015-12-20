var express = require('express');
var request = require('request');
var router = express.Router();
var requestMaker = require('../libs/requestMaker.js');

var requireRole = function(role) {
  return function(req, res, next) {
    if('user' in req.session && req.session.user.role === role)
      next();
    else{
	  	console.log('ERRRRROR')
	  	res.sendStatus(403);	
    }
      
    //res.render('employee/employee_index', {auth: req.cookies.auth || false, role: req.cookies.role || 'employee'});
   	//res.render('search/search', {auth: req.cookies.auth || false, role: req.cookies.role || 'employee'});
  	/*res.writeHead(302, {
	  'Location': 'http://localhost/search'
	  //add other headers here...
	});
	res.end();
	*/
  }
};

var employee = {
	resumes : [requireRole('employee'), function(req, res, next) {
		console.log('/employee/resumes')
		var result = {};

		console.log("heeey");
		var request = {};
		request.id = req.session.user.id;
		
		requestMaker.post('/employee/getResumes', request, 
			function (result) {
				console.log(result)
			  	result.total = 1;
			  	res.json(result);
	  	});
	}],
	resume : [requireRole('employee'), function(req, res, next) {
		console.log('/employee/resumes/' + req.params.id)
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
	}],
	deleteResumes : [requireRole('employee'), function(req, res, next) {
		console.log('/employee/deleteResumes/' + req.params.id)
		var result = {};
		
		//some logic
		
		result.error_code = 0;
	  	res.json(result);
	}],
	updateResumes : [requireRole('employee'), function(req, res, next) {
		console.log('/employee/updateResumes/' + req.params.id)


		console.log("heeey");
		var request = JSON.parse(req.body.json);
		console.log(request);
		request.id = req.params.id;
		request.creator_id = req.session.user.id;
		console.log(request);

		requestMaker.post('/resume/updateResume', request, 
			function (result) {
				console.log(result)
			  	res.json(result);
	  	});
	}],
	addResume : [requireRole('employee'), function(req, res, next) {
		console.log('/employee/addResume')
		var result = {};
		
		console.log(JSON.parse(req.body.json))

		//var resume = JSON.parse(req.body.json);
		//resume._id = "3";
		var request = JSON.parse(req.body.json);
		request.creator_id = req.session.user.id;

		try{
			requestMaker.post('/resume/newResume', request, 
				function (result) {
				  	res.json(result);
		  	});
		}catch(err){
			console.log("!!!");
		}
	}],
	profile : [requireRole('employee'), function(req, res, next) {
		console.log('/employee/profile')
	
		//some logic
		var request = {};
		request.id = req.session.user.id;

		requestMaker.post('/employee/getById', request, 
			function (result) {
			  	res.json(result);
	  	});
	}],
	updateProfile : [requireRole('employee'), function(req, res, next) {
		console.log('/employee/updateProfile')
		var result = {};

		console.log(req.body)
		
		//some logic

		result.error_code = 0;
		console.log(result);
	  	res.json(result);
	}],
	deleteCustomer : [requireRole('employee'), function(req, res, next) {
		console.log('/employee/deleteCustomer' + req.params.id)
		var result = {};
		
		//some logic
		
		result.error_code = 0;
	  	res.json(result);
	}] 
}

router.post('/employee/resumes', employee.resumes);
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
router.get('/employee/resume/:id', employee.resume);

router.post('/employee/deleteResumes/:id', employee.deleteResumes);

router.post('/employee/updateResumes/:id', employee.updateResumes);

router.post('/employee/addResume', employee.addResume);


router.get('/employee/profile', employee.profile);

router.post('/employee/updateProfile/:id', employee.updateProfile);

router.post('/employee/deleteCustomer', employee.deleteCustomer);



module.exports = router;