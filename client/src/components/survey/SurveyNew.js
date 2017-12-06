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
