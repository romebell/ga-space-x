import './Core.css'

const Core = (props) => {
    const { serial, asds_attempts, asds_landings, status, last_update} = props.core;

    return (
        <div className="cores">
            <ul>
                <li>Serial: {serial}</li>
                <li>ASDS Attempts: {asds_attempts}</li>
                <li>ASDS Landings: {asds_landings}</li>
                <li>Status: {status}</li>
                <li>Last Update: {last_update}</li>
            </ul>
        </div>
    )
}

export default Core;