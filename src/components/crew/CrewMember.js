import './CrewMember.css'

const CrewMember = (props) =>{
    const { name, image, agency, wikipedia, status } = props.crewMember

    return(
        <div className="crewMember">
            <ul>
                <li><a href={wikipedia}>{name}</a></li>
                <li>Agency: {agency}</li>
                <li>Status: {status}</li>
                <img src={image} alt="crew member"/>
            </ul>
        </div>
    )
}

export default CrewMember