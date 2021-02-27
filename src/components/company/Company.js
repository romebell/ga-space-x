import './Company.css' //same level as company component

const Company = (props) => {
    const {student, ceo, employees, name, valuation, founder} = props.company //gains access to company prop set up in app.ks

    return(
        <div className="company">
            <ul>
            <li>Student: {student}</li>
            <li>Name: {name}</li>
            <li>Founder: {founder}</li>
            <li>Ceo: {ceo}</li>
            <li>Valuation: {valuation}</li>
            <li>Employees: {employees}</li>
            </ul>
        </div>
    )
}

export default Company