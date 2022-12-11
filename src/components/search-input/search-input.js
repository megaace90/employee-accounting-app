import './search-panel.css';

function SearchInput () {
	return (
		<input 
				type="text"
				placeholder="Найти сотрудника"
				className="form-control search-input" />
	);
}

export default SearchInput;