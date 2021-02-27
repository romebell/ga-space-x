
const Company = (props) => {
    const { student, ceo, employees, name, valuation, vehicles} = props.company

    return (
        <div>
            <p>Student: {student}</p>
            <p>Ceo: {ceo}</p>
            <p>Employees: {employees}</p>
            <p>Name: {name}</p>
            <p>Valuation: {valuation}</p>
            <p>Vehicles: {vehicles}</p>
        </div>
    )
}

export default Company;
