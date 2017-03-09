import React, { PropTypes } from 'react';

import Dots from './common/Dots';
import { connect } from 'react-redux';
import { loadQuestions } from '../modules/questionModule';

class App extends React.Component {

	constructor(props, context) {
		super(props, context);
		this.state = {
			menuIsOpened: false
		};
		this.openMenu = this.openMenu.bind(this);
		this.synchMenu = this.synchMenu.bind(this);
	}

	componentDidMount() {
		this.props.loadQuestions();
	}

	openMenu() {
		this.setState({ menuIsOpened: true });
	}
	synchMenu(e) {
		this.setState({ menuIsOpened: e.isOpen });
	}
	render() {
		return (
			<div>
				
				
							
							<a href="#/question">
								{' React-Bootstrap'}
							</a>
							<a href="#/question/new">
								{'New Question'}
							</a>
							<a href="#/candidate/new">
								{'New Candidate'}
							</a>
				<div className="container-fluid">
					{this.props.loading === true && (
						<Dots />
					)}
					{this.props.children}
				</div>
			</div>
		);
	}
}

App.propTypes = {
	children: PropTypes.object,
	loading: PropTypes.bool,
	questionList: PropTypes.object,
	loadQuestions: PropTypes.func
};

function mapStateToProps(state) {
	return {
		loading: state.ajaxModule > 0,
		questionList: state.questionModule.get('questionList')
	};
}

function mapDispatchToProps(dispatch) {
	return {
		loadQuestions: () => dispatch(loadQuestions())
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
