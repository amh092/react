import React, { useState } from "react";
import "./ProfileCard.css";
import "./ProfileCardDesktop.css"
import Container from "../UI/Container";


const ProfileCard = (props) => {
 
  const [frequency, setFrequency] = useState('week')

  const [day, setDaily] = useState(true);
  const [week, setWeekly] = useState(false);
  const [month, setMonthly] = useState(false);

  const dailyHandler = () => {
    setDaily(true);
    setWeekly(false);
    setMonthly(false);
    setFrequency('day')
  
    
  };
  const weeklyHandler = () => {
    setDaily(false);
    setWeekly(true);
    setMonthly(false);
    setFrequency('week')
 
  };
  const monthlyHandler = () => {
    setDaily(false);
    setWeekly(false);
    setMonthly(true);
    setFrequency('month')
    
  
  };

  props.onFrequencyChange(frequency)


  return (
    <div className="card">
      <Container>
        <div className="card-profile">
          <div className="card-profile-content">
            <img src={require("../../images/image-jeremy.png")} alt="Jeremy" />
            <div className="profile-name">
              <h1>Report for</h1>
              <h1>{props.name}</h1>
          
            </div>
          </div>
          <div className="frequency">

            {day ? (
              <h1 className={"activated"}>daily</h1>
            ) : (
              <h1 onClick={(dailyHandler)}>daily</h1>
            )}


            {week ? (
              <h1 className={"activated"}>weekly</h1>
            ) : (
              <h1 onClick={(weeklyHandler)}>weekly</h1>
            )}
            {month ? (
              <h1 className={"activated"}>monthly</h1>
            ) : (
              <h1 onClick={(monthlyHandler)}>monthly</h1>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProfileCard;