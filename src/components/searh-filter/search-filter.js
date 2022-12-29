import './search-filter.css';

const SearchFilter = (props) => {
	const buttonsData = [
		{name: 'all', label: 'Все сотрудники'},
		{name: 'like', label: 'На повышение!'},
		{name: 'salaryMoreThen1000', label: 'ЗП больше 1000$'}
	];
	const buttons = buttonsData.map(({name, label}) => {
		const active = props.filter === name;
		const clazz = active ? `btn-light` : `btn-outline-light`;
		return (
			<button className={`btn ${clazz}`}
							type="button"
							key={name}
							onClick={() => props.onFilterInfo(name)}
							>
							{label}
			</button>
		)
	})
		return (
			<div className="btn-group">
				{buttons}
			</div>
		);
}
	

export default SearchFilter;