import { useState, useEffect } from 'react'
import axios from 'axios'
import StarLink from './StarLink'
import {Link} from 'react-router-dom'

const StarLinkUnitContainer = () => {
    const [starlinks, setStarLinks] = useState([])
    
    
    useEffect(() => {
        const fetchStarLinks = async () => {
            const response = await axios.get('https://api.spacexdata.com/v4/StarLink');
            const data = response.data;
            // console.log(data);
            // destructuring
            setStarLinks(data);
        }
        fetchStarLinks();
    }, [])

    const starlinkList = starlinks.map((starlink, index) => {
        return <StarLink starlink={starlink} key={index} />

    });

    return (
        <div>
            {starlinkList}
        </div>
    )
}

export default StarLinkUnitContainer;