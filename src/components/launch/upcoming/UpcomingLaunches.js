import './UpcomingLaunches.css'

const UpcomingLaunches = (props) => {
    const { name, rocket, flight_number, details} = props.upcomingLaunches;

    return (
        <div className="UpcomingLaunches">
            <ul>
                <li>Name: {name}</li>
                <li>Rocket: {rocket}</li>
                <li>Flight Number: {flight_number}</li>
                <li>Specifics: {details}</li>
            </ul>
        </div>
    )
}

export default UpcomingLaunches;