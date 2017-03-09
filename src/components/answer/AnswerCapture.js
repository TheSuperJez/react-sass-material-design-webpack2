import React, {PropTypes} from 'react';

const AnswerCapture = ({text, changeFunction, show, closeFunction, saveAnswer}) => {
	return (
		<div>Capture</div>
	);
};

AnswerCapture.propTypes =  {
	text: PropTypes.string.isRequired,
	changeFunction: PropTypes.func.isRequired,
	show: PropTypes.bool.isRequired,
	closeFunction: PropTypes.func.isRequired,
	saveAnswer: PropTypes.func.isRequired
};

export default AnswerCapture;
