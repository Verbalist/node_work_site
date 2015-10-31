var express = require('express');
var router = express.Router();
var request = require('request');
var crypto = require('crypto');


var HASH_ALG = 'sha1';

function create_encrypted_password(alg, password, salt) {
	var hash_pass = crypto.createHash(alg).update(password).digest('hex');
	return crypto.createHash(alg).update(salt + password).digest('hex');
}

function verify_pass(password, enc_pass) {
	var hash_pass = enc_pass.split("$");
	return create_encrypted_password(hash_pass[0], password, hash_pass[1]) == hash_pass[2];
}

router.post('/auth/registration', function(req, res, next) {
	try {
		var salt = crypto.randomBytes(32).toString('hex');
		var hash_pass = create_encrypted_password(HASH_ALG, req.body.password, salt);
		// insert into db
		var login = req.body.login;
		var role = req.body.role;	
		hash_pass = [HASH_ALG, salt, hash_pass].join("$");
		console.log('insert into db:' + 
			['login: ' + login, 'hash_pass: ' + hash_pass, 'role:' + role].join(" | "))
		data = {'error_code': 0}
	} catch (e){
		console.log(e);
		data = {'error_code': 2}
	}
	res.json(data);
});

router.post('/auth/login', function(req, res, next) {
	try {
		// select password from "user" where login = req.body.login;
		data = {}
		data.password = 'sha1$84beb09d3da6ced6bec6b4563a6f54634465ece430ee89e291962ce19639b41b$a83c03dee9a81532600b2d874b0566ec98444bdd';
		data.role = 'employee';
		if (verify_pass(req.body.password, data.password)) {
			res.cookie('node_sessid', crypto.randomBytes(32).toString('hex'));	
			res.cookie('auth', true);
			res.cookie('role', data.role);
			// TODO or add login redirect on frontend
			res.redirect('/auth/login');
		} else {
			data = {'error_code': 1, 'error': 'wrong password or login'};
		}
	} catch (e){
		console.log(e);
		data = {'error_code': 2}
	}
	res.json(data);
});

module.exports = router;