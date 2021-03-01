import {useState, useEffect} from 'react'
import axios from 'axios'
import History from './History'

const HistoryUnitContainer = (props) =>{
    const [history, setHistory] = useState([])

    useEffect(()=>{
        const fetchHistory = async()=>{
            const response = await axios.get('https://api.spacexdata.com/v4/history')
            const data = await response.data
            setHistory(data)
        }
        fetchHistory()
    }, [])

    const historyList = history.map((history, index)=>{
        return <History history={history} key={index}/>
    })

    return(
        <div>
            Historically Historic Historial History
            {historyList} 
        </div>
    )
}

export default HistoryUnitContainer