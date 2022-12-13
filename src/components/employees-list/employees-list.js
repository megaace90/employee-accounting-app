import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';



function EmployeesList ({data}) {
	const emp = data.map(item => {
		const {id, ...itemProps} = item;
		return <EmployeesListItem key={id} {...itemProps}/>
	});
	return (
		<ul className="app-list list-group">
			{emp}
		</ul>
	);
}

export default EmployeesList;