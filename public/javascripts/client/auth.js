function loginHandler(login, pass) {
	jsonSend('auth/login', {'login': login, 'pass': pass })
	window.location = 'http://localhost/'
}

function registrationHandler(login, email, pass, pass2) {
	if (pass === pass2)
		jsonSend('auth/registration', {'login': login, 'pass': pass , 'email': email})	
	else:
		$(#hint).html = 'не совпадают пароли'
}

function restorePasswordHandler(email) {
	jsonSend()
}