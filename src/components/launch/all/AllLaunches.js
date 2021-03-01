import './AllLaunches.css'

const AllLaunches = (props) => {
    const { name, rocket, flight_number, details} = props.allLaunches;

    return (
        <div className="AllLaunches">
            <ul>
                <li>Name: {name}</li>
                <li>Rocket: {rocket}</li>
                <li>Flight Number: {flight_number}</li>
                <li>Specifics: {details}</li>
            </ul>
        </div>
    )
}

export default AllLaunches;