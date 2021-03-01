import { useState, useEffect } from 'react'
import axios from 'axios'
import Landpad from './Landpad'
import {Link} from 'react-router-dom'

const LandpadUnitContainer = () => {
    const [landpads, setLandpads] = useState([])
    
    
    useEffect(() => {
        const fetchLandpads = async () => {
            const response = await axios.get('https://api.spacexdata.com/v4/landpads');
            const data = response.data;
            // console.log(data);
            // destructuring
            setLandpads(data);
        }
        fetchLandpads();
    }, [])

    const landpadList = landpads.map((landpad, index) => {
        return <Landpad landpad={landpad} key={index} />
        // <li key={landpad}><Link to={`/landpads/${landpad}`}>{landpad}</Link></li>
    });

    return (
        <div>
            {landpadList}
        </div>
    )
}

export default LandpadUnitContainer;