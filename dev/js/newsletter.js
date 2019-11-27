/**
 * Newsletter JS
 */
var URL =
	'https://k9jalhedxc.execute-api.us-west-2.amazonaws.com/dev/subscribe';

var validateEmail = (email) => {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
};

var onSubmit = (e) => {
	e.preventDefault();
	let email = document.getElementById('subscriptionEmail').value;

	if (!validateEmail(email)) {
		alert('Invalid email');
		return false;
	} else {
		// Data
		let data = { email: email };

		fetch(URL, {
			method: 'POST',
			mode: 'cors',
			cache: 'no-cache',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((response) => {
				alert('Email subsription was successful.');
				document.getElementById('subscriptionEmail').value = '';
			})
			.catch((err) => {
				alert('Something went wrong, try again.');
			});
	}
};

document
	.getElementById('subscriptionButton')
	.addEventListener('click', onSubmit);
