import './Launch.css'

const Launch = (props) =>{

    const {name, flight_number} = props.launch

    return(
        <div className="launch">
            <p>View this launch</p>
            {/* {props.match.params.id}<br/> */}
            {name}<br/>
            {flight_number}<br/>
        </div>
    )
}

export default Launch