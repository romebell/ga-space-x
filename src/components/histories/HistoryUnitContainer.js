// import { useState, useEffect } from 'react';
// import axios from 'axios'
// import History from './History';

// const HistoryUnitContainer = () => {
//     const [histories, setHistories] = useState([])
        
//         useEffect(() => {
//             const fetchHistories = async () => {
//               const response = await axios.get('https://api.spacexdata.com/v4/history');
//               const data = response.data; //array

//               setHistories(data)
//             }
//             fetchHistories();
//         }, [])
    
//         console.log(histories)
    
//         const historyList = histories.map((history, index) => {
//             return <History historyList={history} key={index} />
//         });
    
//         return (
//             <div>
//             {historyList}
//             </div>
//         )
//     }
    
//     export default HistoryUnitContainer;