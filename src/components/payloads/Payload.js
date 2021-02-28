import './Payload.css'

const Payload = (props) => {
    const { name, type, nationalities, customers, manufacturers} = props.payload;

    return (
        <div className="payloads">
            <ul>
                <li>Name: {name}</li>
                <li>type: {type}</li>
                <li>Nationality: {nationalities}</li>
                <li>Customer: {customers}</li>
                <li>Manufacturer: {manufacturers}</li>
            </ul>
        </div>
    )
}

export default Payload;