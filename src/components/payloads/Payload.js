import './Payload.css'

const Payload = (props) =>{
    const {name, type, orbit, mass_kg} = props.payload

    return(
        <div className="payload">
            Payload name: {name}<br/>
            Payload type: {type}<br/>
            Orbit: {orbit}<br/>
            Mass in kg: {mass_kg}
        </div>
    )
}

export default Payload