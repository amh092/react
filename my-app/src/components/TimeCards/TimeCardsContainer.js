import './TimeCardContainer.css'
const TimeCardContainer = (props) =>{

    return (
        <div className="time-card-container">
        {props.children}
        </div>
    )

}

export default TimeCardContainer