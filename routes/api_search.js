var express = require('express');
var router = express.Router();
var requestMaker = require('../libs/requestMaker.js');


router.post('/search/search', function(req, res, next) {
  console.log("asdasdasdasdasdasdasdasd")
  var result = {};
  var request = {};
  //some logic
  try{
  // request.id = req.session.user.id; // enter id from session here
  // console.log("wtf - " + request.id);
  requestMaker.post('/position/getAll', request,
    function (result) {
      console.log(result)
        res.json(result);
    });
  } catch(e){
    console.log(e)
  }
});

module.exports = router;
