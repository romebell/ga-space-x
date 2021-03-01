import './Landpad.css'

const Landpad = (props)=>{

    const {name, full_name, type, locality, region, landing_attempts, landing_successes, wikipedia, details, status} = props.landpad

    return(
        <div className="landpad">
            <a href={wikipedia}>Landpad {full_name}, AKA {name}</a><br/>
            {type} type landing pad located in {locality}, {region}.<br/><br/>
            Currently {status} with a {landing_successes}/{landing_attempts} success rate. <br/><br/>
            More details...<br/>
            <textarea disabled>{details}</textarea>
        </div>
    )
}

export default Landpad