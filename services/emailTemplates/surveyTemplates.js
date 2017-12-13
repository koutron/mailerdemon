const keys = require('../../config/keys');

module.exports = survey => {
	return `
		<html>
			<body>
				<div style="text-align: center;">
					<p>${survey.body}</p>
					<div>
						<a href="http://www.kouroscodes.com:9000/api/surveys/${survey.id}/yes">Yes</a>
					</div>
					<div>
						<a href="http://www.kouroscodes.com:9000/api/surveys/${survey.id}/no">No</a>
					</div>
				</div>
			</body>
		</html>
	`;
};
