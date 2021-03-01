import './LaunchPad.css'

const LaunchPad = (props) =>{
    const {name, full_name, locality, region, details, status, launch_attempts, launch_successes} = props.launchPad

    return(
        <div className="launchpad">
            {full_name} AKA {name}<br/><br/>
            Current status: {status}<br/><br/>
            Located in {locality}, {region}<br/><br/>
            Launch Success Rate {launch_successes}/{launch_attempts}<br/><br/>
            More Info: <textarea disabled>{details}</textarea>
        </div>
    )
}

export default LaunchPad