const passport = require('passport');

module.exports = app => {
	app.get(
		'/auth/google',
		passport.authenticate('google', {
			// the 'google' string internally identifies and uses the GoogleStrategy
			scope: ['profile', 'email']
		})
	);

	app.get(
		'/auth/google/callback', //the url will be auto identified and resolve profile info
		passport.authenticate('google'),
		(req, res) => {
			res.redirect('/surveys');
		}
	);

	app.get('/api/current_user', (req, res) => {
		res.send(req.user);
	});

	app.get('/api/logout', (req, res) => {
		req.logout();
		res.redirect('/');
	});
};
