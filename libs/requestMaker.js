var request = require('request');

function RequestMaker(){
	this.remoteHost = 'http://localhost:9000';
	this.requestType = 'POST';
}

RequestMaker.prototype.send = function(uri, reqjson){

	console.log(this.remoteHost + uri);
	var options = {
	  uri: this.remoteHost + uri,
	  //type: 'Content-Type: application/json',
	  method: this.requestType,
	  json: reqjson
	};
	//curl -H "Content-Type: application/json" -X POST -d '{"name":"xyz"}' http://localhost:9000/test
	request(options, function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	  	console.log(body);
	    return body;
	  }
	});
	console.log("done");
}


module.exports = new RequestMaker();