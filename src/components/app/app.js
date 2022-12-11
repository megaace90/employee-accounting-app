import AppInfo from '../app-info/app-info';
import SearchInput from '../search-input/search-input';
import SearchFilter from '../searh-filter/search-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import './app.css';

function App () {
	return (
		<div className="app">
			<AppInfo/>
			<div className="search-panel">
				<SearchInput/>
				<SearchFilter/>
				<EmployeesList/>
				<EmployeesAddForm/>
			</div>
		</div>
	);
}

export default App;