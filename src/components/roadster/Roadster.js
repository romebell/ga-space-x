import './Roadster.css'

const Roadster = (props) => {
    const { name, launch_date_utc, speed_kph, earth_distance_km, mars_distance_km, details} = props.roadster;

    return (
        <div className="roadster">
            <ul>
                <li>Name: {name}</li>
                <li>Launch Date: {launch_date_utc}</li>
                <li>Speed KPH: {speed_kph}</li>
                <li>Distance From Earth (Km): {earth_distance_km}</li>
                <li>Distance From Mars (Km): {mars_distance_km}</li>
                <li>Specifics: {details}</li>
            </ul>
        </div>
    )
}

export default Roadster;