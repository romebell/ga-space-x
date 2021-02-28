import './Dragon.css'

const Dragon = (props) => {
    const { name, type, crew_capacity, orbit_duration_yr, dry_mass_kg} = props.dragon;

    return (
        <div className="crews">
            <ul>
                <li>Name: {name}</li>
                <li>Type: {type}</li>
                <li>Crew Capacity: {crew_capacity}</li>
                <li>Orbit Duration_yr: {orbit_duration_yr}</li>
                <li>Dry Mass in Kilograms: {dry_mass_kg}</li>
            </ul>
        </div>
    )
}

export default Dragon;