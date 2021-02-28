// import { useState, useEffect } from 'react';
// import axios from 'axios'
// import Starlink from './Starlink'; // starlink component is in the same folder

// const StarlinkUnitContainer = () => {
//     const [starlinks, setStarlinks] = useState([])
        
//         useEffect(() => {
//             const fetchStarlinks = async () => {
//               const response = await axios.get('https://api.spacexdata.com/v4/starlink');
//               const data = response.data; //array

//               setStarlinks(data)
//             }
//             fetchStarlinks();
//         }, [])
    
//         console.log(starlinks)
    
//         const starlinkList = starlinks.map((starlink, index) => {
//             return <Starlink starlink={starlink} key={index} />
//         });
    
//         return (
//             <div>
//             {starlinkList}
//             </div>
//         )
//     }
    
//     export default StarlinkUnitContainer;