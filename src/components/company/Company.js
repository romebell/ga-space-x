import './Company.css'; // same folder as company component


const Company = (props) => {
    const {student, superpower, company_in_spotlight, ceo, employees, name, valuation, vehicles} = props.company;

    return (
<div className="company">
            <ul>
                <li>Student: {student}</li>
                <li>Superpower: {superpower}</li>
                <li>Company In Spotlight: {company_in_spotlight}</li>
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