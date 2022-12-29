import { Component } from 'react';
import './search-panel.css';

class SearchInput extends Component {
	constructor (props) {
		super(props);
		this.state = {
			term: ''
		}
	}
	getFromSearchInput = (e) => {
		const term = e.target.value;
		this.setState({term});
		this.props.getFromSearchInput(term);
	}
	render () {
		return (
			<input 
					type="text"
					placeholder="Найти сотрудника"
					className="form-control search-input"
					value={this.state.term} 
					onChange={this.getFromSearchInput}/>
					
		);
	}
}

export default SearchInput;