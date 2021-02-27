const Company = (props) => {
    const {student, ceo, employees, name, valuation, founder} = props.company //gains access to company prop set up in app.ks

    return(
        <div>
            <p>Student: {student}</p>
            <p>Name: {name}</p>
            <p>Founder: {founder}</p>
            <p>Ceo: {ceo}</p>
            <p>Valuation: {valuation}</p>
            <p>Employees: {employees}</p>
        </div>
    )
}

export default Company