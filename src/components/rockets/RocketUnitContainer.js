// import { useState, useEffect } from 'react';
// import axios from 'axios'
// import Rocket from './Rocket'; // rocket component is in the same folder

// const RocketUnitContainer = () => {
//     const [rockets, setRockets] = useState([])
        
//         useEffect(() => {
//             const fetchRockets = async () => {
//               const response = await axios.get('https://api.spacexdata.com/v4/rockets');
//               const data = response.data; //array

//               setRockets(data)
//             }
//             fetchRockets();
//         }, [])
    
//         console.log(rockets)
    
//         const rocketList = rockets.map((rocket, index) => {
//             return <Rocket rocket={rockets} key={index} />
//         });
    
//         return (
//             <div>
//             {rockets}
//             </div>
//         )
//     }
    
//     export default RocketUnitContainer;