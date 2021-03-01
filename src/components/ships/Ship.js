import './Ship.css'

const Ship = (props) =>{
    const {name, type, home_port, year_built, link, image} = props.ship

    return(
        <div className="ship">
            <div className="left">
                <a href={link}>{name}</a> EST. {year_built} <br/>
                Port: {home_port}<br/>
                Type: {type}<br/>
            </div>

            <div className="right">
                <img src={image} alt="a ship"/>
            </div>
        </div>
    )
}

export default Ship