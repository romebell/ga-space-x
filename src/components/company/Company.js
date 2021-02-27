import './Company.css'; // same folder as company component


const Company = (props) => {
    const {student, ceo, employees, name, valuation, vehicles} = props.company;

    return (
<div className="company">
            <ul>
                <li>Student: {student}</li>
                <li>Ceo: {ceo}</li>
                <li>Employees: {employees}</li>
                <li>Name: {name}</li>
                <li>valuation: {valuation}</li>
                <li>Vehicles: {vehicles}</li>
            </ul>
        </div>

    )
}

export default Company;