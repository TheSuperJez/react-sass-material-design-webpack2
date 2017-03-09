import React, {PropTypes} from 'react';

class CandidateForm extends React.Component {

	constructor(props, context) {
		super(props, context);
		this.state = {
			edad: 0, 
			dataCandidato: {}
		};
		this.changeEdad = this.changeEdad.bind(this);
		this.changeDataCandidato = this.changeDataCandidato.bind(this);
		this.saveCandidate = this.saveCandidate.bind(this);

	} 
	changeEdad(e) {
		let fecha = e.target.value;
		let time = parseInt((new Date(fecha).getTime()));
		this.setState({
			dataCandidato: Object.assign(this.state.dataCandidato, { 'fechaNacimiento': fecha }),
			edad: this.props.getYears(time)
		});
	}

	changeDataCandidato(event) {
		let name = event.target.name,
			value = event.target.value;
		let data = { [name]: value };
		this.setState({
			dataCandidato: Object.assign(this.state.dataCandidato, data)
		});
	}

	saveCandidate(event) {
		event.preventDefault();
		let dataCandidato = this.state.dataCandidato;
		this.props.saveCandidate(dataCandidato);
		document.location = '#/candidate';
	}

	render() { 
		return (
			<form onSubmit={this.saveCandidate}>
				{'Formulario'}
			</form>
		);
	}
}
 
CandidateForm.propTypes = { 
	getYears: PropTypes.func,
	saveCandidate: PropTypes.func 
};

export default CandidateForm;
