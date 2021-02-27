import './Capsule.css'

const Capsule = (props) =>{
    const { water_landings, land_landings, last_update, serial, type, status} = props.capsule

    return(
        <div className="capsules">
            <ul>
                <li>Type - {type}</li>
                <li>Serial#{serial}</li>
                <li>Current Status: {status}</li>
                <li>Land Landings {land_landings}</li>
                <li>Water Landings {water_landings}</li>
                <li>Last Update: {last_update}</li>
            </ul>
        </div>
    )
}

export default Capsule