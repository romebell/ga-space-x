import './History.css'

const History = (props)=>{
    const {links, title, details} = props.history

    return(
        <div className="history">
            <a href={links.article}>{title}</a><br/>
            <textarea disabled>{details}</textarea>
        </div>
    )
}

export default History