import './LaunchPad.css'

const LaunchPad = (props) => {
    const { name, full_name, locality, region, launch_attempts, launch_successes, details, status} = props.launchPad

    

    return(
        <div className='launchPad'>
            <ul>
                <li>Name: {name}</li>
                <li>Full Name: {full_name}</li>
                <li>Location: {locality}</li>
                <li>Region: {region}</li>
                <li>Launch Attempts: {launch_attempts}</li>
                <li>Launch Successes: {launch_successes} </li>
                <li>Details: {details}</li>
                <li>Status: {status}</li>
            </ul>

        </div>
    )
}

export default LaunchPad;