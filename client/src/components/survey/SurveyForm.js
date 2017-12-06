import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends Component {
	renderFields() {
		return _.map(formFields, ({ label, name, placeholder }) => {
			return (
				<Field className="survey-new-fields"
					component={SurveyField}
					key={name}
					type="text"
					label={label}
					name={name}
					placeholder={placeholder}
				/>
			);
		});
	}
	render() {
		return (
			<div className="survey-padding">
				<form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
					{this.renderFields()}
					<Link
						to="/surveys"
						className="red btn-flat white-text"

					>
						Cancel
					</Link>

					<button
						type="submit"
						className="teal btn-flat right white-text survey-padding"

					>
						Next
						<i className="material-icons right">done</i>
					</button>
				</form>
			</div>
		);
	}
}

function validate(values) {
	const errors = {};
	errors.recipients = validateEmails(values.recipients || '');
	_.each(formFields, ({ name }) => {
		if (!values[name]) {
			errors[name] = 'Cannot leave field blank.';
		}
	});

	return errors;
}

export default reduxForm({
	validate,
	form: 'surveyForm',
	destroyOnUnmount: false
})(SurveyForm);
