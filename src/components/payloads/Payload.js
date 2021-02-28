import './Payload.css'

const Payload = (props) => {
    const { name, type, nationalities, customers, manufacturers} = props.payload;

    return (
        <div className="payloads">
            <ul>
                <li>Name: {name}</li>
                <li>type: {type}</li>
                <li>Nationalities: {nationalities}</li>
                <li>Customers: {customers}</li>
                <li>Manufacturers: {manufacturers}</li>
            </ul>
        </div>
    )
}

export default Payload;