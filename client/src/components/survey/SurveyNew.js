import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
	/*
	constructor(props) {
		super(props);

		this.state = {new: true};
	}
	*/

	state = { showFormReview: false }; //equivalent to code above

	renderContent() {
		if (this.state.showFormReview) {
			return (
				<div>
					<SurveyFormReview
						onCancel={() => this.setState({ showFormReview: false })}
					/>
				</div>
			);
		}

		return (
			<div>
				<p style={{'margin-bottom': '3px', paddingLeft: '15px', color: '#9e9e9e'}}>"Yes" and "No" feedback links will be inserted at the bottom of the survey.</p>
				<p style={{'margin-top': '3px', paddingLeft: '15px', color: '#9e9e9e'}}>When sending to multiple recipients, seperate email addresses with a comma.</p>
				<SurveyForm
					onSurveySubmit={() => this.setState({ showFormReview: true })}
				/>
			</div>
		);
	}

	render() {
		return (
			<div>
				<div>{this.renderContent()}</div>
			</div>
		);
	}
}

export default reduxForm({
	form: 'surveyForm'
})(SurveyNew);
