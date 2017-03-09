import React, {PropTypes} from 'react';

const Answer = ({id, answerText, checked, group, changeFunction}) => {
	return (
		<div>
			{answerText}
		</div>
	);
};

Answer.propTypes = {
	id: PropTypes.number.isRequired,
	answerText: PropTypes.string.isRequired,
	group: PropTypes.string.isRequired,
	changeFunction: PropTypes.func.isRequired,
	checked: PropTypes.bool
};

Answer.defaultProps = {
	checked: false
};

export default Answer;
