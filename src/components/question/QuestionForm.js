import React, {PropTypes} from 'react';

import Answer from '../answer/Answer';
import AnswerCapture from '../answer/AnswerCapture';
import Immutable from 'immutable';

class QuestionForm extends React.Component {
	
	constructor(props, context) {
		super(props, context);
		this.state = {
			answersList: new Immutable.List(),
			answerText: '',
			questionText: '',
			showAnswerCapture: false,
			selectedAnswer: 0
		};
		
		this.addAnswer = this.addAnswer.bind(this);
		this.changeTextQuestion = this.changeTextQuestion.bind(this);
		this.changeTextAnswer = this.changeTextAnswer.bind(this);
		this.closeAnswer = this.closeAnswer.bind(this);
		this.saveAnswer = this.saveAnswer.bind(this);
		this.changeAnswer = this.changeAnswer.bind(this);
		this.saveQuestion = this.saveQuestion.bind(this);
	}

	changeTextQuestion(event) {
		this.setState({
			questionText: event.target.value
		});
	}
	
	changeTextAnswer(event) {
		this.setState({
			answerText: event.target.value
		});
	}
	
	addAnswer(event) {
		event.preventDefault();
		this.setState({
			showAnswerCapture: true
		});
	}
	
	saveAnswer(event) {
		event.preventDefault();
		let newAnser = {},
			answersList = this.state.answersList;
		newAnser.text = this.state.answerText;
		newAnser.checked = true;
		newAnser.nameGroup = 'pregunta';
		answersList = answersList.push(newAnser);
		this.setState({
			showAnswerCapture: false,
			answerText: '',
			answersList
		});
	}
	
	closeAnswer(event) {
		event.preventDefault();
		this.setState({
			showAnswerCapture: false
		});
	}
	
	changeAnswer(event) {
		this.setState({
			selectedAnswer: parseInt(event.target.id)
		});
	}
	
	saveQuestion(event) {
		event.preventDefault();
		let contentPregunta,
			answers = [];
		
		_.each(this.state.answersList.toArray(), (element, index) => {
			let answer = {};
			answer.id = index;
			answer.text = element.text;
			answers.push(answer);
		});
		
		contentPregunta = {
			questionText: this.state.questionText,
			correctAnswer: this.state.selectedAnswer,
			answers
		};
		
		this.props.saveQuestion(contentPregunta);
		
		document.location = '#/question';
	}
	
	render() {
		let showAnswers = this.state.answersList.toArray().map(((element, index) => {
			return (
				<div key={index}>
					<Answer id={index}
						answerText={element.text} 
						checked={index === this.state.selectedAnswer} 
						changeFunction={this.changeAnswer}
						group={element.nameGroup}
						/>
				</div>
			);
		}).bind(this));
		return (
			<form onSubmit={this.saveQuestion}>
				<AnswerCapture 
					text={this.state.answerText} 
					changeFunction={this.changeTextAnswer} 
					show={this.state.showAnswerCapture}
					closeFunction={this.closeAnswer}
					spreguntar={this.saveAnswer} />
				{'Pregunta'}
			</form>
		);
	}
}

QuestionForm.propTypes = {
	saveQuestion: PropTypes.func
};

export default QuestionForm;
