import './Starlink.css'

const Starlink = (props) => {
    const { spaceTrack, version, launch, id} = props.starlink;

    return (
        <div className="starlinks">
            <ul>
                <li>Space Track: {spaceTrack}</li>
                <li>Version: {version}</li>
                <li>Launch: {launch}</li>
                <li>ID: {id}</li>
            </ul>
        </div>
    )
}

export default Starlink;