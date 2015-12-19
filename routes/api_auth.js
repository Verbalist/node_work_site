var express = require('express');
var router = express.Router();
var request = require('request');
var crypto = require('crypto');
var db = require('../models/db')

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
		//jsonReq = [];
		hash_pass = [HASH_ALG, salt, hash_pass].join("$");
		db.query('INSERT INTO "user"(login, password, role) values($1, $2, $3)', 
			[req.body.login, hash_pass, req.body.role], function (result){
				if (!err) { res.json({'error_code': 0}); } 
				else { res.json({'error_code': 2}); }
		})
	} catch (e){
		console.log(e);
		res.json({'error_code': 2});
	}
});

router.post('/auth/login', function(req, res, next) {
	try {
		db.query('select password, role from "user" where login = $1', 
			[req.body.login], function (result){
			if (result.length != 0) {
				console.log(result);
				result = result[0];
				if (verify_pass(req.body.password, result.password)) {
					res.cookie('node_sessid', crypto.randomBytes(32).toString('hex'));	
					res.cookie('auth', true);
					res.cookie('role', result.role);
					res.redirect('/search');
					return
				} else {
					data = {'error_code': 1, 'error': 'wrong password or login'};
				}
			} else {
				data = {'error_code': 1, 'error': 'wrong password or login or don`t work DB'};
			}
			res.json(data);
		})
	} catch (e){
		console.log(e);
		res.json({'error_code': 2, 'error': e});
	}
});

// TODO GET replace to POST method
router.get('/auth/logout', function(req, res, next) {
	try {
		res.clearCookie('node_sessid');
		res.cookie('auth', false);
		res.cookie('role', 'employee');
		res.redirect('/search');
		return
	}
	catch (e) {
		console.log(e);
		res.json({'error_code': 2});
	}
});

module.exports = router;