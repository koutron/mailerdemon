import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends Component {
	componentDidMount() {
		this.props.fetchSurveys();
	}

	renderSurveys() {
		return this.props.surveys.reverse().map(survey => {
			return (
				<div
					className="col s4"
					style={{
						display: 'inline'
					}}
					key={survey._id}
				>
					<div className="card grey lighten-5" >
						<div className="card-content">
							<span className="card-title">
								{survey.title}
								<h6 className="right">
									Sent on: {new Date(survey.dateSent).toLocaleDateString()}
								</h6>
							</span>
							<p>{survey.body}</p>
						</div>
						<div className="card-action">
							<a>Yes: {survey.yes}</a>
							<a>No: {survey.no}</a>
						</div>
					</div>
				</div>
			);
		});
	}

	render() {
		return (
			<div>
				{this.props.surveys ? (
					<p style={{ padding: '15px 0 15px 24px', fontSize : '20px' }}>
						Survey History
					</p>
				) : (
					<p style={{ padding: '15px 0 15px 24px' }}>
						Make your first survey by clicking the blue button below.
					</p>
				)}

				<div className="card-container">
					<div>{this.renderSurveys()}</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { surveys: state.surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
