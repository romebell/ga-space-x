import './Dragon.css'

const Dragon = (props) => {
    const { name, type, crew_capacity, flickr_images, description} = props.dragon
    return(
        <div className='dragon'>
            <ul>
                <li>Name: {name}</li>
                <li>Type: {type}</li>
                <li>Crew Capacity: {crew_capacity}</li>
                <img src={flickr_images} alt="images"/>
                <li>Description: {description}</li>
            </ul>

        </div>
    )
}

export default Dragon;