import "./Normalize.css";
import './app.css'
import ProfileCard from "./components/ProfileCard/ProfileCard";
import TimeCard from "./components/TimeCards/TimeCard";
import React, { useState } from "react";
import TimeCardContainer from "./components/TimeCards/TimeCardsContainer";

const Dummy_Data = [
  {
    title: "work",
    daily: "5hrs",
    perviousDay: "7hrs",
    weekly: "3hrs",
    perviousWeek: "36hrs",
    monthly: "103hrs",
    perviousMonth: "128hrs",
  },

  {
    title: "play",
    daily: "2hrs",
    perviousDay: "10hrs",
    weekly: "3hrs",
    perviousWeek: "36hrs",
    monthly: "103hrs",
    perviousMonth: "29hrs",
  },

  {
    title: "study",
    daily: "0hrs",
    perviousDay: "1hrs",
    weekly: "4hrs",
    perviousWeek: "7hrs",
    monthly: "13hrs",
    perviousMonth: "19hrs",
  },
  {
    title: "Exercise",
    daily: "1hrs",
    perviousDay: "1hrs",
    weekly: "4hrs",
    perviousWeek: "5hrs",
    monthly: "11hrs",
    perviousMonth: "18hrs",
  },
  {
    title: "Social",
    daily: "1hrs",
    perviousDay: "3hrs",
    weekly: "5hrs",
    perviousWeek: "10hrs",
    monthly: "21hrs",
    perviousMonth: "23hrs",
  },
  {
    title: "Self care",
    daily: "0hrs",
    perviousDay: "1hrs",
    weekly: "2hrs",
    perviousWeek: "2hrs",
    monthly: "7hrs",
    perviousMonth: "11hrs",
  },
];
function App() {
  const [frequency, setFrequency] = useState("");

  const frequencyHandler = (frequency) => {
    setFrequency(() => {
      return frequency;
    });
  };
  return (
    <div className="App">
    
      <ProfileCard
        name={"jeremy robson"}
        onFrequencyChange={frequencyHandler}
      />
   <TimeCardContainer>
      {frequency === "day" && (
        <TimeCard
          img={"work"}
          BgColor={"work"}
          title={"work"}
          frequency1={frequency}
          hours={Dummy_Data[0].daily}
          perviousHours={Dummy_Data[0].perviousDay}
        />
      )}
      {frequency === "day" && (
        <TimeCard
          img={"play"}
          BgColor={"play"}
          title={"play"}
          frequency1={frequency}
          hours={Dummy_Data[1].daily}
          perviousHours={Dummy_Data[1].perviousDay}
        />
      )}
      {frequency === "day" && (
        <TimeCard
          img={"study"}
          BgColor={"study"}
          title={"study"}
          frequency1={frequency}
          hours={Dummy_Data[2].daily}
          perviousHours={Dummy_Data[2].perviousDay}
        />
      )}
      {frequency === "day" && (
        <TimeCard
          img={"Exercise"}
          BgColor={"exercise"}
          title={"exercise"}
          frequency1={frequency}
          hours={Dummy_Data[3].daily}
          perviousHours={Dummy_Data[3].perviousDay}
        />
      )}
      {frequency === "day" && (
        <TimeCard
          img={"social"}
          BgColor={"social"}
          title={"social"}
          frequency1={frequency}
          hours={Dummy_Data[4].daily}
          perviousHours={Dummy_Data[4].perviousDay}
        />
      )}
      {frequency === "day" && (
        <TimeCard
          img={"selfCare"}
          BgColor={"self-care"}
          title={"self care"}
          frequency1={frequency}
          hours={Dummy_Data[5].daily}
          perviousHours={Dummy_Data[5].perviousDay}
        />
      )}

      {frequency === "week" && (
        <TimeCard
          img={"work"}
          BgColor={"work"}
          title={"work"}
          frequency1={frequency}
          hours={Dummy_Data[0].weekly}
          perviousHours={Dummy_Data[0].perviousWeek}
        />
      )}
      {frequency === "week" && (
        <TimeCard
          img={"play"}
          BgColor={"play"}
          title={"play"}
          frequency1={frequency}
          hours={Dummy_Data[1].weekly}
          perviousHours={Dummy_Data[1].perviousWeek}
        />
      )}
      {frequency === "week" && (
        <TimeCard
          img={"study"}
          BgColor={"study"}
          title={"study"}
          frequency1={frequency}
          hours={Dummy_Data[2].weekly}
          perviousHours={Dummy_Data[2].perviousWeek}
        />
      )}
      {frequency === "week" && (
        <TimeCard
          img={"Exercise"}
          BgColor={"exercise"}
          title={"exercise"}
          frequency1={frequency}
          hours={Dummy_Data[3].weekly}
          perviousHours={Dummy_Data[3].perviousWeek}
        />
      )}
      {frequency === "week" && (
        <TimeCard
          img={"social"}
          BgColor={"social"}
          title={"social"}
          frequency1={frequency}
          hours={Dummy_Data[4].weekly}
          perviousHours={Dummy_Data[4].perviousWeek}
        />
      )}
      {frequency === "week" && (
        <TimeCard
          img={"selfCare"}
          BgColor={"self-care"}
          title={"self care"}
          frequency1={frequency}
          hours={Dummy_Data[5].weekly}
          perviousHours={Dummy_Data[5].perviousWeek}
        />
      )}

      {frequency === "month" && (
        <TimeCard
          img={"work"}
          BgColor={"work"}
          title={"work"}
          frequency1={frequency}
          hours={Dummy_Data[0].monthly}
          perviousHours={Dummy_Data[0].perviousMonth}
        />
      )}
      {frequency === "month" && (
        <TimeCard
          img={"play"}
          BgColor={"play"}
          title={"play"}
          frequency1={frequency}
          hours={Dummy_Data[1].monthly}
          perviousHours={Dummy_Data[1].perviousMonth}
        />
      )}
      {frequency === "month" && (
        <TimeCard
          img={"study"}
          BgColor={"study"}
          title={"study"}
          frequency1={frequency}
          hours={Dummy_Data[2].monthly}
          perviousHours={Dummy_Data[2].perviousMonth}
        />
      )}
      {frequency === "month" && (
        <TimeCard
          img={"Exercise"}
          BgColor={"exercise"}
          title={"exercise"}
          frequency1={frequency}
          hours={Dummy_Data[3].monthly}
          perviousHours={Dummy_Data[3].perviousMonth}
        />
      )}
      {frequency === "month" && (
        <TimeCard
          img={"social"}
          BgColor={"social"}
          title={"social"}
          frequency1={frequency}
          hours={Dummy_Data[4].monthly}
          perviousHours={Dummy_Data[4].perviousMonth}
        />
      )}
      {frequency === "month" && (
        <TimeCard
          img={"selfCare"}
          BgColor={"self-care"}
          title={"self care"}
          frequency1={frequency}
          hours={Dummy_Data[5].monthly}
          perviousHours={Dummy_Data[5].perviousMonth}
        />
      )}
      </TimeCardContainer>
    </div>
  );
}
export default App;
