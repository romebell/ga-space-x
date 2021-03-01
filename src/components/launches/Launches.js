import {Link} from 'react-router-dom'
import Launch from './Launch'

const Launches = (props) => {

    const launches = [props.launch.id]
    console.log(launches)

    const launchesList = launches.map((item, index)=>{
        return <li key={index}><Link to={`/launches/${item}`}>{item}</Link></li>
    })
    return(
        <div>
            {launchesList}
        </div>
    )
}

export default Launches