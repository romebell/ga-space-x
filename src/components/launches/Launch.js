import './Launch.css'

const Launch = (props) => {
    const { name, rocket, static_fire_date_utc, flight_number, details} = props.launch;

    return (
        <div className="launches">
            <ul>
                <li>Name: {name}</li>
                <li>Rocket: {rocket}</li>
                <li>Static Fire Date (utc): {static_fire_date_utc}</li>
                <li>Flight Number: {flight_number}</li>
                <li>Specifics: {details}</li>
            </ul>
        </div>
    )
}

export default Launch;