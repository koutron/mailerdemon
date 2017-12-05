import React from 'react';
import { connect } from 'react-redux';

const Landing = props => {
	const renderIntroBox = (icon, header, content) => {
		return (
			<li className="introBox">
				<h5>
					<i className="material-icons">{icon}</i> {header}
				</h5>
				<p>{content}</p>
			</li>
		);
	};

	return (
		<div>
			<div className="landingPage">
				<h1>Welcome to Mailerdemon</h1>
				<p>The Seismic Paradigm Shift in Customer Feedback</p>
			</div>
			<ul className="introBoxContainer">
				{renderIntroBox(
					'attach_money',
					'Purchase Credits',
					'Sending a survey requires 1 credit.  Send to as many recipients as you want!'
				)}

				{renderIntroBox(
					'mail_outline',
					'Create & Send',
					"Create and send out your survey with your own message title, subject, and body.  Don't worry about keeping track, that's what Mailerdemon is for!"
				)}

				{renderIntroBox(
					'device_hub',
					'Gather Feedback',
					'No more digging through your inbox tallying up results.  Mailerdemon keeps track of recipient responses and summarizes them on your dashboard.'
				)}
			</ul>

			<ol>
				<p>To evaluate this app:</p>
				<li>
					Login with a Google account (the authentication scoping retrives only
					your email address and Google ID).
				</li>
				<li>Click the "Add Credits" to load the Stripe payment component.</li>
				<li>
					Enter any email address with proper email formatting, i.e.
					user@test.com
				</li>
				<li>Enter Stripe's demo credit card number 4242 4242 4242 4242</li>
				<li>The expiration date must be any date in the future.</li>
				<li>The security code can be any 3 digits.</li>
			</ol>
		</div>
	);
};

function mapStateToProps({ auth }) {
	return { auth };
}
/*function mapStateToProps(state) {
	return { auth: state.auth };
}*/

export default connect(mapStateToProps)(Landing);
