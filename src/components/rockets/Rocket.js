import './Rocket.css'

const Rocket = (props) =>{
    const {name, stages, boosters, cost_per_launch, success_rate_pct, first_flight, country, company, wikipedia, description} = props.rocket

    return(
        <div className="rockets">
            <a href={wikipedia}>{name}</a> {stages} stages utilizing {boosters} boosters. <br/><br/>
            ~${cost_per_launch} per launch <br/><br/>
            First flight: {first_flight}, w/ avg success race of {success_rate_pct}%<br/><br/>
            Located in {country}<br/><br/>
            Built, owned, and operated by {company}<br/><br/>
            More info: <textarea disabled>{description}</textarea>
        </div>
    )
}

export default Rocket