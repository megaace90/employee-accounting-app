import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';



function EmployeesList ({data, onDelete, onToggleProp}) {
	const emp = data.map(item => {
		const {id, ...itemProps} = item;
		return <EmployeesListItem	key={id} 
															{...itemProps} 
															onDelete={() => onDelete(id)}
															onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-prop'))}/>
	});
	return (
		<ul className="app-list list-group">
			{emp}
		</ul>
	);
}

export default EmployeesList;