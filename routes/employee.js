var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/lol', function(req, res, next) {
	console.log(req.route)
  res.render('index', { title: 'Express' });
});

module.exports = router;
