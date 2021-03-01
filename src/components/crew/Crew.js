import './Crew.css'

const Crew = (props) => {
    const { name, agency, image, status } = props.crew
    return(
        <div className='crew'>
            <ul>
                <li>Name: {name}</li>
                <li>Agency: {agency}</li>
                <img src={image} alt="Crew"/>
                <li>Status: {status}</li>
            </ul>
        </div>
    )
}

export default Crew;