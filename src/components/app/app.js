//cd employee-accounting-app
import AppInfo from '../app-info/app-info';
import SearchInput from '../search-input/search-input';
import SearchFilter from '../searh-filter/search-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import './app.css';

function App () {

	const data = [
		{name: 'Karl', salary: 1200, increase: false, like: false, id: 'emp1'},
		{name: 'Vova', salary: 800, increase: true, like: false, id: 'emp2'},
		{name: 'Alex', salary: 1800, increase: false, like: false, id: 'emp3'}
	];

	return (
		<div className="app">
			<AppInfo/>
			<div className="search-panel">
				<SearchInput/>
				<SearchFilter/>
				<EmployeesList data={data}/>
				<EmployeesAddForm/>
			</div>
		</div>
	);
}

export default App;