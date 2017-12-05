import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import _ from 'lodash';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';

const SurveyReview = ({ onCancel, formValues, submitSurvey, history }) => {
	const reviewFields = _.map(formFields, ({ name, label }) => {
		return (
			<div key={name} style={{paddingBottom: '10px'}}>
				<label>{label}</label>
				<div>{formValues[name]}</div>
			</div>
		);
	});

	return (
		<div className="survey-padding">
			<h5>Please confirm your entries</h5>
			{reviewFields}
			<button
				className="yellow white-text darken-3 btn-flat"
				onClick={onCancel}

			>
				Back
			</button>
			{/* below -- to prevent the action handler from immediately executing, the () => is added so it only executes on click */}
			<button
				onClick={() => submitSurvey(formValues, history)}
				className="green white-text btn-flat right"

			>
				Send Survey<i className="material-icons right">email</i>
			</button>
		</div>
	);
};

function mapStateToProps(state) {
	return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyReview));
