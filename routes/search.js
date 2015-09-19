var express = require('express');
var router = express.Router();

/* GET search employee */
router.get('/:category/:name', function(req, res, next) {
	console.log('search/' + req.params.category + '/' + req.params.name)
  res.render('search/search', {title: 'search', 
  						category: 'category: ' + req.params.category,
  						name: 'name: ' + req.params.name,
  						});
});

// /* GET registration */
// router.get('/registration', function(req, res, next) {
// 	console.log('auth/register')
//   res.render('register');
// });

//  GET restorepass 
// router.get('/restorepass', function(req, res, next) {
// 	console.log('auth/restorepass')
//   res.render('restorepass');
// });

module.exports = router;
