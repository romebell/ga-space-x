import {useState, useEffect} from 'react'
import axios from 'axios'
import Core from './Core'

const CoreUnitContainer = () =>{

    const [cores, setCores] = useState([])

    useEffect(()=>{
        const fetchCore = async()=>{
            const response = await axios.get('https://api.spacexdata.com/v4/cores')
            const data = response.data
            setCores(data)
        }
        fetchCore()
    }, [])

    const coreList = cores.map((core, index)=>{
        return <Core core={core} key={index}/>
    })

    return(
        <div>
            <h2>Core Data</h2>
            {coreList}
        </div>
    )
}

export default CoreUnitContainer