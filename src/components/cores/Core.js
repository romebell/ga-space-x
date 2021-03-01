import './Core.css'

const Core = (props) => {
    const { serial, status, last_update } = props.core
    return(
        <div className='core'>
            <ul>
                <li>Serial: {serial}</li>
                <li>Status: {status}</li>
                <li>Last Update: {last_update}</li>
            </ul>

        </div>
    )
}

export default Core;