import './Capsule.css'

const Capsule = (props) => {
    const { water_landings, last_update, serial, type } = props.capsule;

    return (
        <div className="capsules">
            <ul>
                <li>Type: {type}</li>
                <li>Serial {serial}</li>
                <li>Water Landings: {water_landings}</li>
                <li>Last Update: {last_update}</li>
            </ul>
        </div>
    )
}

export default Capsule;