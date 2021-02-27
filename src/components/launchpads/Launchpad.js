import './Launchpad.css'

const Launchpad= (props) => {
    const { full_name, region, launch_attempts, launch_successes, status} = props.launchpad;

    return (
        <div className="launchpad">
            <ul>
                <li>Name: {full_name}</li>
                <li>Region: {region}</li>
                <li>Launch Attempts {launch_attempts}</li>
                <li>Launch Successes: {launch_successes}</li>
                <li>Status: {status}</li>
            </ul>
        </div>
    )
}
export default Launchpad;