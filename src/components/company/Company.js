
const Company = (props) => {
    const {student, ceo, employees, name, valuation, vehicles} = props.company;

    return (
        <>
        <p> student: {student}</p>
        <p> ceo: {ceo}</p>
        <p> employees: {employees}</p>
        <p> name: {name}</p>
        <p> valuation: {valuation}</p>
        <p> vehicles: {vehicles}</p>
        </>
    )
}

export default Company;