import React from 'react';

export default ({ input, label, placeholder, meta: { error, touched } }) => {
	return (
		<div className="survey-field">
			<label>{label}</label>
			<input {...input} placeholder={placeholder} style={{ marginBottom: '0px' }} />
			<div className="red-text" style={{ marginBottom: '20px' }}>
				{touched && error}
			</div>
		</div>
	);
};
