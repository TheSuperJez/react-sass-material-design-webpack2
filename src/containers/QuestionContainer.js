import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {saveQuestion} from '../modules/questionModule';

class QuestionContainer extends React.Component {
	
	constructor(props, context) {
		super(props, context);
		
		this.saveQuestion = this.saveQuestion.bind(this);
	}

	saveQuestion(question) {
		this.props.saveQuestion(question);
	}

	
	render() {
		let components = this.props.children && React.cloneElement(this.props.children, {
			saveQuestion: this.saveQuestion,
			questionsList: this.props.questionsList.toArray()
		});
		return (
			<div>
				{components}
			</div>
		);
	}
}

QuestionContainer.propTypes = {
	children: PropTypes.object,
	saveQuestion: PropTypes.func,
	questionsList: PropTypes.object	
};

function mapStateToProps(state) {
	return {
		questionsList: state.questionModule.get('questionsList')
	};
}

function mapDispatchToProps(dispatch) {
	return {
		saveQuestion: (question) => dispatch(saveQuestion(question))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionContainer);
