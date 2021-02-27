import './Crew.css'

const Crew = (props) => {
    const { name, agency, image, status, wikipedia} = props.crew;

    return (
        <div className="crews">
            <ul>
                <li>Name: {name}</li>
                <li>Agency: {agency}</li>
                <li>Image: {image}</li>
                <li>Status: {status}</li>
                <li>Wiki: {wikipedia}</li>
            </ul>
        </div>
    )
}

export default Crew;