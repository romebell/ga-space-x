import './Capsule.css'


const Capsule = (props) => {
    const { water_landings, last_update, serial, type, reuse_count, status, id } = props.capsule;

    return (
        <div className="capsules">
            <ul>
                <li>Type: {type}</li>
                <li>Serial: {serial}</li>
                <li>Reuse Count: {reuse_count}</li>
                <li>Water Landings: {water_landings}</li>
                <li>Last Update: {last_update}</li>
                <li>Status: {status}</li>
            </ul>
        </div>
    )
}

export default Capsule;
