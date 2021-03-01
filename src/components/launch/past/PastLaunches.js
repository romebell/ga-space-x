import './PastLaunches.css'

const PastLaunches = (props) => {
    const { name, rocket, flight_number, details} = props.pastLaunches;

    return (
        <div className="PastLaunches">
            <ul>
                <li>Name: {name}</li>
                <li>Rocket: {rocket}</li>
                <li>Flight Number: {flight_number}</li>
                <li>Specifics: {details}</li>
            </ul>
        </div>
    )
}

export default PastLaunches;