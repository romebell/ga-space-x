import './Landpad.css'

const Landpad = (props) => {
    const { name, full_name, type, locality, region, landing_attempts, landing_successes, details, status} = props.landpad

    

    return(
        <div className='landpad'>
            <ul>
                <li>Name: {name}</li>
                <li>Full Name: {full_name}</li>
                <li>Type: {type}</li>
                <li>Location: {locality}</li>
                <li>Region: {region}</li>
                <li>Landing Attempts: {landing_attempts}</li>
                <li>Landing Successes: {landing_successes} </li>
                <li>Details: {details}</li>
                <li>Status: {status}</li>
            </ul>

        </div>
    )
}

export default Landpad;