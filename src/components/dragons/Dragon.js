import './Dragon.css'

const Dragon = (props) =>{

    const { first_flight, name, wikipedia, description } = props.dragon

    return(
        <div className="dragon">
            <p><a href={wikipedia}>{name}</a></p>
            First Flight: {first_flight}
            <p>{description}</p>
        </div>
    )
}

export default Dragon