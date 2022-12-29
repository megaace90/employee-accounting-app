//cd employee-accounting-app
import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchInput from '../search-input/search-input';
import SearchFilter from '../searh-filter/search-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
	constructor (props) {
		super(props);
		this.state = {
			data: [
				{name: 'Karl', salary: 1200, increase: false, like: false, id: 1},
				{name: 'Vova', salary: 800, increase: false, like: false, id: 2},
				{name: 'Alex', salary: 1800, increase: false, like: false, id: 3}
			],
			term: '',
			filter: 'all'
		};
		this.baseId = 4;
	}
	deleteItem = (id) => {
		this.setState(({data}) => {
			return {
				data: data.filter(elem => elem.id !== id)
			}
		})
	}
	addItem = (name, salary) => {
		const newItem = {
			name,
			salary,
			increase: false,
			like: false,
			id: this.baseId++
		}
		this.setState(({data}) => {
			const newData = [...data, newItem];
			return {
				data: newData
			};
		})
	}
	onToggleProp = (id, prop) => {
		this.setState(({data}) => ({
			data: data.map(item => {
				if(item.id === id) {
					return {...item, [prop]: !item[prop]}
				}
				return item
			})
		}))
	}
	searchEmp = (items, term) => {
		if (term.length === 0) {
			return items;
		}
		return items.filter(item => {
			return item.name.indexOf(term) > -1;
		})
	}
	getFromSearchInput = (term) => {
		this.setState({
			term: term
		});
	}
	filterData = (items, filter) => {
		switch (filter) {
			case 'like': 
				return items.filter(item => item.like);
			case 'salaryMoreThen1000':
				return items.filter(item => item.salary > 1000);
			default:
				return items;
		}
	}
	onFilterInfo = (filter) => {
		this.setState({filter});
	}
	render () {
		const {data, term, filter} = this.state;
		const employees = data.length,
					increased = data.filter(item => item.increase).length;
		const visibleData = this.filterData(this.searchEmp(data, term), filter);
		return (
			<div className="app">
				<AppInfo	employees={employees}
									increased={increased}/>
				<div className="search-panel">
					<SearchInput getFromSearchInput={this.getFromSearchInput}/>
					<SearchFilter	filter={filter}
												onFilterInfo={this.onFilterInfo}
												/>
					<EmployeesList	data={visibleData}
													onDelete={this.deleteItem}
													onToggleProp={this.onToggleProp} 
													/>
					<EmployeesAddForm onAdd={this.addItem}/>
				</div>
			</div>
		);
	} 
}

export default App;