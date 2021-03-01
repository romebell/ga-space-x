  import './History.css'

const History = (props)=>{
    const {links, title, details} = props.history

    return(
        <div className="history">
            <a href={links.article}>{title}</a><br/>
            <p disabled>{details}</p>
        </div>
    )
}

export default History