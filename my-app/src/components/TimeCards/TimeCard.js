import React from 'react'
import './TimeCard.css'
import Container from '../UI/Container'
import Ellipsis from  './../../images/icon-ellipsis.svg'
import ExerciseSVG from '../SVGS/ExerciseSVG'
import SelfCareSVG from '../SVGS/SelfCareSVG'
import PlaySVG from '../SVGS/PlaySVG'
import StudySVG from '../SVGS/StudySVG'
import WorkSVG from '../SVGS/WorkSVG'
import SocialSVG from '../SVGS/SocialSVG'

const TimeCard = (props) => {
   
 
let img1 = ''

switch(props.img)  {

case 'Exercise' :{
    img1 = <ExerciseSVG/>;
    break;
}
case 'selfCare' : {
    img1 = <SelfCareSVG/>
break;
}

case 'study' : {
    img1 = <StudySVG/>;
    break;
}
case 'work' : {
    img1 = <WorkSVG/>
    break;
}
case 'social' : {
    img1 = <SocialSVG/>
    break;
}
case 'play' : {
    img1 = <PlaySVG/>
    break;
}
default  :
    break;
}
    return (
        <div className="time-card">
            <Container> 
                <div className={`card-icon ${props.BgColor}`}>
                  <div>
                  {props.img}
                  {img1}
                  </div>
                </div>
                <div className="time-card-details">
                    <div className="title"> 
                        <h1>{props.title}</h1>
                        <img src={Ellipsis} alt="Ellipsis dots"/>
                    </div>
                    <div className="statistics">
                        <h1>{props.hours} </h1>
                        <h1 >{`last ${props.frequency1} ${props.perviousHours}`}</h1>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default TimeCard
