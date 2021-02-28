import './Ship.css'

const Ship = (props) => {
    const { legacy_id, model, type, roles,} = props.ship;

    return (
        <div className="ships">
            <ul>
                <li>Name: {legacy_id}</li>
                <li>Model: {model}</li>
                <li>Type: {type}</li>
                <li>Roles: {roles}</li>
            </ul>
        </div>
    )
}

export default Ship;