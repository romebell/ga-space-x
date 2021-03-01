import './Payload.css'

const Payload = (props) => {
    const { name, type, regime} = props.payload

    

    return(
        <div className='payload'>
            <ul>
                <li>Name: {name}</li>
                <li>type: {type}</li>
                <li>regime: {regime}</li>

            </ul>

        </div>
    )
}

export default Payload;