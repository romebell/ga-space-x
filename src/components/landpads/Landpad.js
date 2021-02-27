import './Landpad.css'

const Landpad = (props) => {
    const { name, locality, landing_attempts, landing_successes} = props.landpad;

    return (
        <div className="landpads">
            <ul>
                <li>Name: {name}</li>
                <li>Locality: {locality}</li>
                <li>Landing Attempts: {landing_attempts}</li>
                <li>Landing Successes: {landing_successes}</li>
            </ul>
        </div>
    )
}

export default Landpad;