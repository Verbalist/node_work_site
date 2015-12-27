var express = require('express');
var router = express.Router();
var requestMaker = require('../libs/requestMaker.js');

var requireRole = function(role) {
  return function(req, res, next) {
    if(role === 'all'){
    	next();
    }else if('user' in req.session && req.session.user.role === role)
      next();
    else{
	  	console.log('ERRRRROR')
	  	res.sendStatus(403);	
    }
  }
};

var search = {
	positions : [requireRole('all'), function(req, res, next) {
		console.log('/search')
		var result = {};
		var request = {};
		//some logic
		request.id = req.session.user.id; // enter id from session here
		console.log("wtf - " + request.id);
		requestMaker.post('/position/getAll', request, 
			function (result) {
				console.log(result)
			  	res.json(result);
	  	});
	}]
}


router.post('/search', search.positions);

module.exports = router;