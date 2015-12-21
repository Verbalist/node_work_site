var express = require('express');
var router = express.Router();

/* GET search employee */
// router.get('/:category/:name', function(req, res, next) {
// 	console.log('search/' + req.params.category + '/' + req.params.name)
//   res.render('search/search', {title: 'search', 
//   						category: 'category: ' + req.params.category,
//   						name: 'name: ' + req.params.name,
//   						});
// });

/* GET login */


router.get('/', function(req, res, next) {
	var role = '';
	var auth = false;
	if('user' in req.session){
		role = req.session.user.role;
		auth = true;
	}
  	res.render('search/search', {auth: auth, role: req.cookies.role || role});
});

module.exports = router;
