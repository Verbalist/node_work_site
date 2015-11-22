// var request = require('sync-request');
var rp = require('request-promise');
function RequestMaker(){
	this.remoteHost = 'http://localhost:8000';
	this.requestType = 'POST';
}
RequestMaker.prototype.post = function(uri, reqjson, callback){
		console.log(this.remoteHost + uri);
		try {
			rp({
				method: 'POST', 
				uri: this.remoteHost + uri,
				json: true,
				body: reqjson
			}).then(function(data) {
				console.log(data)
				callback(data);
			}).catch(function(e) {
				//console.log('pre_fatal request error', e)
				callback({error_code: 2});
			});
		} catch (e){
			//console.log('fatal request error', e)
			callback({error_code: 2});
		}
}
module.exports = new RequestMaker();


	// var options = {
	// 	json: reqjson
	// }
	// var response = request(this.requestType, this.remoteHost + uri, options);

	/*var options = {
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
	});*/



	// console.log("done");
	// return response.getBody('utf8');
