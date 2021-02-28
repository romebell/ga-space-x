import './Rocket.css'

const Rocket = (props) => {
    const { name, stages, image, cost_per_launch, country, description} = props.rocket;

    return (
        <div className="rockets">
            <ul>
                <li>Name: {name}</li>
                <li>Number of Stages: {stages}</li>
                <li>Image: {image}</li>
                <li>Cost Per Launch: {cost_per_launch}</li>
                <li>Country: {country}</li>
                <li>Description: {description}</li>
            </ul>
        </div>
    )
}

export default Rocket;