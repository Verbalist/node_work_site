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
  res.render('search/search', {auth: req.cookies.auth || false, role: req.cookies.role || 'employee'});
});

module.exports = router;
